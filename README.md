# K10 Sweets & Bakery Website

A responsive website built for **K10 Sweets & Bakery** as part of my Web Designing course (`4.5CS070101`) at Manav Rachna University (Khushi Gandhi, Roll No. 10). The site replaces an outdated static page with a mobile-friendly storefront featuring a product carousel, a live pricing table, and an interactive custom order form that calculates cost and prep time on the fly.

## What's Inside

- **Responsive Layout:** Uses Bootstrap 5 paired with custom CSS variables, button hover transitions, and media queries for tablet and desktop screens.
- **Live Order Estimator:** Updates the total cost (`₹`) and estimated pickup time (`15 mins` per kg/unit) immediately as you change the sweet category or quantity.
- **Auto-Saved Drafts:** Stores your selected item (`k10_draft_type`) and quantity (`k10_draft_qty`) in the browser's `localStorage` so your order doesn't reset if you refresh the page.
- **Form Checks:** Combines HTML5 constraints with Bootstrap validation to check for a valid 10-digit phone number, quantity limits, and future delivery dates.
- **Accessibility & Local SEO:** Uses semantic HTML5 tags, ARIA landmarks, descriptive image `alt` text, high-contrast colors, and an embedded Google Map for the store location.

## Project Files

```text
├── index.html     # Main page with hero carousel, pricing table, order form, and map
├── styles.css     # Custom color palette, button animations, and screen breakpoints
├── script.js      # Price/time calculator, localStorage draft saving, and form validation
└── README.md      # Project notes and setup guide