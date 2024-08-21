# hutt-river

The code that powers [huttriver.co.nz](https://huttriver.co.nz/).

[![build](https://github.com/drewalth/hutt-river/actions/workflows/build.yml/badge.svg)](https://github.com/drewalth/hutt-river/actions/workflows/build.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/6bbe70d2-4338-4342-bc5b-25e93108c500/deploy-status)](https://app.netlify.com/sites/soft-bonbon-e42155/deploys)

## Development

### Overview

This project is a super simple React app built with Vite, TypeScript and Material UI. Due to resource and time
constraints, the project is not as polished as it could be--it could be wayyy cooler. As such, I'm open to contributions
and suggestions!

#### How it works

We're essentially using a Facebook Event page as a headless CMS with the help of
the [facebook-event-scraper](https://github.com/francescov1/facebook-event-scraper) module.

The scraper fetches the event data from the Facebook Event page and saves it to a JSON file. The React app then reads this
file and displays the event info.

### Prerequisites

- Node.js (v20.15.1)
- npm (v10.7.0)

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
