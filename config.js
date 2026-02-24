// Configuration file for API endpoint
// Automatically detects environment and falls back gracefully

// Function to detect environment
function detectApiUrl() {
  // If running on localhost, use local server
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:3000';
  }
  
  // If running on 192.168.x.x (local network), try to connect to local server
  if (window.location.hostname.startsWith('192.168.')) {
    const port = window.location.port ? `:${window.location.port}` : ':3000';
    return `http://${window.location.hostname}${port}`;
  }
  
  // For deployed/GitHub Pages, check if custom API URL is set in environment
  // Otherwise fall back to direct API calls (these are proxied by the frontend)
  if (typeof CUSTOM_API_URL !== 'undefined') {
    return CUSTOM_API_URL;
  }
  
  // Return empty string to signal frontend to use direct API fallback
  return '';
}

const API_BASE_URL = detectApiUrl();

// Note: The frontend will automatically fall back to direct BattleMetrics API calls
// if API_BASE_URL is empty or unreachable. This ensures the voting page always works.
