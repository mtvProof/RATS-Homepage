# Server Voting Configuration Guide

## Quick Setup

The Server Voting page is now live between "Electrical" and "Artwork" in your navigation.

## How to Add/Edit Servers

All server configuration is done in `script.js` by editing the `serverVotingConfig` array (around line 10015).

### Configuration Format

```javascript
const serverVotingConfig = [
  {
    name: "Server Name Here",
    battlemetricsUrl: "https://www.battlemetrics.com/servers/rust/1234567",
    rustmapsUrl: "https://rustmaps.com/map/3000_1234567890",
    averagePop: "150",
    expectedPop: "200",
    mapImageUrl: "https://rustmaps.com/img/maps/3000/1234567890.jpg",
    notes: "Optional notes about the server or build location"
  },
  // Add more servers by copying the object above
];
```

### Field Descriptions

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Display name for the server |
| `battlemetricsUrl` | Yes | Full Battlemetrics server page URL |
| `rustmapsUrl` | Yes | Full Rustmaps map URL |
| `averagePop` | Yes | Average population (check Battlemetrics stats) |
| `expectedPop` | Yes | Expected wipe day population (check last wipe on Battlemetrics) |
| `mapImageUrl` | Yes | Direct URL to map image (see guide below) |
| `notes` | No | Any notes about the server or good build spots |

## How to Get Map Image URL

1. Go to the server's Rustmaps page (e.g., `https://rustmaps.com/map/3000_1234567890`)
2. Wait for the map to load
3. **Right-click** on the map image
4. Select **"Copy image address"** or **"Copy image URL"**
5. Paste the URL into the `mapImageUrl` field

The URL should look like: `https://rustmaps.com/img/maps/{size}/{seed}.jpg`

## How to Get Average Population

1. Open the server's Battlemetrics page
2. Look at the population graph
3. Find the average player count over the past week/month
4. Enter that number as a string in `averagePop`

## How to Get Expected Population

1. Open the server's Battlemetrics page
2. Scroll down to the player count graph
3. Look at the **last wipe day** peak
4. That number is your `expectedPop` (wipe day population)

## Example: Adding a New Server

```javascript
const serverVotingConfig = [
  // Existing servers...
  
  {
    name: "Rusticated Main x2",
    battlemetricsUrl: "https://www.battlemetrics.com/servers/rust/123456",
    rustmapsUrl: "https://rustmaps.com/map/4500_987654321",
    averagePop: "175",
    expectedPop: "220",
    mapImageUrl: "https://rustmaps.com/img/maps/4500/987654321.jpg",
    notes: "Good for snowball, build near Outpost"
  }
];
```

## Features

- ✅ Click map images to enlarge them
- ✅ Direct links to Battlemetrics and Rustmaps
- ✅ Compare multiple servers side-by-side
- ✅ Responsive grid layout
- ✅ Hover effects for better UX

## Tips

- Keep server names short and clear
- Update population stats regularly for accuracy
- Use notes field to mark good build locations or server characteristics
- Map images are cached by the browser, so updates may take time to reflect

## Troubleshooting

**Map image not loading?**
- Verify the URL is correct
- Make sure it's a direct image link ending in `.jpg` or `.png`
- Some Rustmaps images may be behind authentication - try opening the link in an incognito window

**Server not appearing?**
- Check for syntax errors (missing commas, quotes, brackets)
- Open browser console (F12) to see any JavaScript errors
- Make sure you saved `script.js` after editing
