const fs = require('fs');

// Reads FRONTEND_API_URL (or API_URL) from process.env and writes env-config.js
const apiUrl = process.env.FRONTEND_API_URL || process.env.API_URL || '';

const content = `window._env_ = { API_BASE_URL: "${apiUrl}" };\n`;

fs.writeFileSync('env-config.js', content);
console.log('env-config.js written with API_BASE_URL =', apiUrl);
