const fs = require("fs");
const path = require("path");

// Reads FRONTEND_API_URL (or API_URL) from process.env and writes env-config.js
const apiUrl = process.env.FRONTEND_API_URL || process.env.API_URL || "";

const outDir = process.env.OUTPUT_DIR || ".";
try {
  fs.mkdirSync(outDir, { recursive: true });
} catch (e) {}

const filePath = path.join(outDir, "env-config.js");
const content = `window._env_ = { API_BASE_URL: ${JSON.stringify(apiUrl)} };\n`;

fs.writeFileSync(filePath, content);
console.log(`env-config.js written to ${filePath} with API_BASE_URL =`, apiUrl);
