# Sauvia Lux Perfume: Landing Page

Static HTML, CSS and JS. No build step, Vercel-ready. Built with the Stallion project flow.

**Tier:** Professional Landing Page (Premium design)
**Sections:** Hero, About, Fragrance (Products), Contact (Messenger + call)

## Structure
```
index.html
assets/css/style.css     brand tokens, layout, responsive rules
assets/js/main.js        mobile menu, CONTACT config, footer year
assets/images/logo/      placeholder wordmark (logo.svg)
assets/images/hero/      hero photo (+ 600px mobile version)
assets/images/products/  Ammora product photos
assets/images/og-image.jpg  social share image
content/content.md       all page copy in one place
```

## Before going live: replace placeholders
1. **Contact details:** open `assets/js/main.js` and fill in `CONTACT` (Messenger URL, phone, email, location). Buttons and details update automatically.
2. **Logo:** replace `assets/images/logo/logo.svg` with the official Sauvia logo. The header uses a text wordmark; swap it for an `<img>` if preferred.
3. **Product photos:** current images are a stand-in bottle with a Sauvia label. Replace them with real photos of the Ammora bottle (keep the same file names).
4. **Price:** the page says "from 95K". Update if the final price differs.

## Brand tokens
| Token | Hex | Use |
|---|---|---|
| Sand | #EADBC8 | page background |
| Bark | #4A3422 | text, buttons |
| Gold | #B08A46 | links, focus |
| Liquid | #EEE8C4 | fragrance band (matches product photo background) |
| Blackberry | #3A1E35 | contact + footer |

Fonts: Bodoni Moda (display), Figtree (body), via Google Fonts.

## Run locally
Open `index.html` in a browser, or run `npx serve .`

## Deploy
Import the repo in Vercel as a static site (Framework: Other, no build command, output directory `.`).
