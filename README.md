# hutt-river

The code that powers [huttriver.co.nz](https://huttriver.co.nz/).

[![build](https://github.com/drewalth/hutt-river/actions/workflows/build.yml/badge.svg)](https://github.com/drewalth/hutt-river/actions/workflows/build.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/6bbe70d2-4338-4342-bc5b-25e93108c500/deploy-status)](https://app.netlify.com/sites/soft-bonbon-e42155/deploys)

## Development

### Overview

A static [Astro](https://astro.build) site styled with Tailwind CSS and [shadcn/ui](https://ui.shadcn.com).
The content is deliberately date-agnostic: live river flows come from [flowrate.co.nz](https://flowrate.co.nz/)
widgets, and festival dates are left to the host clubs, so nothing on the page goes stale between events.

Content lives in `src/pages/index.astro`. Contributions and suggestions welcome!

### Prerequisites

- Node.js (see `.nvmrc`)

### Getting Started

1. Clone the repository
2. `cd` into the project directory
3. Install dependencies with `npm install`
4. Run the development server with `npm run dev`

An additional convenience script is provided in the Makefile to set up Mac dev environment:

```bash
make setup_mac
```

---

## Related Projects

- [flowrate.co.nz](https://flowrate.co.nz/)
- [GaugeWatcher - iOS](https://apps.apple.com/us/app/gaugewatcher/id6498313776)
