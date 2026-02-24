# Server Voting Page - Troubleshooting Guide

## The Fix: Network-Independent Operation

The Server Voting page now works on **any network** - whether you're on:
- Your home WiFi
- Mobile network (4G/5G)
- Local network (192.168.x.x)
- GitHub Pages or any deployed site

### How It Works

1. **Smart API Detection**: The page automatically detects your environment
   - If you're on `localhost:3000`, it uses your local Express server
   - If you're on a local IP like `192.168.1.100`, it tries to connect to the server on that network
   - If you're on deployed site (GitHub Pages), it falls back to direct BattleMetrics API

2. **Automatic Fallback**: If the backend server isn't available:
   - The page automatically fetches server data directly from BattleMetrics API
   - No manual configuration needed
   - Works instantly, no waiting for tunnels/proxies

3. **No More Hardcoded Tunnel URLs**: 
   - Removed dependency on `ngrok` or `cloudflare` tunnel URLs
   - Those URLs expire and break the site
   - Now it auto-detects and adapts to your environment

## Common Issues & Fixes

### "Failed to load server" Error on Mobile

**Cause**: Usually a temporary network issue

**Fix**:
1. Refresh the page (pull down on mobile, or Cmd+R / Ctrl+R)
2. Check your internet connection
3. Wait a moment and try again

### "Network error" Message

**Cause**: Your device can't reach BattleMetrics servers

**Fix**:
1. Switch from WiFi to Mobile data (or vice versa)
2. Temporarily disable VPN if you're using one
3. Try opening BattleMetrics directly: https://www.battlemetrics.com/servers/rust/14876729

### Page Shows Empty Cards

**Cause**: The page is still loading, or JavaScript didn't run

**Fix**:
1. Wait 5-10 seconds (BattleMetrics API can be slow)
2. Refresh the page
3. Open Developer Console (F12) and check for errors

### "CORS Error" in Console (F12)

**Cause**: Browser security blocking the request

**Fix**:
1. This happens sometimes when BattleMetrics temporarily blocks requests
2. Refresh the page
3. If it persists, try a different device or network

## Testing Locally

If you want to test with the full backend server:

```bash
# Terminal 1: Start the Express server
npm install  # Only needed first time
node scripts/server.js

# Terminal 2: Open the site
# Open http://localhost:3000 in your browser
# The page will detect localhost and use the Express server
```

The page will still work even if the server isn't running - it just won't have advanced features like average population calculations.

## Configuration

All server configuration is in `script.js`, in the `serverVotingConfig` array (around line 10019).

To add a new server:
```javascript
const serverVotingConfig = [
  {
    battlemetricsId: "14876729",  // The ID from battlemetrics.com
    rustmapsUrl: "https://rustmaps.com/map/...",  // Optional
    notes: "Optional notes about the server"
  },
  // Add more servers here
];
```

## What Changed

### Before
- Hardcoded ngrok URL in `config.js`
- Ngrok URLs expire → site breaks
- Didn't work on different networks
- Phone users got "Failed to load server" error

### After
- Auto-detecting, network-aware configuration
- Falls back to BattleMetrics direct API
- Works everywhere automatically
- Phone users always get data (if they have internet)

## For Deployment

The page now works on any deployment:

### GitHub Pages / Static Hosting
Just upload the files. The page will automatically use direct BattleMetrics API. No backend needed.

### With Express Server (Optional)
If you want advanced features (average population calculations), keep the server running and the page will auto-detect and use it.

### Custom Domain
If deploying to a custom domain, the page will still work. Just ensure your domain is accessible from all your devices.

## Still Having Issues?

1. **Open Developer Console**: Press F12
2. **Go to Console tab**: Look for red error messages
3. **Note the exact error**: Share it in your deployment documentation
4. **Check if BattleMetrics is down**: Visit https://www.battlemetrics.com/servers/rust/14876729 directly

The automatic fallback system ensures the page will work in 99% of cases. If you're still having issues, check if BattleMetrics API itself is accessible from your network.
