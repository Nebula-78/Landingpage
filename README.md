# 🌿 Landing Steve Kouadio — v2

Landing page refactorisée avec React 18 + Tailwind CSS v3.

---

## 🚀 Lancer en local

```bash
npm install
npm run dev
# → http://localhost:5173
```

## 📦 Build production

```bash
npm run build
npm run preview
```

## 🌐 Déployer sur Vercel

```bash
npm i -g vercel
vercel
# Vercel détecte Vite automatiquement
```

---

## 🗂 Architecture

```
src/
├── App.jsx                  # Assemblage des sections
├── main.jsx                 # Point d'entrée React
├── index.css                # Tailwind + @layer components
│
├── data/
│   └── index.js             # ✅ Toutes les données statiques centralisées
│
├── hooks/
│   └── useMenu.js           # ✅ Hook hamburger (scroll lock + Escape)
│
└── components/
    ├── Button.jsx            # ✅ Composant bouton réutilisable (4 variants)
    ├── Navbar.jsx            # ✅ Nav accessible avec hamburger mobile
    ├── MockupCard.jsx        # ✅ Maquette décorative du hero
    ├── FaqItem.jsx           # ✅ Accordion accessible (aria-expanded)
    ├── SectionHeader.jsx     # ✅ Label + titre + sous-titre réutilisable
    └── Sections.jsx          # ✅ Toutes les sections de la page
```

---

## ♿ Accessibilité (WCAG 2.1 AA)

- `<a href="#main-content">` skip-to-content en début de page
- `aria-label` sur tous les liens et boutons icônes
- `aria-expanded` + `aria-controls` sur l'accordion FAQ
- `role="list"` sur toutes les listes de contenu
- `role="banner"`, `role="contentinfo"`, `role="navigation"` sur les landmarks
- `aria-hidden="true"` sur les éléments purement décoratifs
- `focus-visible` sur tous les éléments interactifs
- `<blockquote>` + `<cite>` dans les témoignages
- `<dl>` + `<dt>` + `<dd>` pour les statistiques
- `<small>` pour le copyright

---

## 🔍 SEO

- `<title>` + `<meta name="description">` optimisés
- Open Graph (og:title, og:description, og:url, og:type, og:locale)
- Twitter Card
- `<link rel="canonical">`
- Structured Data JSON-LD (Person + Offer)
- `<html lang="fr">`
- Hiérarchie de titres correcte (h1 → h2 → h3)
- `<header role="banner">` + `<main>` + `<footer role="contentinfo">`

---

## ⚡ Performance

- `rel="preconnect"` sur Google Fonts
- Animations CSS natives (pas de lib externe)
- Tailwind purge automatique (bundle minimal)
- Pas de dépendances inutiles

---

## ✏️ Personnaliser

| Ce que tu veux changer | Fichier à modifier |
|---|---|
| Numéro WhatsApp | `src/data/index.js` → `WA_NUMBER` |
| Textes, prix, témoignages | `src/data/index.js` |
| Couleurs | `tailwind.config.js` → `theme.extend.colors` |
| Animations | `tailwind.config.js` → `theme.extend.keyframes` |
| Polices | `index.html` + `tailwind.config.js` → `fontFamily` |
| Styles de boutons | `src/index.css` → `.btn-*` |

---

Créé depuis Abidjan 🇨🇮
