// scripts/server.js
// Small Express server that exposes an endpoint to fetch/serve a rustrician circuit GIF/PNG.
// Usage:
// 1) npm install
// 2) node scripts/server.js
// 3) GET /api/circuit/:id  - returns the file if available, triggers fetch if missing

const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const { fetchAndSave } = require('./fetch_rustrician');

const app = express();
const port = process.env.PORT || 3000;
const imagesDir = path.join(__dirname, '..', 'images');
const bmTimeoutMs = 10000;
const buildLocationsPath = path.join(__dirname, '..', 'data', 'build_locations.json');

// Enable CORS for GitHub Pages
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins for now
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json({ limit: '200kb' }));

function loadBuildLocations() {
  try {
    if (!fs.existsSync(buildLocationsPath)) {
      return { maps: {} };
    }
    const raw = fs.readFileSync(buildLocationsPath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load build locations:', err);
    return { maps: {} };
  }
}

function saveBuildLocations(data) {
  try {
    fs.mkdirSync(path.dirname(buildLocationsPath), { recursive: true });
    fs.writeFileSync(buildLocationsPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Failed to save build locations:', err);
    return false;
  }
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (apiRes) => {
      let data = '';
      apiRes.on('data', chunk => data += chunk);
      apiRes.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });

    request.on('error', reject);

    request.setTimeout(bmTimeoutMs, () => {
      request.abort();
      reject(new Error('Request timeout'));
    });
  });
}

function chooseHistoryResolution(startDate) {
  const ageDays = (Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24);
  return ageDays > 30 ? 1440 : 60;
}

// Proxy for BattleMetrics API
app.get('/api/battlemetrics/:serverId', async (req, res) => {
  const serverId = req.params.serverId;
  const url = `https://api.battlemetrics.com/servers/${serverId}`;
  
  try {
    const request = https.get(url, (apiRes) => {
      let data = '';
      apiRes.on('data', chunk => data += chunk);
      apiRes.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (!res.headersSent) {
            res.json(parsed);
          }
        } catch (e) {
          if (!res.headersSent) {
            res.status(500).json({ error: 'Failed to parse BattleMetrics response' });
          }
        }
      });
    });
    
    request.on('error', (err) => {
      console.error('BattleMetrics fetch error:', err);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Failed to fetch from BattleMetrics' });
      }
    });
    
    request.setTimeout(bmTimeoutMs, () => {
      request.abort();
      if (!res.headersSent) {
        res.status(504).json({ error: 'BattleMetrics request timeout' });
      }
    });
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ error: err.message });
    }
  }
});

// Average player count for first 14 days of wipe
app.get('/api/battlemetrics-average/:serverId', async (req, res) => {
  const serverId = req.params.serverId;

  try {
    const serverData = await fetchJson(`https://api.battlemetrics.com/servers/${serverId}`);
    const details = serverData?.data?.attributes?.details || {};
    const lastWipe = details.rust_last_wipe || details.rust_last_seed_change || details.rust_born;

    if (!lastWipe) {
      return res.status(404).json({ error: 'Wipe date not available' });
    }

    const startDate = new Date(lastWipe);
    const stopDate = new Date(startDate.getTime() + 14 * 24 * 60 * 60 * 1000);
    const startIso = startDate.toISOString();
    const stopIso = stopDate.toISOString();
    const resolution = chooseHistoryResolution(startDate);

    const historyUrl = `https://api.battlemetrics.com/servers/${serverId}/player-count-history?start=${encodeURIComponent(startIso)}&stop=${encodeURIComponent(stopIso)}&resolution=${resolution}`;
    const historyData = await fetchJson(historyUrl);
    const points = Array.isArray(historyData?.data) ? historyData.data : [];
    const values = points
      .map(point => {
        const value = point?.attributes?.value;
        const max = point?.attributes?.max;
        return Number.isFinite(value) ? value : max;
      })
      .filter(value => Number.isFinite(value));

    if (!values.length) {
      return res.json({
        avgPlayers: null,
        sampleCount: 0,
        start: startIso,
        stop: stopIso,
        resolution
      });
    }

    const sum = values.reduce((acc, value) => acc + value, 0);
    const avgPlayers = Math.round(sum / values.length);

    return res.json({
      avgPlayers,
      sampleCount: values.length,
      start: startIso,
      stop: stopIso,
      resolution
    });
  } catch (err) {
    console.error('Average population error:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to compute average population' });
    }
  }
});

