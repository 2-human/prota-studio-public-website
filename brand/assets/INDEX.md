# brand/assets/

Non-markdown raw brand assets that the rest of the repo references: logos, color palette definitions, favicons, photos, anything binary or structured-data.

Brand GUIDELINES (how to use these assets: voice, visual principles, dos and don'ts) live in `brand/BRANDBOOK.md` — this folder is the physical assets.

## Contents

| File | Source | Purpose |
|---|---|---|
| `Prota_Studios_logo.png` | Webflow CDN, pulled local 2026-04-27 | Wordmark logo. Used in `public/website/learning-sprint/index.html` nav. |
| `prota-favicon-small.png` | Webflow CDN, pulled local 2026-04-27 | 32×32 favicon. Used as `<link rel="icon">`. |
| `prota-brandmark-favicon-large.png` | Webflow CDN, pulled local 2026-04-27 | Larger brandmark. Used as `<link rel="apple-touch-icon">`. |
| `Prota-OpenGraph.jpg` | Webflow CDN, pulled local 2026-04-27 | Default Open Graph share image. (Pages reference this via Webflow CDN URL because OG meta needs absolute URLs to resolve for social-card crawlers.) |
| `right-arrow-black.svg` | Webflow CDN, pulled local 2026-04-27 | Right-arrow icon (black variant). Used in CTA buttons across protastudios.com pages. |
| `right-arrow-white.svg` | Webflow CDN, pulled local 2026-04-27 | Right-arrow icon (white variant). Used on dark CTA buttons. |
| `palette.json` | Extracted from Webflow CSS 2026-04-27 | Canonical color palette + typography spec. Read this for every new public page. |

## Color palette (canonical — see `palette.json` for the JSON)

| Token | Hex | Use |
|---|---|---|
| `prota-blue` | `#487588` | Primary brand accent. CTA buttons, link hover states, accent decorations. |
| `gold` | `#b39d63` | Secondary accent. Used sparingly. |
| `white` | `#ffffff` | Page background. |
| `black-50` | `#f9f9f9` | Light section background. |
| `black-100` | `#e5e5e5` | Light borders. |
| `black-300` | `#b3b3b3` | Mid borders / disabled states. |
| `black-600` | `#666666` | Body text. |
| `black-800` | `#333333` | Strong body / sub-headings. |
| `black-900` | `#0c0407` | Headings, near-black. |
| `horizontal-line` | `#dddddd` | Section dividers. |
| `nav-bg` | `#f0f0f0` | Light nav backgrounds. |

## Typography (canonical)

- **Primary font:** **Inter** (Google Fonts).
- **Weights used:** 300, 400, 500, 600, 700.
- **Loading:** `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />`
- **Fallback stack:** `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`

No local Inter font files are stored — Google Fonts CDN is sufficient (already public, immutable URLs).

## Imagery patterns (reference, not files in this folder)

The protastudios.com snapshot uses three image styles:

- **Hero illustrations** — stylized, distinctive, descriptive slugs (e.g., `Home-Heart.webp`, `AboutUs-Hero-800.jpg`).
- **Program / sub-offering imagery** — black-and-white, filename suffix `-BW.webp`.
- **Case-study imagery** — color, three sizes per case study (`{Client}-Project_NN.webp`).

These hero/section images are referenced from the Webflow CDN by the verbatim HTML in `public/website/`. Pulling them local is a future step if/when the public mirror needs to be self-contained (no CDN dependency).

## Client logos (referenced by the two-row brand wall on protastudios.com)

Not stored locally. Referenced from the Webflow CDN. Names: Citi, Stix, The Clorox Company, Bird Buddy, Exelon, Kingsford, VISA, Click and Recharge, Audubon, Glad, Vinetta, Fresh Step, Daikin, Charger Help (SVG); Wave Neuro, Indose (PNG).

## What's still missing

- **Vector logo** — `Prota_Studios_logo.png` is raster (PNG). A `logo.svg` would be cleaner for crisp scaling. Request from the design team or trace.
- **Inter font files locally** — only needed if/when we go fully self-hosted (no Google Fonts CDN dependency).
- **Hero / program imagery pulled local** — only needed for self-hosted public mirror. Currently referenced from Webflow CDN by the verbatim snapshot HTML.
