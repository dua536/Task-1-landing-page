<div align="center">

# ⚡ TechNova — Redefine What's Possible

**A fully animated enterprise tech company landing page**
built with pure HTML, CSS & Vanilla JavaScript — zero frameworks, zero dependencies.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://fonts.google.com/)

![Status](https://img.shields.io/badge/status-live-brightgreen?style=flat-square)
![Responsive](https://img.shields.io/badge/responsive-yes-blue?style=flat-square)
![Dependencies](https://img.shields.io/badge/dependencies-none-orange?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

<br/>

> *"We don't just build technology — we architect ecosystems that evolve with your ambition."*

</div>

---

## 🌟 Overview

**TechNova** is a production-quality landing page for a Pakistan-based enterprise tech company, built entirely from scratch — no React, no Tailwind, no build tools. Every animation, interaction, and visual effect is handcrafted in raw HTML, CSS, and JavaScript.

The site covers everything a real company page needs: hero with animated stats, services, process, testimonials from Pakistani clients, and a validated contact form — all wrapped in a dark glassmorphism aesthetic.

---

## 🎬 What's Inside

| Feature | How It Works |
|---|---|
| 🎆 **Particle Network Canvas** | Floating particles with live connection lines drawn on `<canvas>`, auto-scales to viewport |
| ⌨️ **Typewriter Headline** | Types and deletes through *Intelligent AI · Cloud Scale · Secure Systems · Real Impact* |
| 📈 **Animated Stat Counters** | 500+ clients, 99.9% uptime, 8 years, 40 countries — count up with cubic easing on scroll |
| 🔮 **SVG Orbital Graphic** | Three concentric hex rings with independently orbiting dots, pure SVG animation |
| 🎴 **Scroll Reveal** | Service cards, process steps, and testimonials fade in via `IntersectionObserver` |
| 🧭 **Sticky Smart Nav** | Glassmorphism navbar; darkens on scroll, highlights the active section automatically |
| 🍔 **Mobile Hamburger Menu** | Animated ✕ toggle, keyboard accessible (Enter / Space), closes on link click |
| ✅ **Form Validation** | Real-time blur validation + full submit check with red error states and success message |
| 🌀 **Ambient Background Orbs** | Two CSS-animated radial gradient orbs floating behind the hero |
| 🌫️ **Noise Texture Overlay** | SVG fractal noise `body::before` layer for a premium surface feel |

---

## 🗂️ File Structure

```
technova/
├── index.html      ← Page structure & all content
├── styles.css      ← Design system, animations, responsive layout
├── script.js       ← Particles, typewriter, counters, nav, form logic
└── README.md       ← This file
```

---

## 🎨 Design System

**Fonts** — [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (headings) · [Inter](https://fonts.google.com/specimen/Inter) (body)

**Colours**

```css
--void:    #0A0A0F              /* Background          */
--panel:   #111120              /* Cards & sections    */
--cyan:    #00E5FF              /* Primary accent      */
--violet:  #7B2FFF              /* Secondary accent    */
--mid:     #A855F7              /* Mid purple          */
--white:   #F0F0FF              /* Text                */
--muted:   rgba(240,240,255,0.55) /* Subtext           */
--border:  rgba(0,229,255,0.12)   /* Glowing borders   */
```

---

## 📐 Page Sections

```
┌──────────────────────────────────────────┐
│  NAV         Sticky glassmorphism bar    │
│  HERO        Particle canvas · Stats     │
│  ABOUT       SVG orbital · Feature list  │
│  SERVICES    6-card grid                 │
│  PROCESS     4-step how-it-works         │
│  TESTIMONIALS  3 Pakistani client quotes │
│  CONTACT     Info + validated form       │
│  FOOTER      Links · Socials             │
└──────────────────────────────────────────┘
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `> 900px` | Full desktop layout, horizontal nav |
| `≤ 900px` | Hamburger menu, single-column about & contact |
| `≤ 640px` | Tighter padding, stacked form rows, single-column footer |

---

## ♿ Accessibility

- Semantic HTML5 — `<nav>`, `<section>`, `<footer>` with `aria-label`
- `aria-expanded` on hamburger, keyboard navigable (Enter / Space)
- `role="alert"` + `aria-live="polite"` on form errors and success state
- `prefers-reduced-motion` — all animations cut to near-zero for users who prefer it

---

## 🚀 Run Locally

```bash
python -m http.server 8000
```

Open **http://localhost:8000** in your browser.

> All three files must stay in the same folder — `index.html` references `styles.css` and `script.js` by relative path.

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Internet Explorer | ❌ Not supported |

---

## 📄 License

MIT — free for personal and commercial use.

---

<div align="center">

**Made with 💙 in Pakistan · Pure HTML, CSS & JavaScript · No frameworks · No excuses**

</div>
