
# Plan: Add Unique Blog Post Images

## Objective
Replace the generic package icon (📦) with unique, article-related images for each blog post. Images will be stored locally in the project for full portability across platforms.

## Current Issues
1. `BlogCard.tsx` shows a hardcoded 📦 emoji instead of using the `post.image` property
2. All blog posts in `blogPosts.ts` reference `/placeholder.svg` instead of unique images
3. No actual blog images exist in the project

## Implementation Strategy

### Phase 1: Create Blog Images Directory
Create a dedicated folder structure for blog images:
```
public/
  └── blog/
      ├── fastest-courier-mumbai.webp
      ├── tracking-service-guide.webp
      ├── logistics-efficiency.webp
      ├── same-day-vs-express.webp
      ├── international-shipping.webp
      ├── packaging-guide.webp
      ├── mumbai-delivery-areas.webp
      └── business-courier-solutions.webp
```

### Phase 2: Generate Unique Images
Use AI image generation to create 8 professional, courier/logistics-themed images. Each image will be:
- Relevant to the article topic (e.g., tracking devices, delivery trucks, packages, maps)
- Consistent brand style with orange/professional color scheme
- Optimized for web (WebP format, ~800x450px for 16:9 aspect ratio)

Image concepts for each article:
| Article | Image Concept |
|---------|--------------|
| Fastest Courier Mumbai | Delivery rider on bike speeding through Mumbai streets |
| Tracking Service Guide | Smartphone showing package tracking map with location pins |
| Logistics Efficiency | Organized warehouse with boxes and efficiency charts |
| Same Day vs Express | Split comparison showing clock/timer with packages |
| International Shipping | Globe with airplanes and package routes |
| Packaging Guide | Professional packaging materials and boxes |
| Mumbai Delivery Areas | Mumbai city map with delivery zones highlighted |
| Business Courier Solutions | Office desk with packages and business documents |

### Phase 3: Update Blog Data
Modify `src/data/blogPosts.ts` to reference unique images:
```typescript
// Before
image: "/placeholder.svg",

// After
image: "/blog/fastest-courier-mumbai.webp",
```

### Phase 4: Fix BlogCard Component
Update `src/components/blog/BlogCard.tsx` to use `post.image` instead of the hardcoded emoji:
```tsx
// Before
<div className="aspect-[16/9] bg-secondary flex items-center justify-center">
  <div className="text-6xl text-muted-foreground/30">📦</div>
</div>

// After
<div className="aspect-[16/9] bg-secondary overflow-hidden">
  <img 
    src={post.image} 
    alt={post.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    loading="lazy"
  />
</div>
```

## Files to Modify
1. **Create**: `public/blog/` directory with 8 unique images
2. **Edit**: `src/data/blogPosts.ts` - Update image paths for all 8 blog posts
3. **Edit**: `src/components/blog/BlogCard.tsx` - Replace emoji with `<img>` tag using `post.image`

## Portability Guarantee
- All images stored in `public/blog/` folder
- Images are bundled with your project code
- When you export or move the project, images travel with it
- No external dependencies or CDN URLs

## Technical Details

### Image Specifications
- Format: WebP (smaller file size, modern browser support)
- Dimensions: 800×450px (16:9 aspect ratio matching current design)
- File size target: ~50-100KB each for fast loading

### Lazy Loading
Images will use `loading="lazy"` attribute for performance - images below the fold load only when needed.

### Fallback Handling
Add error handling for images that fail to load:
```tsx
<img 
  src={post.image} 
  alt={post.title}
  onError={(e) => {
    e.currentTarget.src = '/placeholder.svg';
  }}
/>
```

## Expected Result
Each blog post will display a unique, professional image that:
- Visually represents the article content
- Matches the courier/logistics theme of your business
- Looks consistent and professional across all blog cards
- Loads efficiently with lazy loading
- Is fully portable when moving between platforms
