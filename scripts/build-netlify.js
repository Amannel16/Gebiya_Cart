const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");

const files = [
  "index.html",
  "cart.html",
  "secure-order.html",
  "style.css",
  "script.js"
];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

fs.writeFileSync(
  path.join(dist, "_redirects"),
  [
    "/cart /cart.html 200",
    "/secure-order /secure-order.html 200",
    "/home /index.html 200",
    ""
  ].join("\n")
);

execFileSync(process.execPath, [path.join(root, "scripts", "generate-env.js")], {
  cwd: root,
  env: { ...process.env, OUTPUT_DIR: dist },
  stdio: "inherit"
});

console.log(`Netlify frontend build written to ${dist}`);
