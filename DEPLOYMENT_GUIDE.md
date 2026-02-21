# GitHub Pages + Raspberry Pi Setup Guide

## Current Status
✅ CORS enabled on Express server
✅ All API calls updated to use `API_BASE_URL`
✅ Configuration file created (`config.js`)

## Steps to Deploy

### 1. Get a Public Tunnel URL

**Option A: ngrok (Recommended - easiest)**
```bash
# Sign up for free account at https://ngrok.com
# Get your auth token from dashboard
ngrok config add-authtoken YOUR_TOKEN_HERE

# Start tunnel
ngrok http 3000
# You'll get a URL like: https://abc123.ngrok-free.app
```

**Option B: Cloudflare Tunnel**
```bash
# Already installed, run:
cloudflared tunnel --url http://localhost:3000
# You'll get a URL like: https://random-name.trycloudflare.com
```

**Option C: LocalTunnel**
```bash
npm install -g localtunnel
lt --port 3000
# You'll get a URL like: https://random.loca.lt
```

### 2. Update config.js

Edit `/home/mtvproof/Desktop/RATS-Homepage/config.js`:
```javascript
const API_BASE_URL = 'https://your-tunnel-url-here';
```

Replace `your-tunnel-url-here` with the URL from step 1.

### 3. Push to GitHub

```bash
cd /home/mtvproof/Desktop/RATS-Homepage
git add .
git commit -m "Update for GitHub Pages deployment"
git push origin main
```

### 4. Enable GitHub Pages

1. Go to your GitHub repository
2. Settings → Pages
3. Source: Deploy from branch
4. Branch: main → / (root) → Save
5. Your site will be at: `https://yourusername.github.io/RATS-Homepage/`

### 5. Keep Services Running

**Keep Node server running:**
```bash
# Use screen or tmux for persistent session
screen -S rats-server
cd /home/mtvproof/Desktop/RATS-Homepage
node scripts/server.js
# Press Ctrl+A then D to detach
```

**Keep tunnel running:**
```bash
screen -S rats-tunnel
ngrok http 3000
# Or: cloudflared tunnel --url http://localhost:3000
# Press Ctrl+A then D to detach
```

**Auto-start on boot (optional):**
```bash
# Create systemd service files for both server and tunnel
# (Let me know if you want help with this)
```

## Testing

1. Visit `http://localhost:3000` - should work locally
2. Visit your tunnel URL - should show the site
3. Visit GitHub Pages URL - should connect to your Pi's API

## Notes

- **Free tunnel URLs change** when you restart them
  - ngrok free: URL changes on restart
  - Cloudflare free: URL changes on restart
  - ngrok paid ($8/mo): fixed URL
- **Raspberry Pi must be on** for site to work
- Build locations are shared between all users
- Consider rate limiting if traffic gets high

## Troubleshooting

- **CORS errors**: Check browser console, verify CORS headers in `scripts/server.js`
- **API not found**: Verify `API_BASE_URL` in config.js
- **Tunnel down**: Restart tunnel service
- **Pi offline**: Site will load but show "Failed to load server" errors
