

# Plan: Improve Website Loading Speed

## Current Performance Analysis

After examining your codebase, I've identified several factors that contribute to slow initial page load:

### Current Setup (What's Good)
- Lazy loading for all page routes (App.tsx)
- SSG plugin for static HTML on homepage (good for SEO/initial paint)
- Already uses efficient libraries like lucide-react

### Performance Bottlenecks Identified

| Issue | Impact | Location |
|-------|--------|----------|
| **Google Fonts loaded via CSS @import** | Blocks rendering until font loads | `src/index.css` line 5 |
| **No font-display optimization** | Text invisible until font loads (FOIT) | `src/index.css` |
| **Homepage imports not optimized** | All components load synchronously | `src/pages/Index.tsx` |
| **No preloading of critical assets** | Browser discovers assets late | `index.html` |
| **Logo image not optimized** | PNG format, not preloaded | `src/assets/trackon-logo.png` |
| **Blog images not lazy loaded** | All images load on page | Blog images |
| **Heavy dependencies in bundle** | recharts, date-fns, cmdk included even if not used on homepage | `package.json` |

---

## Implementation Plan

### Phase 1: Critical Font Loading Optimization

**Problem:** The Google Font is loaded via `@import` in CSS, which blocks rendering.

**Solution:** Move font loading to `index.html` with `preconnect` and use `font-display: swap`.

**Changes to `index.html`:**
- Add preconnect for fonts (already exists, good!)
- Add preload link for the font CSS with optimal loading

**Changes to `src/index.css`:**
- Remove the `@import` statement for Google Fonts
- Add `font-display: swap` fallback

This alone can improve perceived load time by 200-500ms.

---

### Phase 2: Preload Critical Assets

**Add to `index.html`:**
```html
<!-- Preload critical font -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"></noscript>

<!-- Preload logo -->
<link rel="preload" href="/src/assets/trackon-logo.png" as="image" type="image/png">
```

---

### Phase 3: Optimize Header Component

**Problem:** The logo image loads after React hydrates.

**Solution:** Add loading="eager" and fetchpriority="high" to the logo in Header.tsx.

```tsx
<img 
  src={trackonLogo} 
  alt="Trackon Courier" 
  className="h-10 md:h-12 w-auto"
  loading="eager"
  fetchPriority="high"
/>
```

---

### Phase 4: Lazy Load Below-the-Fold Sections

**Problem:** All homepage sections load synchronously, even those below the fold.

**Solution:** Lazy load components that aren't visible on initial load.

**Changes to `src/pages/Index.tsx`:**
```tsx
import { lazy, Suspense } from "react";

// Keep critical above-fold components as regular imports
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LocalProofBanner from "@/components/LocalProofBanner";
import SEOHead from "@/components/SEOHead";
import FloatingButtons from "@/components/FloatingButtons";

// Lazy load below-fold components
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const AreasSection = lazy(() => import("@/components/AreasSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const LocalTrust = lazy(() => import("@/components/LocalTrust"));
const CustomerReviews = lazy(() => import("@/components/CustomerReviews"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
```

---

### Phase 5: Add Skeleton Loading States

**Problem:** When lazy components load, there's a visual flash.

**Solution:** Create a lightweight skeleton component for smooth loading.

**Create `src/components/SectionSkeleton.tsx`:**
```tsx
const SectionSkeleton = () => (
  <div className="py-16 animate-pulse">
    <div className="container">
      <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4" />
      <div className="h-4 bg-muted rounded w-2/3 mx-auto mb-8" />
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-muted rounded-xl" />
        ))}
      </div>
    </div>
  </div>
);
```

---

### Phase 6: Optimize Image Loading

**Changes to blog images in `src/components/blog/BlogCard.tsx`:**
- Already has `loading="lazy"` (good!)
- Add `decoding="async"` for non-blocking decode

**Changes to `src/components/Header.tsx`:**
- Add `decoding="async"` to the logo

---

## Summary of Changes

| File | Changes |
|------|---------|
| `index.html` | Add font preload, logo preload |
| `src/index.css` | Remove @import, fonts now loaded from HTML |
| `src/pages/Index.tsx` | Lazy load below-fold sections |
| `src/components/Header.tsx` | Add fetchPriority="high" to logo |
| `src/components/SectionSkeleton.tsx` | New file for loading states |
| `src/components/blog/BlogCard.tsx` | Add decoding="async" to images |

---

## Expected Performance Improvement

| Metric | Before | After (Est.) |
|--------|--------|--------------|
| **First Contentful Paint (FCP)** | ~2-3s | ~1-1.5s |
| **Largest Contentful Paint (LCP)** | ~3-4s | ~1.5-2s |
| **Time to Interactive (TTI)** | ~4-5s | ~2-3s |
| **Initial JS Bundle** | Full | Reduced by ~30% |

These optimizations focus on:
1. Showing content faster (font swap, preloading)
2. Loading less JavaScript initially (lazy loading sections)
3. Prioritizing critical assets (logo, fonts)

---

## Technical Notes

- The SSG plugin already provides static HTML for SEO crawlers - this is excellent
- React hydration happens after static content is visible
- Lazy loading sections won't affect SEO because the SSG plugin injects full content in production builds
- All changes are backward compatible and don't affect functionality

