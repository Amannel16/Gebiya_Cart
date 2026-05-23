const fs = require("fs");
const path = require("path");

// Reads frontend backend URL from common environment variables and writes env-config.js
const configuredApiUrl =
  process.env.FRONTEND_API_URL ||
  process.env.VITE_API_URL ||
  process.env.PUBLIC_API_URL ||
  process.env.REACT_APP_API_URL ||
  process.env.API_URL ||
  process.env.API_BASE_URL ||
  process.env.BACKEND_URL ||
  process.env.NETLIFY_API_URL ||
  "";
const apiUrl = configuredApiUrl || (process.env.NETLIFY ? "" : "http://localhost:5000");

const outDir = process.env.OUTPUT_DIR || ".";
try {
  fs.mkdirSync(outDir, { recursive: true });
} catch (e) {}

const filePath = path.join(outDir, "env-config.js");
const content = `window._env_ = { API_BASE_URL: ${JSON.stringify(apiUrl)} };\n`;

fs.writeFileSync(filePath, content);

if (!apiUrl && process.env.NETLIFY) {
  console.error(
    "Missing frontend backend URL. Set FRONTEND_API_URL, VITE_API_URL, PUBLIC_API_URL, REACT_APP_API_URL, API_URL, API_BASE_URL, or BACKEND_URL in Netlify environment variables."
  );
  process.exit(1);
}

console.log(`env-config.js written to ${filePath} with API_BASE_URL =`, apiUrl);