// Peak player count during first 24 hours of wipe
app.get('/api/battlemetrics-initial-pop/:serverId', async (req, res) => {
  const serverId = req.params.serverId;

  try {
    const serverData = await fetchJson(`https://api.battlemetrics.com/servers/${serverId}`);
    const details = serverData?.data?.attributes?.details || {};
    const lastWipe = details.rust_last_wipe || details.rust_last_seed_change || details.rust_born;

    if (!lastWipe) {
      return res.status(404).json({ error: 'Wipe date not available' });
    }

    const startDate = new Date(lastWipe);
    const stopDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
    const startIso = startDate.toISOString();
    const stopIso = stopDate.toISOString();
    const resolution = chooseHistoryResolution(startDate);

    const historyUrl = `https://api.battlemetrics.com/servers/${serverId}/player-count-history?start=${encodeURIComponent(startIso)}&stop=${encodeURIComponent(stopIso)}&resolution=${resolution}`;
    const historyData = await fetchJson(historyUrl);
    const points = Array.isArray(historyData?.data) ? historyData.data : [];
    const values = points
      .map(point => {
        if (resolution === 1440) {
          return point?.attributes?.max;
        }
        return point?.attributes?.value;
      })
      .filter(value => Number.isFinite(value));

    if (!values.length) {
      return res.json({
        initialPop: null,
        sampleCount: 0,
        start: startIso,
        stop: stopIso,
        resolution
      });
    }

    const initialPop = Math.max(...values);

    return res.json({
      initialPop,
      sampleCount: values.length,
      start: startIso,
      stop: stopIso,
      resolution
    });
  } catch (err) {
    console.error('Initial population error:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to compute initial population' });
    }
  }
});

// Resolve Rustmaps page URL to a direct map image URL
app.get('/api/rustmaps-image', (req, res) => {
  const mapUrl = req.query.url;
  if (!mapUrl || typeof mapUrl !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid url parameter' });
  }

  try {
    const request = https.get(mapUrl, (pageRes) => {
      let html = '';
      pageRes.on('data', chunk => html += chunk);
      pageRes.on('end', () => {
        const match = html.match(/https:\/\/content\.rustmaps\.com\/maps\/[0-9]+\/[a-f0-9]+\/map_icons\.png/i);
        if (match) {
          return res.json({ imageUrl: match[0] });
        }
        return res.status(404).json({ error: 'Map image not found in rustmaps page' });
      });
    });

    request.on('error', (err) => {
      console.error('Rustmaps fetch error:', err);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Failed to fetch rustmaps page' });
      }
    });

    request.setTimeout(10000, () => {
      request.abort();
      if (!res.headersSent) {
        res.status(504).json({ error: 'Rustmaps request timeout' });
      }
    });
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ error: err.message });
    }
  }
});

// Build location suggestions (per map)
app.get('/api/build-locations', (req, res) => {
  const mapKey = req.query.mapKey;
  if (!mapKey || typeof mapKey !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid mapKey parameter' });
  }

  const data = loadBuildLocations();
  const entries = Array.isArray(data.maps?.[mapKey]) ? data.maps[mapKey] : [];
  return res.json({ entries });
});

