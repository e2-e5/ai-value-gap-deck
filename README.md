# AI Value Gap Deck

Short HTML presentation for GitHub Pages:
- AI value gap
- why AI wrappers fail
- AI as infrastructure
- CEO/founder takeaway

## Output
- Editable source: `index.html`, `styles/*`, `scripts/*`
- Live URL: GitHub Pages (after push)
- Reusable blocks: `styles/blocks.css`

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Repo structure

- `index.html` — presentation source
- `styles/base.css` — viewport-safe base styles
- `styles/theme.css` — visual direction / tokens
- `styles/blocks.css` — reusable presentation blocks
- `scripts/presentation.js` — keyboard, wheel, touch, dots, progress
- `docs/STRUCTURE.md` — content logic and slide rationale
- `docs/PLAN.md` — build/deploy plan and next steps

## Reusable blocks

Current reusable patterns:
- stat card
- thesis card
- compare panel
- rail item
- infra layer
- decision card
- quote band
- button link

These can be remixed for future decks without redoing the full visual system.

## Notes

The first version intentionally uses a no-build static stack for speed and GitHub Pages compatibility. If needed, this can later be migrated to Astro / Vite / Reveal-style generation, but for now the goal is fast editing and instant publishing.
