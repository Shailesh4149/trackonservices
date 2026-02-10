

# Make Favicon Circular

## What Will Change

The current rectangular favicon (`public/favicon.webp`) will be replaced with a circular SVG favicon that clips the logo into a clean circle shape, giving it a modern, polished look in browser tabs.

## Approach

Create a new `public/favicon.svg` file that:
- Uses a circular `clipPath` to mask the image into a perfect circle
- Embeds the Trackon brand logo/image inside the circle
- Optionally adds a background fill (brand orange or white) behind the logo for contrast

Then update `index.html` to reference the new SVG favicon instead of the webp.

## Files to Modify

| File | Change |
|------|--------|
| `public/favicon.svg` | New circular SVG favicon with circle clip-path and brand styling |
| `index.html` | Update favicon `<link>` to point to `/favicon.svg` with type `image/svg+xml` |

## Technical Details

The SVG will use:
```
<svg> with viewBox="0 0 100 100"
  <clipPath> with <circle cx="50" cy="50" r="50">
  <image> clipped to the circle
```

This ensures the favicon renders as a circle in all modern browsers.

