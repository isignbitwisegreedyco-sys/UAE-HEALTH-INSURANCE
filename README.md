# Swasthya Shuraksha

**A UAE health-cover marketplace concept**

Swasthya Shuraksha is an original, comparison-led concept for helping UAE residents explore health-cover questions with less guesswork. The Indian-language-inspired name means "health protection." This is a prototype brand, not an existing insurer or an affiliation claim.

## What the demo includes

- A responsive landing page with an illustrative comparison board.
- A three-step discovery flow for household, emirate, age range, and comparison priority.
- Three sample profile lenses, with priority-based ordering and side-by-side comparison.
- Guidance on checking provider networks, cost sharing, benefits and exclusions, and eligibility.
- Clear notices that the profiles and comparisons are examples only.

## Important limitations

- No insurer, policy, premium, provider-network, or quote-service data is connected.
- The sample profiles are not products, recommendations, insurance advice, or quotes.
- The demo does not collect contact or medical details, send quote requests, or save selections to a server.
- Real insurer data, licensed partners, legal review, and production quote integrations are required before launch.

## Technology and local preview

The site is a dependency-free static app built with HTML, CSS, and vanilla JavaScript. No package installation or build step is required.

From the repository root, start a local server:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000). This is a local preview; public hosting requires a domain, DNS, and deployment configuration.

## Project files

- `index.html` - page structure, copy, and accessible form markup.
- `styles.css` - responsive layout and the comparison-led visual system.
- `app.js` - local discovery flow, sample sorting, profile selection, and comparison.
- `PRODUCT.md` - product scope, audience, and constraints.
- `DESIGN.md` - visual direction, tokens, and component guidance.
