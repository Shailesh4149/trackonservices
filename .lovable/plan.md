

## Plan: Build 4 High-Volume Keyword Landing Pages + Sitemap Update

### Overview
Create 4 dedicated SEO landing pages following the exact pattern established by `SameDayCourier.tsx` — each with unique content, JSON-LD schema, meta tags, breadcrumbs, and CTA sections. Add all routes to the app router and sitemap.

### Pages to Create

| # | File | Route | Target Keyword | Search Intent |
|---|------|-------|----------------|---------------|
| 1 | `src/pages/BookCourierOnline.tsx` | `/book-courier-online` | book courier online | Transactional |
| 2 | `src/pages/CourierPickupFromHome.tsx` | `/courier-pickup-from-home` | courier pickup from home | Service discovery |
| 3 | `src/pages/CourierChargesPerKg.tsx` | `/courier-charges-per-kg` | courier charges per kg | Price research |
| 4 | `src/pages/CourierNearMeOpenNow.tsx` | `/courier-near-me-open-now` | courier near me open now | Urgent local |

### Page Structure (each page follows SameDayCourier pattern)
- Header + Footer + FloatingButtons
- Breadcrumb navigation
- Hero section with icon, H1, description
- `useCanonical` hook + meta tags (title, description, keywords, OG)
- JSON-LD Service schema with LocalBusiness provider
- 3-4 content sections (service overview, how it works, benefits, FAQ-style content)
- Sidebar CTA with phone/WhatsApp buttons
- Unique, keyword-rich copy tailored to each search intent

### Content Strategy Per Page
1. **Book Courier Online** — Online booking process, WhatsApp/call CTA, step-by-step guide, pricing preview
2. **Courier Pickup From Home** — Doorstep pickup USP, 30-60 min pickup, home pickup areas covered, safety protocols
3. **Courier Charges Per Kg** — Rate table (reuse pricing data), weight-based breakdown, comparison with competitors, "get exact quote" CTA
4. **Courier Near Me Open Now** — 24/7 availability USP, real-time availability messaging, location details, Google Maps reference

### Router & Sitemap Updates

**`src/App.tsx`** — Add 4 lazy imports and 4 routes

**`public/sitemap.xml`** — Add 4 new URL entries with priority 0.9 and weekly changefreq

### Technical Details
- Each page uses `useCanonical()` for canonical tag management
- Each page injects page-specific `application/ld+json` with `data-service` attribute for cleanup
- Meta tags updated via the same `updateMeta` helper pattern used in existing pages
- All pages are lazy-loaded with the existing `Suspense` wrapper

### Verification
After building, each page will be tested end-to-end in the browser to confirm rendering, meta tags, schema markup, and navigation.

