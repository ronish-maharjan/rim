<div align="center">

# RIM CSS

**Rebuild In Minimal**

[Documentation](https://ronish-maharjan.github.io/rim/) ·
[Getting Started](#getting-started) ·
[Components](#components) ·
[GitHub](https://github.com/ronish-maharjan/rim)

---

![Version](https://img.shields.io/badge/version-0.1.0-black?style=flat-square)
![Dependencies](https://img.shields.io/badge/dependencies-0-black?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-black?style=flat-square)
![CSS Only](https://img.shields.io/badge/pure-CSS-black?style=flat-square)

</div>

## What is RIM CSS?

A minimal CSS library with its own design DNA. Sharp corners, Thin borders, Dual accent personality, Subtle texture, Every element earns its place.

Write semantic HTML. Get a beautiful page. No classes needed for basic elements. Data attributes for components. Zero dependencies. No build tools. No JavaScript required.

```html
<!-- This is all you need -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/ronish-maharjan/rim@v0.1.0/dist/rim.min.css"
/>
```

The dual personality
Light mode uses terminal orange as its accent. Dark mode switches to terminal green. Same structure, different character. Your site transforms with the theme — not just inverts.

Getting Started

1. Add RIM CSS
   Use CDN (recommended):

```HTML
<!-- Production (minified) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ronish-maharjan/rim@v0.1.0/dist/rim.min.css">

<!-- Development (with comments) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ronish-maharjan/rim@v0.1.0/dist/rim.css">

```

Or clone the repo:

```Bash
git clone https://github.com/ronish-maharjan/rim.git
```

```HTML
<link rel="stylesheet" href="path/to/dist/rim.min.css">
```

2. Add Fonts (recommended, not required)
   RIM CSS works without these fonts using system fallbacks. For the full experience, add this to your <head>:

```HTML
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
```

3. Write HTML

```HTML

<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Site</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ronish-maharjan/rim@v0.1.0/dist/rim.min.css">
</head>
<body>
<div data-is="container-reading">
  <div data-is="stack">
    <h1>Hello, RIM.</h1>
    <p>CSS that earns its place.</p>
    <button data-variant="primary">Get Started</button>
  </div>
</div>
</body>
</html>
```

That's it. No npm. No config. No build step.

Browser Support
RIM CSS requires modern browsers that support @layer.

Browser Version Status
Chrome 99+ ✅ Supported
Firefox 97+ ✅ Supported
Safari 15.4+ ✅ Supported
Edge 99+ ✅ Supported
IE — ❌ Not supported
Older browsers receive unstyled but fully functional semantic HTML — because RIM encourages proper semantic markup.

## File Structure

```text

rim/
├── core/
│ ├── reset.css — Browser normalization
│ ├── tokens.css — Design variables (light + dark)
│ └── typography.css — Base element styling
├── layout/
│ ├── container.css — Width containers
│ ├── stack.css — Vertical spacing
│ ├── grid.css — Responsive grid
│ └── sidebar.css — Main + aside layout
├── components/
│ ├── button.css — Button variants + link-as-button
│ ├── card.css — Content cards
│ ├── tag.css — Labels / badges
│ ├── callout.css — Alerts / notices
│ ├── codeblock.css — Enhanced code blocks
│ ├── breadcrumb.css — Path navigation
│ ├── toc.css — Table of contents
│ ├── divider.css — Section separators
│ └── dropdown.css — Expandable content + menus
├── dist/
│ ├── rim.css — Combined (with comments)
│ └── rim.min.css — Minified (production)
├── docs/
│ └── index.html — Documentation site
├── rim.css — Dev entry (uses @import)
├── build.js — Build script (zero deps)
├── package.json — Minimal config
├── preview.html — Development test page
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
└── LICENSE
```

Philosophy
Every element earns its place.

RIM CSS was born from frustration with CSS libraries that either do too much hundreds of components you'll never use or too little just a reset with no opinion.

> **Feel free to Contribute**

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

<div align="center">

Made with coffee by @ronish-maharjan

</div>
