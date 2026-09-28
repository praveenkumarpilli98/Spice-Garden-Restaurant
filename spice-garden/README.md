# 🌿 Spice Garden – Restaurant Website

A modern, fully responsive restaurant landing page built with **React 18** and **TypeScript**, powered by **Vite**.

---

## 📋 Prerequisites

Make sure you have **Node.js v18+** installed.
👉 Download from https://nodejs.org

---

## 🚀 Getting Started

Open a terminal, navigate to this folder, and run:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 🏗️ Build for Production

```bash
npm run build     # compiles TypeScript + bundles with Vite
npm run preview   # preview the production build locally
```

---

## 📁 Project Structure

```
spice-garden/
├── index.html              ← HTML entry point (loads fonts, sets title)
├── package.json            ← dependencies and scripts
├── tsconfig.json           ← TypeScript config
├── vite.config.ts          ← Vite config
└── src/
    ├── main.tsx            ← React app entry point
    ├── App.tsx             ← Root component (assembles all sections)
    ├── index.css           ← Global styles and CSS design tokens
    └── components/
        ├── Navbar.tsx      ← Fixed nav bar with mobile hamburger
        ├── Hero.tsx        ← Full-screen landing section
        ├── About.tsx       ← Restaurant story + feature cards
        ├── PopularDishes.tsx   ← 6 dish cards with hover effects
        ├── FullMenu.tsx    ← Tabbed full menu (5 categories)
        ├── Gallery.tsx     ← Masonry-style photo grid
        ├── OpeningHours.tsx ← Weekly hours + reservation card
        ├── Contact.tsx     ← Reservation form + map + contact info
        └── Footer.tsx      ← Site footer with links and socials
```

---

## 🎨 Design Decisions

| Token | Value |
|-------|-------|
| Primary colour | `#c8490a` (burnt orange) |
| Accent | `#f0a500` (gold) |
| Heading font | Playfair Display (serif) |
| Body font | Lato (sans-serif) |
| Breakpoints | 900px (tablet), 560px (mobile) |

All colours and spacing are defined as **CSS custom properties** in `src/index.css`,
so you can change the whole palette from one place.

---

## 💡 Beginner Tips

- **Each section = one file.** If you want to change the hero text, open `Hero.tsx`.
- **Styles live next to the component** using `<style>` tags — no separate CSS files to hunt for.
- **CSS variables** (`--clr-primary`, `--font-heading`, etc.) are defined once in `index.css`.
- TypeScript **interfaces** (e.g. `interface Dish`) describe the shape of your data — think of them as contracts.
- The `useState` hook stores things that change (active tab, form values, scroll position).

---

## 📸 Images

All images are loaded from [Unsplash](https://unsplash.com) via remote URLs — no downloads needed.
To use your own images, replace the `src` URLs in each component with local paths under `/public/`.