app.post('/api/build-locations', (req, res) => {
  const { mapKey, x, y, pros, cons } = req.body || {};

  if (!mapKey || typeof mapKey !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid mapKey' });
  }

  const xNum = Number(x);
  const yNum = Number(y);
  if (!Number.isFinite(xNum) || !Number.isFinite(yNum) || xNum < 0 || xNum > 1 || yNum < 0 || yNum > 1) {
    return res.status(400).json({ error: 'Invalid coordinates' });
  }

  const prosList = Array.isArray(pros) ? pros : (typeof pros === 'string' ? [pros] : []);
  const consList = Array.isArray(cons) ? cons : (typeof cons === 'string' ? [cons] : []);

  const data = loadBuildLocations();
  if (!data.maps[mapKey]) data.maps[mapKey] = [];

  const existing = data.maps[mapKey];
  const maxLabel = existing.reduce((max, item) => Math.max(max, item.label || 0), 0);
  const entry = {
    id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    label: maxLabel + 1,
    x: xNum,
    y: yNum,
    pros: prosList.filter(Boolean),
    cons: consList.filter(Boolean),
    createdAt: new Date().toISOString()
  };

  existing.push(entry);

  if (!saveBuildLocations(data)) {
    return res.status(500).json({ error: 'Failed to save build location' });
  }

  return res.json({ entry });
});

app.patch('/api/build-locations/:id', (req, res) => {
  const entryId = req.params.id;
  const { mapKey, pros, cons } = req.body || {};

  if (!mapKey || typeof mapKey !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid mapKey' });
  }

  const data = loadBuildLocations();
  const entries = Array.isArray(data.maps?.[mapKey]) ? data.maps[mapKey] : null;
  if (!entries) {
    return res.status(404).json({ error: 'Map not found' });
  }

  const entry = entries.find(item => item.id === entryId);
  if (!entry) {
    return res.status(404).json({ error: 'Entry not found' });
  }

  const prosList = Array.isArray(pros) ? pros : (typeof pros === 'string' ? [pros] : []);
  const consList = Array.isArray(cons) ? cons : (typeof cons === 'string' ? [cons] : []);
  entry.pros = prosList.filter(Boolean);
  entry.cons = consList.filter(Boolean);
  entry.updatedAt = new Date().toISOString();

  if (!saveBuildLocations(data)) {
    return res.status(500).json({ error: 'Failed to update build location' });
  }

  return res.json({ entry });
});

app.delete('/api/build-locations/:id', (req, res) => {
  const entryId = req.params.id;
  const mapKey = req.query.mapKey;
  if (!mapKey || typeof mapKey !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid mapKey' });
  }

  const data = loadBuildLocations();
  const entries = Array.isArray(data.maps?.[mapKey]) ? data.maps[mapKey] : null;
  if (!entries) {
    return res.status(404).json({ error: 'Map not found' });
  }

  const index = entries.findIndex(item => item.id === entryId);
  if (index === -1) {
    return res.status(404).json({ error: 'Entry not found' });
  }

  entries.splice(index, 1);

  if (!saveBuildLocations(data)) {
    return res.status(500).json({ error: 'Failed to delete build location' });
  }

  return res.json({ success: true });
});

app.get('/api/circuit/:id', async (req, res) => {
  const id = req.params.id;
  const gifPath = path.join(imagesDir, `rustrician_${id}.gif`);
  const pngPath = path.join(imagesDir, `rustrician_${id}.png`);

  // If GIF already exists, send it
  if (fs.existsSync(gifPath)) return res.sendFile(gifPath);
  if (fs.existsSync(pngPath)) return res.sendFile(pngPath);

  // Otherwise, kick off fetch, stream a 202 response and then send the file when ready
  res.status(202).json({ status: 'fetching', message: 'Started fetching circuit. Poll /api/circuit/:id to check when ready.' });

  // Run fetch in background (do not await to keep response quick)
  fetchAndSave(id, imagesDir).then(result => {
    if (result.success) console.log('Fetch finished for', id, '->', result.path);
    else console.error('Fetch failed for', id, result.error);
  }).catch(err => console.error('Background fetch error', err));
});

// Static serve images folder for the site to load resulting images
app.use('/images', express.static(path.join(__dirname, '..', 'images')));

// Static serve frontend files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '..')));

app.listen(port, '0.0.0.0', () => {
  console.log(`Fetcher server listening on http://0.0.0.0:${port}`);
  console.log('Endpoints:');
  console.log('  GET /api/circuit/<id>  - trigger fetch if missing (returns 202) or serve file if ready');
  console.log('  GET /api/battlemetrics/<serverId> - fetch live server stats from BattleMetrics');
});

