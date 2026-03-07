

## SEO Audit: Remaining Issues to Fix

Your site is very strong technically. Here's what still needs fixing before it's fully optimized:

### Issue 1: Data Inconsistency (Critical for E-E-A-T)
Three places still say **"2,000+"** instead of **"50,000+"**:
- `SEOHead.tsx` -- meta description and OG description both say "2,000+"
- `HeroSection.tsx` -- hero paragraph says "2,000+ successful deliveries"
- `MumbaiCourier.tsx` -- meta description and on-page text say "2,000+"

Google's quality raters penalize sites with contradictory claims. These must all say "50,000+".

### Issue 2: AggregateRating Mismatch
- `index.html` says **30 reviews** (correct)
- `SEOHead.tsx` still says **27 reviews** (outdated)
- `AreaDetail.tsx` has a fabricated **"reviewCount": "500"** with a 4.8 rating -- this contradicts the GBP data (30 reviews, 5.0 rating) and could trigger a Google spam penalty

All must be aligned to **30+ reviews, 5.0 rating**.

### Issue 3: Homepage Not Using useCanonical Hook
The homepage relies on `SEOHead.tsx` which sets canonical to `window.location.origin` (no trailing slash). The `useCanonical` hook used on every other page sets it properly with the base URL. The homepage should also use the hook for consistency.

### Implementation Plan

**Task 1: Fix "2,000+" to "50,000+" in 3 files**
- `SEOHead.tsx`: Update meta description and OG description
- `HeroSection.tsx`: Update hero paragraph text
- `MumbaiCourier.tsx`: Update meta description and on-page stats text

**Task 2: Align aggregateRating across all files**
- `SEOHead.tsx`: Change ratingCount/reviewCount from 27 to 30
- `AreaDetail.tsx`: Change reviewCount from 500 to 30, ratingValue from 4.8 to 5.0

**Task 3: Add useCanonical to homepage**
- Import and call `useCanonical("/")` in `Index.tsx`, and remove the manual canonical logic from `SEOHead.tsx` to avoid duplication

These are the last remaining on-site inconsistencies. After this, your site's technical SEO is fully aligned.

