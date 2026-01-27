

# Plan: Fix Horizontal Scrolling Issue on Home Page (Mobile View)

## Problem Analysis

After examining all components on the home page, I've identified **multiple potential causes** for horizontal overflow on mobile devices:

### Root Causes Identified

| Component | Issue | Location |
|-----------|-------|----------|
| **HeroSection** | Absolute positioned decorative elements (`w-72`, `w-96`) with `left-10` and `right-10` can extend beyond viewport on small screens | Lines 9-12 |
| **LocalProofBanner** | Text items don't wrap properly on very small screens, causing overflow | Lines 30-42 |
| **ContactSection** | Long email address (`sonacourierservices@gmail.com`) and office address can overflow on narrow screens | Lines 48, 58-61 |
| **Footer** | Long email and address text without proper wrapping | Lines 37-44 |
| **Global CSS** | Missing `overflow-x: hidden` on body/html to prevent horizontal scroll globally | `src/index.css` |

### Visual Representation

```text
┌────────────────────────────────────┐
│         Mobile Viewport            │
│  ┌──────────────────────────────┐  │
│  │  Content fits properly       │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐──┼──┐ ← Overflow!
│  │  HeroSection decorative      │  │  │
│  │  circles extend beyond       │  │  │
│  └──────────────────────────────┘──┼──┘
│                                    │
│  ┌──────────────────────────────┐──┼──┐ ← Overflow!
│  │  Long email/address text     │  │  │
│  └──────────────────────────────┘──┼──┘
└────────────────────────────────────┘
```

---

## Implementation Plan

### 1. Add Global Overflow Protection (src/index.css)

Add `overflow-x: hidden` to the `html` and `body` elements to prevent any horizontal scrolling site-wide.

**Changes:**
```css
html, body {
  overflow-x: hidden;
}
```

This is a safety net that catches any elements that might accidentally extend beyond the viewport.

---

### 2. Fix HeroSection Decorative Elements (src/components/HeroSection.tsx)

The absolute-positioned decorative circles with fixed widths (`w-72`, `w-96`) positioned at `left-10` and `right-10` can overflow on mobile.

**Solution:** Make them responsive and ensure they stay within bounds.

**Changes:**
- Add responsive sizing: `w-48 md:w-72` and `w-64 md:w-96`
- Use percentage-based or safer positioning
- Ensure parent container clips overflow

---

### 3. Fix LocalProofBanner Wrapping (src/components/LocalProofBanner.tsx)

The trust signals use `flex-wrap` but individual items might be too wide.

**Solution:** Add proper text wrapping and ensure items don't overflow.

**Changes:**
- Add `text-center` on mobile for better text distribution
- Ensure text wraps properly with `whitespace-normal`

---

### 4. Fix ContactSection Text Overflow (src/components/ContactSection.tsx)

Long email and address strings can break mobile layouts.

**Solution:** Add word-break utilities to handle long text.

**Changes:**
- Add `break-words` class to email and address elements
- Ensure `min-w-0` on flex children to allow text truncation

---

### 5. Fix Footer Text Overflow (src/components/Footer.tsx)

Similar to ContactSection, the footer has long email and address text.

**Solution:** Add word-break utilities.

**Changes:**
- Add `break-words` or `break-all` to long text elements

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Add `overflow-x: hidden` to html/body |
| `src/components/HeroSection.tsx` | Responsive decorative circles sizing |
| `src/components/LocalProofBanner.tsx` | Improve text wrapping on mobile |
| `src/components/ContactSection.tsx` | Add word-break for long text |
| `src/components/Footer.tsx` | Add word-break for long text |

---

## Technical Details

### CSS Utilities to Add

```css
/* Already available via Tailwind */
.overflow-x-hidden { overflow-x: hidden; }
.break-words { word-wrap: break-word; overflow-wrap: break-word; }
.break-all { word-break: break-all; }
.min-w-0 { min-width: 0; }
```

### Testing Checklist

After implementation, verify on these mobile widths:
- 320px (iPhone SE / small phones)
- 375px (iPhone standard)
- 390px (iPhone 12/13/14)
- 414px (iPhone Plus/Max)

---

## Expected Result

- No horizontal scrollbar on mobile home page
- All text content wraps properly within the viewport
- Decorative elements stay contained
- No visual layout changes on desktop
- Clean, professional mobile experience

