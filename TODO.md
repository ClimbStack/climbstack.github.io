# ClimbStack Website — TODO

> Checklist of best practices for a production-grade GitHub Pages site.

---

## 1. SEO & Discovery

- [x] **sitemap.xml** — Auto-generated via GitHub Actions (`cicirello/generate-sitemap@v1`) on every push to `main` and daily cron.
- [x] **robots.txt** — Allow all crawlers, pointing to `https://climbstack.github.io/sitemap.xml`.
- [x] **Canonical URLs** — Added `<link rel="canonical" href="...">` to every page (`index.html`, `privacy.html`).
- [x] **Open Graph meta tags** — `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, `og:locale` configured.
- [x] **Twitter Card meta tags** — `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image` configured.
- [x] **Structured Data (JSON-LD)** — Added `SoftwareApplication` and `WebSite` schema in `index.html`.
- [x] **HTML `lang` attribute** — Dynamically synced with i18n via `js/i18n.js`.
- [x] **`<meta name="theme-color">`** — Set to `#0D1117` (Alpine Dusk background).

## 2. Custom Domain (Postponed)

- [ ] **CNAME file** — Create `CNAME` with `climbstack.is-a.software` (waiting for is-a.software service to come back up).
- [ ] **DNS configuration** — Add CNAME record pointing to `climbstack.github.io` via the is-a.software PR process.
- [ ] **Enforce HTTPS** — Enable in GitHub Pages settings once custom domain is verified.
- [ ] **Update hardcoded URLs** — Switch canonical, sitemap, and OG tags to `climbstack.is-a.software` once custom domain is active.

## 3. Identity & Verification

- [ ] **AT Protocol DID (`atproto-did`)** — Skipped for now.
- [x] **`rel="me"` links** — Included for verified social profiles in footer.
- [ ] **Google Search Console** — Add site and verify ownership via `<meta>` tag or DNS TXT record once custom domain is active.

## 4. Security

- [x] **`SECURITY.md`** — Responsible disclosure security policy with contact details.
- [x] **Referrer Policy** — Added `<meta name="referrer" content="strict-origin-when-cross-origin">`.
- [x] **Subresource Integrity (SRI)** — Configured on external CDN assets.

## 5. Performance

- [x] **Image optimization** — Converted `feature.png` and `icon.png` to WebP (`assets/feature.webp`, `assets/icon.webp`) with `<picture>` fallback and explicit width/height dimensions.
- [x] **Favicon set** — Full favicon set generated: `favicon.ico`, `apple-touch-icon.png` (180×180), `favicon-32x32.png`, `favicon-16x16.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`.
- [x] **Preconnect hints** — Added `<link rel="preconnect">` for Google Fonts and Bootstrap CDN.
- [x] **Decoding hints** — Added `decoding="async"` on images to speed up rendering.

## 6. Accessibility (A11y)

- [x] **Skip to content link** — Visually hidden accessible skip link (`<a href="#main-content" class="skip-link">`) on all pages.
- [x] **Focus styles** — High-contrast visible focus indicators.
- [x] **Alt text audit** — Meaningful `alt` attributes on all images.
- [x] **Heading hierarchy** — Logical `h1` → `h2` → `h3` hierarchy.
- [x] **ARIA landmarks** — Proper semantic structure with `<nav>`, `<main id="main-content">`, `<header>`, `<section>`, `<footer>`.
- [x] **Reduced motion** — Added `@media (prefers-reduced-motion: reduce)` in `css/climbstack.css`.

## 7. PWA & App-like Features

- [x] **Web App Manifest** (`site.webmanifest`) — App name, icons, theme color, background color, display mode.
- [x] **`apple-touch-icon`** — Added for iOS bookmarks.
- [ ] **Service Worker** — Optional offline caching (can be added if offline standalone PWA is needed).

## 8. Error Handling

- [x] **Custom 404 page** — `404.html` with Alpine Dusk styling, i18n support, and navigation back to home.

## 9. CI/CD — GitHub Actions

- [x] **Sitemap generation** — `.github/workflows/generate-sitemap.yml` using `cicirello/generate-sitemap@v1`.
- [x] **Lighthouse CI** — `.github/workflows/lighthouse.yml` and `.lighthouserc.json` testing performance, accessibility, best practices, and SEO scores on push and PR.

## 10. Miscellaneous

- [x] **`humans.txt`** — Credits to Founder & Lead Developer Giovanni Zanotti.
- [x] **License file** — `LICENSE` (MIT).
- [x] **Contributing guide** — `CONTRIBUTING.md`.
- [ ] **Issue templates** — Add issue templates for website repo if external contributions increase.
