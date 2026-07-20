# Sunshine State Greens — Website

Single-page marketing site for Sunshine State Greens (SSG), built with
Vite + React + Tailwind CSS. Static output, no backend required.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` with hot reload.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/` — plain HTML/CSS/JS, deployable anywhere.

```bash
npm run preview
```

Serves the production build locally so you can sanity-check it before deploying.

## Deploy for free

**Netlify**
1. Drag the `dist/` folder onto https://app.netlify.com/drop, or
2. Connect the repo in the Netlify dashboard with build command `npm run build` and publish directory `dist`.

**Vercel**
1. `npx vercel --prod` from inside the project folder — it auto-detects the Vite framework preset.

**GitHub Pages** (already set up in this repo)
- Every push to `main` auto-builds and deploys via `.github/workflows/deploy.yml`. No manual step needed.
- Manual/one-off alternative: `npm run deploy` builds and pushes `dist/` straight to a `gh-pages` branch via the `gh-pages` package.
- `vite.config.js` sets `base: '/sunshine-state-greens-app/'` to match this repo's Pages URL path. If you later move to a custom domain (root-level hosting), change `base` back to `'/'`.

No environment variables are required for any of the above.

## Placeholder checklist (replace before the site goes fully live)

| # | Placeholder | Status | Where | How to fix |
|---|---|---|---|---|
| 1 | **Logo** | ✅ Added (`logo.jpg`) | Header (`src/components/Logo.jsx`) | Real logo is in place. To swap it later, replace `public/images/logo.jpg` — the inline SVG badge only reappears if the file is missing or fails to load. |
| 2 | **Founder photo** | ✅ Added (`founder.jpg`) | "Meet the Founder" (`src/components/FounderPhoto.jsx`) | Real photo of Lucian is in place. Replace `public/images/founder.jpg` to swap it. |
| 3 | **Hero photo** | ✅ Added (`hero-prototype.png`) | Hero section (`src/components/Hero.jsx`) | Real photo of the hydro unit is in place. Replace `public/images/hero-prototype.png` to swap it. |
| 4 | **Donation link** | ⬜ Still a placeholder | "Sponsor a Box" (`src/config.js`) | Set `CONFIG.DONATION_URL` to the live PayPal Giving Fund / Square link. Until then, all donate buttons open a `mailto:` to `CONFIG.CONTACT_EMAIL` with the amount pre-filled in the message. |
| 5 | **Confirmed social handles** | ⬜ Still a placeholder | "Follow the Mission" + footer (`src/config.js`) | Once `@sunshinestategreens` is confirmed/registered on TikTok and Instagram, update `CONFIG.TIKTOK_URL` / `CONFIG.INSTAGRAM_URL`. |

A bonus real photo (the 3D-printed fitting + nutrients) is also in place on the
"3D-Printed Customization" card in `src/components/Solution.jsx` — not one of
the original 5, but it replaces what would've been another placeholder slot.

All remaining placeholders live in exactly two places: `src/config.js` for
links, and `public/images/` for image files — nothing else in the codebase
needs to change.

## Project structure

```
src/
  App.jsx                  assembles all sections in order
  config.js                CONFIG object + donation tiers (the only file
                            most future edits touch)
  lib/mailto.js             donate/partner mailto link builders
  hooks/useFadeUp.js        ~30-line IntersectionObserver hook, no library
  components/
    Navbar.jsx              sticky nav + mobile hamburger
    Logo.jsx                header logo with image/SVG-fallback swap
    Hero.jsx
    Mission.jsx
    Problem.jsx
    Solution.jsx
    Impact.jsx
    Founder.jsx
    FounderPhoto.jsx        same fallback pattern as Logo
    Donate.jsx
    Social.jsx
    Footer.jsx
    SectionHeading.jsx      the deck's green left-bar heading style
    FadeIn.jsx              wraps a section in the scroll fade-up animation
  index.css                 Tailwind import + design tokens (@theme block)
public/
  favicon.svg               leaf-and-tree favicon
  images/                   drop logo.png / founder.jpg / hero-prototype.jpg / og-cover.png here
```

## Notes on the build

- Tailwind CSS v4, configured via the `@theme` block in `src/index.css`
  (cream/green/orange design tokens) rather than a separate config file.
- No external JS libraries — the fade-up-on-scroll animation is a plain
  `IntersectionObserver` hook, and the mobile nav is a `useState` toggle.
- Google Fonts (Poppins/Inter) are the only external network request besides
  whatever CDN serves the deployed site itself.
- Color/contrast, alt text, focus-visible states, and a skip-to-content link
  are already in place for accessibility and Lighthouse.
