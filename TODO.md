# ClimbStack Website — TODO

> Checklist of best practices for a production-grade GitHub Pages site.

---

## 1. SEO & Discovery

- [ ] **sitemap.xml** — Auto-generate via GitHub Actions on every push (e.g. `peaceiris/actions-gh-pages` + a sitemap script, or a dedicated action like `cicirello/generate-sitemap`).
- [ ] **robots.txt** — Allow all crawlers, point to sitemap:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://climbstack.is-a.software/sitemap.xml
  ```
- [ ] **Canonical URLs** — Add `<link rel="canonical" href="...">` to every page to avoid duplicate content.
- [ ] **Open Graph meta tags** — `og:title`, `og:description`, `og:image`, `og:url`, `og:type` for proper previews on social platforms.
- [ ] **Twitter Card meta tags** — `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` for X/Twitter previews.
- [ ] **Structured Data (JSON-LD)** — Add `SoftwareApplication` and `WebSite` schema for rich search results.
- [ ] **HTML `lang` attribute** — Already present, ensure it updates dynamically with i18n (✅ done via `i18n.js`).
- [ ] **`<meta name="theme-color">` ** — Set to `#0D1117` (Alpine Dusk background) for browser chrome tinting.

## 2. Custom Domain

- [ ] **CNAME file** — Create `CNAME` with `climbstack.is-a.software` (waiting for is-a.software service to come back up).
- [ ] **DNS configuration** — Add CNAME record pointing to `climbstack.github.io` via the is-a.software PR process.
- [ ] **Enforce HTTPS** — Enable in GitHub Pages settings once custom domain is verified.
- [ ] **Update all hardcoded URLs** — Once the domain is live, update sitemap, canonical, OG tags, etc.

## 3. Identity & Verification

- [ ] **AT Protocol DID (`atproto-did`)** — Create `/.well-known/atproto-did` for Bluesky domain verification.
- [ ] **`rel="me"` links** — Add `rel="me"` to social links in footer for IndieWeb / Mastodon verification (partially done for Mastodon and ORCID).
- [ ] **GitHub Pages verification** — Verify custom domain in GitHub org settings.
- [ ] **Google Search Console** — Add site and verify ownership via `<meta>` tag or DNS TXT record.

## 4. Security

- [ ] **`security.txt`** — Create `/.well-known/security.txt` with contact info for responsible disclosure:
  ```
  Contact: mailto:gizano.dev@gmail.com
  Preferred-Languages: en, it
  Canonical: https://climbstack.is-a.software/.well-known/security.txt
  ```
- [ ] **Content Security Policy** — Add CSP via `<meta http-equiv>` to restrict script/style sources.
- [ ] **Referrer Policy** — Add `<meta name="referrer" content="strict-origin-when-cross-origin">`.
- [ ] **X-Content-Type-Options** — Not controllable via GH Pages, but good to note for future hosting.
- [ ] **Subresource Integrity (SRI)** — Already present on Bootstrap CDN links (✅). Add to any other CDN resources.

## 5. Performance

- [ ] **Image optimization** — Convert `feature.png` and `icon.png` to WebP with PNG fallback (`<picture>` element).
- [ ] **Favicon set** — Generate full favicon set: `favicon.ico`, `apple-touch-icon.png` (180×180), `favicon-32x32.png`, `favicon-16x16.png`, `site.webmanifest`.
- [ ] **Preconnect hints** — Add `<link rel="preconnect">` for Google Fonts and Bootstrap CDN.
- [ ] **Lazy loading** — Add `loading="lazy"` to below-the-fold images.
- [ ] **Font subsetting** — Consider self-hosting Outfit font with only the needed character ranges.
- [ ] **Minification** — Minify CSS/JS in a GitHub Actions build step (optional, files are small).
- [ ] **Cache headers** — GitHub Pages handles this, but consider asset fingerprinting for cache busting.

## 6. Accessibility (A11y)

- [ ] **Skip to content link** — Add a visually hidden "Skip to main content" link at the top of each page.
- [ ] **Contrast audit** — Run WCAG AA check on all text/background combinations (especially `#4397B8` on `#0D1117`).
- [ ] **Focus styles** — Verify visible focus indicators on all interactive elements in dark theme.
- [ ] **Alt text audit** — Ensure all images have meaningful `alt` attributes (✅ done).
- [ ] **Heading hierarchy** — Verify proper `h1` → `h2` → `h3` nesting, no skipped levels.
- [ ] **ARIA landmarks** — Add `role` or semantic elements (`<main>`, `<nav>`, `<footer>`) where missing.
- [ ] **Reduced motion** — Add `@media (prefers-reduced-motion: reduce)` to disable hover animations.

## 7. PWA & App-like Features

- [ ] **Web App Manifest** (`site.webmanifest`) — App name, icons, theme color, background color, display mode.
- [ ] **Service Worker** — Optional offline caching for the landing page (lightweight, no framework needed).
- [ ] **`apple-touch-icon`** — For iOS home screen bookmarks.
- [ ] **`msapplication-TileColor`** — For Windows tile color.

## 8. Error Handling

- [ ] **Custom 404 page** — Create `404.html` with the Alpine Dusk theme and navigation back to home.

## 9. CI/CD — GitHub Actions

- [ ] **Sitemap generation** — Auto-generate `sitemap.xml` on push to `main`.
- [ ] **HTML validation** — Run W3C validator or `htmlhint` on every PR.
- [ ] **Link checker** — Run `lychee` or `htmlprober` to catch broken links.
- [ ] **Lighthouse CI** — Automated performance/a11y/SEO audits on every deploy.
- [ ] **Deploy workflow** — If adding a build step (minification, WebP conversion), set up `actions/deploy-pages`.

## 10. Miscellaneous

- [ ] **`humans.txt`** — Credit the team:
  ```
  /* TEAM */
  Founder & Lead Developer: Giovanni Zanotti
  GitHub: https://github.com/GiZano
  Location: Italy

  /* SITE */
  Standards: HTML5, CSS3, ES6
  Components: Bootstrap 5, Font Awesome 6
  Software: GitHub Pages
  ```
- [ ] **Changelog / Releases** — Consider using GitHub Releases or a `CHANGELOG.md` for tracking site updates.
- [ ] **License file** — Add `LICENSE` (MIT) to the repo root.
- [ ] **Contributing guide** — `CONTRIBUTING.md` with instructions for the ClimbStack org.
- [ ] **Issue templates** — Add bug report and feature request templates for the website repo.

---

## Priority Order

| Priority | Items |
|----------|-------|
| 🔴 **Now** | `robots.txt`, `CNAME` (when available), favicon set, OG/Twitter meta tags, `404.html` |
| 🟡 **Soon** | Sitemap action, `atproto-did`, `security.txt`, `humans.txt`, LICENSE, image optimization |
| 🟢 **Later** | Lighthouse CI, PWA manifest, service worker, CSP, font subsetting, HTML validator action |
