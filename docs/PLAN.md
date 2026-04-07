# Build / delivery plan

## Goal
Ship a short, editable presentation with a live GitHub Pages URL today, then iterate once design direction lands.

## Phase 1 — done in this scaffold
- static repo created
- viewport-safe presentation shell
- first-pass narrative on AI value gap / wrappers / infrastructure
- reusable component blocks extracted
- Pages-friendly structure

## Phase 2 — next with designer
- align on one visual direction
- replace provisional copy with final storyline and tone
- add branded assets / charts if available
- tighten slide transitions and hierarchy

## Phase 3 — polish
- add source appendix / citations slide if needed
- add export path to PDF screenshots
- tune for specific aspect ratios if presentation venue is known

## Deployment

### GitHub Pages
Recommended simplest path:
1. push repo to GitHub
2. enable Pages from `main` branch / root
3. live URL becomes `https://e2-e5.github.io/ai-value-gap-deck/`

## Editing model
- edit text directly in `index.html`
- edit tokens / look in `styles/theme.css`
- edit reusable components in `styles/blocks.css`
- behavior lives in `scripts/presentation.js`

## Reuse model
For the next deck, keep `styles/*` and `scripts/presentation.js`, replace slide sections in `index.html`, and only add new block classes if the narrative truly needs them.
