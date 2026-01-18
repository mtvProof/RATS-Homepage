# RATS Homepage - AI Coding Agent Instructions

## Project Overview

**RATS Homepage** is a Rust game utility site with a two-tier architecture:
- **Frontend**: Single-page static HTML/CSS/JS (`index.html`, `script.js`, `style.css`) that displays game circuit diagrams, crafting guides, and loot sorting systems
- **Backend services**: Node.js Express server for dynamically fetching and serving Rustrician circuit images using headless Chromium

The site is game data-driven: large arrays of button objects in `script.js` define the UI layout and copy-to-clipboard functionality for Rust game configurations.

## Architecture & Data Patterns

### Frontend Structure (`script.js`)
- **7,400+ line file** containing both logic and embedded game data
- All content organized as JavaScript object arrays: `sortingButtonsPage1`, `crafterButtons`, `lockerButtons`, `diagramButtons`, `electricalButtons`, etc.
- Each button object follows this pattern:
  ```js
  {
    label: "Display name",
    image: "filename.png",        // PNG stored in images/ folder
    message: "JSON string..."     // Copied to clipboard via copyToClipboard()
  }
  ```
- **Tab-based UI system**: `showSortingPage()`, `showPage()` toggle visibility between sections
- **Page structure**: Industrial, Electrical, Artwork, Tool Cupboard, Crafter Bind, Locked pages — each is a `<div class="page hidden">` in HTML toggled by nav buttons

### Backend Services
- **`scripts/server.js`**: Express server on port 3000 (customizable via `PORT` env var)
  - GET `/api/circuit/:id` — returns cached GIF/PNG or triggers background fetch, returns 202 Accepted
  - Static serves `/images/` folder for frontend to load resulting images
- **`scripts/fetch_rustrician.js`**: Headless Chromium via Puppeteer
  - Navigates to `https://www.rustrician.io/?circuit={id}`
  - Intercepts network responses to capture GIF export
  - Falls back to PNG screenshot if GIF not captured
  - Saves result to `images/rustrician_{id}.gif` or `.png`

## Critical Workflows

### Adding New Buttons/Content
1. Define new button object in corresponding `xxxButtons` array in `script.js`
2. Ensure `image` field references a PNG in `images/` directory
3. For electrical circuits, use `fullImage` property for external images: `fullImage: '/images/rustrician_{id}.gif'`
4. Test toggle via corresponding `show*()` function call in browser

### Running the Backend Server (if modifying electrical circuits)
```bash
npm install  # Install express & puppeteer (4+ minutes first time due to Chromium download)
node scripts/server.js
# Then: curl http://localhost:3000/api/circuit/<circuitId>
# First call returns 202, poll repeatedly until file is ready
```

### Frontend Development
- Direct file edits; no build step required
- CSS uses flexbox with dark theme: `#1e1e1e` background, `#ff4c4c` accent red
- All game icons are 32×32 PNG sprites stored in `images/` (referenced by `image` property in buttons)

## Project Files Reference

| Path | Purpose |
|------|---------|
| `index.html` | Single HTML page; all nav logic via JS |
| `script.js` | 7,400 lines: game data arrays + UI logic (toggle, copy, fetch) |
| `style.css` | Dark theme styling; button grids, page visibility |
| `scripts/server.js` | Express API for circuit GIF/PNG caching & serving |
| `scripts/fetch_rustrician.js` | Puppeteer automation for Rustrician circuit export |
| `scripts/pi_monitor.py` | Monitoring utility (external; not core to site) |
| `data/pi-stats.json` | Runtime data (ignored for most edits) |
| `images/` | PNG sprites (32×32) + fetched GIF/PNG circuits |
| `backups/` | Archive; not actively used |

## Key Conventions

- **Button data is embedded**: No external JSON files for UI content; all data lives in `script.js` arrays
- **No build/transpile**: Plain JS, run directly in browser (ES5 compatible)
- **Copy-to-clipboard pattern**: All message fields contain JSON stringified game config; `copyToClipboard(text, button)` adds visual feedback
- **Page hiding via CSS classes**: `.hidden` class toggles display; `showPage()` function manages active nav buttons
- **Rustrician integration**: Circuit images fetched via background Express server; frontend polls `/images/rustrician_{id}.{gif|png}`

## Common Tasks

**Add a new sorting filter:**
1. Add object to `sortingButtonsPage1` array
2. Increment relevant game stats in the `message` JSON

**Add a new electrical circuit:**
1. Fetch circuit GIF: `curl http://localhost:3000/api/circuit/{circuitId}`
2. Add entry to `electricalButtons` array with `fullImage: '/images/rustrician_{circuitId}.gif'`
3. Test via "Electrical" tab in browser

**Fix styling issues:**
- Edit `style.css`; use `.page`, `.button-grid`, `.diagram-flexbox` selectors
- Dark theme colors: backgrounds `#1e1e1e`, `#111`, `#333`; accents `#ff4c4c`

**Deploy changes:**
- Push changes to GitHub; site is static HTML/CSS/JS — direct deployment or serve via express `app.use(express.static(__dirname))`
