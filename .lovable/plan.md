

# Full Website Animation Upgrade

## Overview

Add professional, subtle animations throughout your entire Trackon Courier website to create a more engaging, modern user experience. This plan covers scroll-triggered animations, hover effects, micro-interactions, and continuous ambient animations.

---

## Current Animation Status

| Component | Current Animations | Status |
|-----------|-------------------|--------|
| HeroSection | `animate-fade-in` on content | Partial |
| ServicesSection | Background zoom, shimmer, icon-float on hover | Done |
| AreasSection | None | Needs work |
| WhyChooseUs | `animationDelay` set but no animation class | Broken |
| LocalTrust | None | Needs work |
| CustomerReviews | None | Needs work |
| ContactSection | None | Needs work |
| LocalProofBanner | None | Needs work |
| EnquiryForm | `animate-fade-in` | Done |
| FloatingButtons | `hover:scale-110`, `animate-pulse` | Done |
| Header | None | Needs work |
| Footer | None | Optional |

---

## New Animations to Add

### 1. Scroll-Triggered Animations (Intersection Observer)

Create a custom hook that triggers animations when elements enter the viewport:

```text
+------------------+
|  Above viewport  |
+------------------+
|                  |  <- Trigger point (when 20% visible)
|  ╭────────────╮  |
|  │  Element   │  |  <- Animates in: fade + slide up
|  ╰────────────╯  |
|                  |
+------------------+
|  Viewport        |
+------------------+
```

**New Hook: `useScrollAnimation`**
- Watches elements with `data-animate` attribute
- Adds animation classes when element enters viewport
- Supports staggered delays for lists

### 2. Component-Specific Animations

| Component | Animation Type | Effect |
|-----------|---------------|--------|
| Header | Backdrop blur on scroll | Subtle glass effect intensifies on scroll |
| LocalProofBanner | Infinite scroll/marquee | Trust badges scroll horizontally |
| AreasSection | Staggered fade-in | Area cards appear one by one |
| WhyChooseUs | Scale-in on scroll | Cards pop in with scale effect |
| LocalTrust | Counter animation | Numbers count up from 0 |
| CustomerReviews | Slide-in from sides | Cards slide in alternating directions |
| ContactSection | Fade + slide | Content appears smoothly |
| Footer | Fade-in on scroll | Subtle appearance |

### 3. New Keyframe Animations

```text
New Animations to Add:

@keyframes slide-up        - Elements slide up and fade in
@keyframes slide-in-left   - Elements slide from left
@keyframes slide-in-right  - Elements slide from right
@keyframes scale-up        - Elements scale from 0.9 to 1
@keyframes count-up        - For number counters
@keyframes marquee         - Infinite horizontal scroll
@keyframes bounce-subtle   - Gentle bounce for icons
@keyframes glow-pulse      - Subtle glow effect
```

### 4. Hover Micro-interactions

| Element | Hover Effect |
|---------|-------------|
| All cards | Lift + shadow increase |
| Buttons | Scale + color shift |
| Links | Underline animation |
| Icons | Rotate + color change |
| Images | Zoom + overlay |

---

## Files to Create/Modify

### New Files

| File | Purpose |
|------|---------|
| `src/hooks/useScrollAnimation.ts` | Intersection Observer hook for scroll animations |
| `src/hooks/useCountUp.ts` | Counter animation hook for statistics |

### Modified Files

| File | Changes |
|------|---------|
| `src/index.css` | Add 8+ new keyframe animations |
| `tailwind.config.ts` | Register new animation utilities |
| `src/components/Header.tsx` | Add scroll-based opacity/blur |
| `src/components/LocalProofBanner.tsx` | Add marquee animation |
| `src/components/AreasSection.tsx` | Add scroll-triggered fade-in |
| `src/components/WhyChooseUs.tsx` | Fix animation + add scroll trigger |
| `src/components/LocalTrust.tsx` | Add counter animation for stats |
| `src/components/CustomerReviews.tsx` | Add staggered slide-in |
| `src/components/ContactSection.tsx` | Add fade + slide animation |
| `src/components/Footer.tsx` | Add subtle fade-in |

---

## Animation Specifications

### Scroll Animation Hook

```text
Usage Pattern:
1. Import hook in component
2. Add ref to container
3. Add data-animate="fade-up" to animatable elements
4. Elements automatically animate when scrolled into view
```

### Timing Guidelines

| Animation Type | Duration | Easing |
|---------------|----------|--------|
| Fade-in | 0.6s | ease-out |
| Slide | 0.5s | ease-out |
| Scale | 0.4s | ease-out |
| Hover effects | 0.3s | ease |
| Stagger delay | 0.1s between items | - |

### Performance Considerations

- Use `will-change` sparingly
- Prefer `transform` and `opacity` (GPU-accelerated)
- Use `Intersection Observer` instead of scroll events
- Disable animations for users with `prefers-reduced-motion`

---

## Visual Preview of Animations

### LocalProofBanner Marquee
```text
← [Clock] Serving since 2019 | [Package] 2000+ deliveries | [MapPin] Same-day pickup | [Award] Trusted →
   ↑ Continuous horizontal scroll animation
```

### WhyChooseUs Cards Stagger
```text
Time 0.0s:  [ ]  [ ]  [ ]
Time 0.2s:  [█]  [ ]  [ ]   ← First card fades in
Time 0.4s:  [█]  [█]  [ ]   ← Second card fades in
Time 0.6s:  [█]  [█]  [█]   ← Third card fades in
```

### LocalTrust Counter Animation
```text
Time 0.0s:  0+    0+    0%    0%
Time 0.5s:  3+    1500+ 50%   50%
Time 1.0s:  7+    3500+ 80%   80%
Time 1.5s:  10+   5000+ 98%   100%  ← Final values
```

### CustomerReviews Alternating Slide
```text
         ←[Review 1]
                     [Review 2]→
         ←[Review 3]
```

---

## Implementation Order

1. **Create animation hooks** - `useScrollAnimation.ts` and `useCountUp.ts`
2. **Update CSS** - Add all new keyframes to `index.css`
3. **Update Tailwind config** - Register animation utilities
4. **Update Header** - Add scroll-based effects
5. **Update LocalProofBanner** - Add marquee animation
6. **Update WhyChooseUs** - Fix broken animation + add scroll trigger
7. **Update LocalTrust** - Add counter animation
8. **Update AreasSection** - Add staggered fade-in
9. **Update CustomerReviews** - Add slide-in animation
10. **Update ContactSection** - Add fade animation
11. **Update Footer** - Add subtle fade-in
12. **Add reduced-motion support** - Accessibility compliance

---

## Technical Notes

### Accessibility
- All animations respect `prefers-reduced-motion: reduce`
- No autoplaying animations that can't be paused
- Animation durations under 5 seconds

### Performance
- Intersection Observer for scroll detection (no scroll event listeners)
- CSS transforms only (no layout-triggering properties)
- Lazy animation initialization for below-fold content

### Browser Support
- Works in all modern browsers
- Graceful fallback for older browsers (content displays without animation)

