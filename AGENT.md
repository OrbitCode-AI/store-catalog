# Store Catalog - Agent Guide

## Architecture

Entry point `App.tsx` composes a vertical page layout inside `<div className="store-catalog">`:
Header -> Hero -> Categories -> ProductGrid -> Newsletter -> Footer.

- **Header.tsx** — Top navigation with search bar, mobile menu toggle, cart badge. Reads `cartItems` (string array) and manages `searchQuery`, `catalogMenuOpen` via `useVar`.
- **Hero.tsx** — Stateless promotional banner with configurable title/subtitle props and CTA buttons.
- **Categories.tsx** — Grid of category cards. Writes `selectedCategory` via `useVar` on click. Each category has an id, icon, count, and accent color applied via CSS custom property `--accent-color`.
- **ProductGrid.tsx** — Main product listing with sort controls (`productSortBy` persisted via `useVar`). Contains an inline `ProductCard` component that manages `favorites` (string array) and `cartItems` (string array) via `useVar`. Products use color swatches (hex strings) as placeholder images.
- **ProductCard.tsx** — Standalone presentational card (separate file) receiving callbacks via props (`onAddToCart`, `onToggleWishlist`). Not used by App directly; available for custom layouts.
- **Sidebar.tsx** — Category filter + price range filter. Fully controlled via props/callbacks; not wired into App by default.
- **Newsletter.tsx** — Email subscription form. Tracks `newsletterEmail` and `newsletterSubscribed` via `useVar`.
- **Footer.tsx** — Stateless multi-column footer with link groups and social icons.

Shared state keys across components: `cartItems`, `favorites`, `searchQuery`, `selectedCategory`, `productSortBy`.

## Styling

- One `.css` file per component (e.g., `ProductGrid.css`, `Header.css`) plus `App.css` and `styles.css` for global resets/variables.
- Class names are plain strings (not CSS modules). BEM-like naming: `.product-card`, `.product-badge`, `.add-to-cart-btn`.
- Colors in product data use inline `style={{ background: product.color }}` with hex values.
- `--accent-color` CSS custom property used in Categories for per-card theming.

## Extension Points

- Add new product attributes by extending the `Product` interface in `ProductGrid.tsx` and updating `ProductCard` rendering.
- Wire `Sidebar.tsx` into `App.tsx` to enable category filtering and price range narrowing alongside `ProductGrid`.
- Connect `searchQuery` from Header to ProductGrid's filtering logic to enable live search.
