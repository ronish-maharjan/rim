const fs = require("fs");
const path = require("path");

// ================================
// CONFIG — File order matters.
// This follows the @layer cascade order.
// ================================

const FILES = [
  // Core
  "core/reset.css",
  "core/tokens.css",
  "core/typography.css",

  // Layout
  "layout/container.css",
  "layout/stack.css",
  "layout/grid.css",
  "layout/sidebar.css",

  // Components
  "components/button.css",
  "components/card.css",
  "components/tag.css",
  "components/callout.css",
  "components/codeblock.css",
  "components/breadcrumb.css",
  "components/toc.css",
  "components/divider.css",
  "components/dropdown.css",
];

const DIST_DIR = "dist";
const OUTPUT_FILE = path.join(DIST_DIR, "rim.css");
const OUTPUT_MIN_FILE = path.join(DIST_DIR, "rim.min.css");

// ================================
// READ VERSION FROM PACKAGE.JSON
// ================================

let version = "0.1.0";
try {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  version = pkg.version || version;
} catch (e) {
  // No package.json, use default version
}

// ================================
// BANNER — Added to top of output
// ================================

const BANNER = `/* ================================================
   RIM CSS v${version} - Rebuild In Minimal
   "CSS that earns its place"
   
   Zero dependencies. Pure CSS.
   https://github.com/ronish-maharjan/RIM-UI
   License: MIT
   ================================================ */

`;

const BANNER_MIN = `/* RIM CSS v${version} | MIT License | github.com/ronish-maharjan/RIM-UI
*/\n`;

// ================================
// LAYER DECLARATION
// Must come before any layered styles
// ================================

const LAYER_DECLARATION = `@layer rim-reset, rim-tokens, rim-base, rim-layout, rim-components, rim-utilities;\n\n`;

// ================================
// BUILD FUNCTIONS
// ================================

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (e) {
    console.error(`  ✗ Error reading: ${filePath}`);
    console.error(`    ${e.message}`);
    process.exit(1);
  }
}

function stripImports(css) {
  // Remove @import lines — we're inlining everything
  return css.replace(/@import\s+url\([^)]+\);\s*/g, "");
}

function minify(css) {
  return (
    css
      // Remove comments (but not the banner)
      .replace(/\/\*(?!\s*RIM CSS)[\s\S]*?\*\//g, "")
      // Remove whitespace
      .replace(/\s+/g, " ")
      // Remove space around special characters
      .replace(/\s*{\s*/g, "{")
      .replace(/\s*}\s*/g, "}")
      .replace(/\s*;\s*/g, ";")
      .replace(/\s*:\s*/g, ":")
      .replace(/\s*,\s*/g, ",")
      // Remove last semicolon before closing brace
      .replace(/;}/g, "}")
      // Remove space after opening paren and before closing
      .replace(/\(\s+/g, "(")
      .replace(/\s+\)/g, ")")
      // Clean up multiple spaces
      .replace(/ +/g, " ")
      // Trim
      .trim()
  );
}

// ================================
// BUILD
// ================================

console.log("");
console.log("  RIM CSS — Build");
console.log("  ─────────────────────");
console.log("");

// Create dist directory
if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
  console.log(`  ✓ Created ${DIST_DIR}/`);
}

// Read and combine all files
let combined = "";

FILES.forEach(function (file) {
  if (fs.existsSync(file)) {
    const content = readFile(file);
    combined += `/* --- ${file} --- */\n`;
    combined += stripImports(content);
    combined += "\n\n";
    console.log(`  ✓ ${file}`);
  } else {
    console.error(`  ✗ File not found: ${file}`);
    process.exit(1);
  }
});

// Build full version
const fullCSS = BANNER + LAYER_DECLARATION + combined;

// Build minified version
const minCSS = BANNER_MIN + minify(LAYER_DECLARATION + combined);

// Write files
fs.writeFileSync(OUTPUT_FILE, fullCSS, "utf8");
fs.writeFileSync(OUTPUT_MIN_FILE, minCSS, "utf8");

// Calculate sizes
const fullSize = (Buffer.byteLength(fullCSS, "utf8") / 1024).toFixed(1);
const minSize = (Buffer.byteLength(minCSS, "utf8") / 1024).toFixed(1);

console.log("");
console.log("  ─────────────────────");
console.log(`  ✓ ${OUTPUT_FILE}      ${fullSize}KB`);
console.log(`  ✓ ${OUTPUT_MIN_FILE}  ${minSize}KB`);
console.log("");
console.log("  Build complete.");
console.log("");
