# Machine Round Questions

Single Vite app with one route per interview problem. Each problem lives under `src/problems/<name>/` and does not import other problems.

## Routes

| Route | Problem |
|-------|---------|
| `/` | Index (links to demos only) |
| `/memory-game` | Memory card matching game |
| `/file-explorer` | File tree with CRUD |

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Add a new problem

1. Create `src/problems/<slug>/` with its page, components, constants, and CSS.
2. Register a route in `src/App.jsx`.
3. Add an entry to `src/problems/registry.js` for the home page.

Do not import code from other problem folders.

## Deploy (SPA)

For static hosts (Vercel, Netlify), use the `dist` folder from `npm run build`. Client-side routing needs a fallback to `index.html` (most hosts configure this automatically).

For GitHub Pages under a subpath (e.g. `/machine-round-questions/`), set `base` in `vite.config.js` and redeploy.
