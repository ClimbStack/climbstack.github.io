<div align="center">

# 🏔️ ClimbStack

**Gamify your goals. Conquer your peaks.**

A local-first productivity engine that maps your goals as mountains and blocks your time.

[![Live Site](https://img.shields.io/badge/Live_Site-climbstack.github.io-4397B8?style=for-the-badge&logo=github-pages&logoColor=white)](https://climbstack.github.io)
[![App Repo](https://img.shields.io/badge/App_Repo-climbstack--app-161B22?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ClimbStack/climbstack-app)
[![License](https://img.shields.io/badge/License-MIT-E5A970?style=for-the-badge)](LICENSE)

</div>

---

## 🌐 About This Repo

This repository hosts the **landing page** and **privacy policy** for the ClimbStack mobile app, served via [GitHub Pages](https://pages.github.com/) at [climbstack.github.io](https://climbstack.github.io).

Looking for the app source code? Head to **[ClimbStack/climbstack-app](https://github.com/ClimbStack/climbstack-app)**.

## ✨ Site Features

| Feature | Description |
|---------|-------------|
| 🎨 **Alpine Dusk Theme** | A custom dark-mode design built with CSS custom properties and the [Outfit](https://fonts.google.com/specimen/Outfit) typeface. |
| 🌍 **Bilingual (EN / IT)** | Full English and Italian support with automatic browser language detection, manual toggle, URL `?lang=` param, and `localStorage` persistence. |
| 📱 **Fully Responsive** | Mobile-first layout using CSS Grid and `clamp()` fluid typography. |
| ⚡ **Zero Dependencies** | Pure vanilla HTML/CSS/JS — no build step, no bundlers. Bootstrap is loaded via CDN for utility classes only. |
| 🔒 **Privacy-First** | No cookies, no analytics, no tracking scripts. The privacy policy page is included as required by Google Play. |

## 📁 Project Structure

```
climbstack.github.io/
│
├── index.html                      # Landing page — hero, features, open source CTA
├── privacy.html                    # Privacy policy (required by Google Play Console)
├── README.md
│
├── assets/
│   ├── icon.png                    # App icon (used as favicon + navbar brand)
│   └── feature.png                 # Feature graphic (hero section screenshot)
│
├── css/
│   ├── globals.css                 # Base reset, accessibility helpers, navbar glass effect
│   ├── climbstack.css              # "Alpine Dusk" theme — all custom styles for the site
│   └── font-awesome/              # Font Awesome 6 (self-hosted, icons + webfonts)
│       ├── css/
│       └── webfonts/
│
└── js/
    ├── i18n.js                     # Language switch engine (EN/IT auto-detect + toggle)
    ├── footer.js                   # Shared footer component injected via JS
    └── i18n/
        ├── climbstack.js           # Translation dictionary — landing page
        └── climbstack_privacy.js   # Translation dictionary — privacy page
```

## 🎨 Design System — Alpine Dusk

The site uses a custom dark palette called **Alpine Dusk**, inspired by mountain twilight:

| Token | Color | Usage |
|-------|-------|-------|
| `--lu-bg-main` | `#0D1117` | Page background |
| `--lu-bg-surface` | `#161B22` | Cards, navbar, footer |
| `--lu-primary` | `#4397B8` | CTAs, links, primary actions |
| `--lu-accent` | `#E5A970` | Feature icons, highlights |
| `--lu-text-main` | `#FFFFFF` | Headings, primary text |
| `--lu-text-sec` | `#8B949E` | Body text, descriptions |
| `--lu-border` | `#30363D` | Dividers, card borders |

## 🌍 Internationalization (i18n)

The language system supports **English** and **Italian** with this priority:

1. URL parameter `?lang=en` or `?lang=it`
2. `localStorage` key `climbstack-site-lang`
3. Browser `navigator.language` auto-detection

Each page loads its own translation dictionary (`js/i18n/climbstack*.js`) that provides a `window.I18N_DATA` object, consumed by the shared `js/i18n.js` engine.

## 🚀 Local Development

No build tools required. Just serve the files:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .

# Then open http://localhost:8000
```

## 🔗 Related Repositories

| Repository | Description |
|------------|-------------|
| [ClimbStack/climbstack-app](https://github.com/ClimbStack/climbstack-app) | The ClimbStack mobile app (React Native) |
| [ClimbStack/climbstack.github.io](https://github.com/ClimbStack/climbstack.github.io) | This repo — landing page & privacy policy |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by the ClimbStack team**

</div>