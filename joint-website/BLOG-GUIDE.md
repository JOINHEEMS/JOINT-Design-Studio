# Studio Notes Blog - Management Guide

## 📝 Overview

Your "Studio Notes" blog is a clean, editorial platform for sharing insights about architecture, design thinking, and your studio's process. It's designed to feel like a design journal—refined, thoughtful, and professional.

## 📁 File Structure

```
joint-website/
├── blog.html                      # Blog landing page
├── blog/                          # Individual articles
│   ├── material-palette.html     # Sample article
│   ├── BLOG-TEMPLATE.html        # Template for new posts
│   └── [your-articles].html      # Your blog posts
├── css/
│   └── blog.css                  # Blog-specific styles
├── images/
│   └── blog/                     # Blog images
│       ├── [article]-hero.jpg    # Hero images (1920×800px)
│       ├── [article]-thumb.jpg   # Thumbnails (800×600px)
│       └── [article]-*.jpg       # In-article images
└── js/
    └── blog.js                   # Blog functionality (optional)
```

## ✍️ Adding a New Blog Post

### Step 1: Write Your Content

Plan your article:
- **Title**: Clear, editorial tone (e.g., "Building a Material Palette")
- **Excerpt**: 1-2 sentences for the blog grid
- **Length**: 1000-2000 words ideal
- **Tone**: Thoughtful, professional, insightful (not promotional)

**Content Structure:**
- Opening paragraph (hook the reader)
- 3-5 main sections with H2 headings
- 1-2 subsections per main section (H3)
- Optional: Pull quotes, blockquotes
- Conclusion

### Step 2: Prepare Images

**Required images:**
- **Hero image**: 1920×800px (wide landscape for article top)
- **Thumbnail**: 800×600px (for blog grid)
- **In-article images**: 1200×800px (landscape) or 1200×1200px (square)

**Image tips:**
- Use architecture, materials, process shots, or site photos
- High quality but compressed (use TinyPNG.com)
- Cinematic, editorial feel
- Name clearly: `your-article-hero.jpg`, `your-article-1.jpg`

Upload to: `/images/blog/`

### Step 3: Create the Article Page

1. **Copy the template:**
   ```
   Copy: blog/BLOG-TEMPLATE.html
   Rename: blog/your-article-slug.html
   ```

2. **Update the metadata** (top of file):
   ```html
   <meta name="description" content="Your article description">
   <title>Your Article Title - Studio Notes - Join.T Design Studio</title>
   ```

3. **Update article header:**
   ```html
   <time>January 22, 2024</time>
   <span>5 min read</span>
   <h1 class="article-title">Your Article Title</h1>
   ```

4. **Replace hero image:**
   ```html
   <img src="../images/blog/your-article-hero.jpg" alt="Your Title">
   ```

5. **Add your content** in the article-content section

6. **Update related articles** at the bottom (link to 3 relevant posts)

### Step 4: Add to Blog Landing Page

Open `blog.html` and add a new card in the blog-grid:

```html
<article class="blog-card fade-in">
    <a href="blog/your-article-slug.html" class="blog-card-link">
        <div class="blog-image">
            <img data-src="images/blog/your-article-thumb.jpg" alt="Your Title" loading="lazy">
        </div>
        <div class="blog-content">
            <time class="blog-date">January 22, 2024</time>
            <h2 class="blog-title">Your Article Title</h2>
            <p class="blog-excerpt">Your 1-2 sentence excerpt goes here.</p>
            <span class="blog-link">Read more</span>
        </div>
    </a>
</article>
```

Add new posts at the top of the grid (reverse chronological order).

### Step 5: Test and Publish

1. Open the article in your browser
2. Check all images load
3. Verify links work
4. Test on mobile
5. Upload to your server

Done! Your article is live.

## 🎨 Content Guidelines

### Writing Style

**DO:**
- Write with confidence and clarity
- Use active voice
- Be specific and concrete
- Share genuine insights from your practice
- Use architectural/design terminology naturally
- Tell stories about projects and process

**DON'T:**
- Use salesy language or CTAs in articles
- Over-explain basic concepts
- Write clickbait titles
- Use excessive jargon
- Make it about selling services

### Tone Examples

**Good titles:**
- "Building a Material Palette"
- "Light and Shadow as Design Elements"
- "Where Design Meets Construction"

**Bad titles:**
- "5 Ways to Improve Your Home!"
- "The Secret to Great Design"
- "Why You Need an Architect"

### Article Topics

Great topics for Studio Notes:
- Design philosophy and approach
- Material selection and detailing
- Site analysis and response
- Construction process insights
- Project reflections and lessons
- Design thinking methodologies
- Craftsmanship and quality
- Sustainability in practice

Avoid:
- Sales pitches
- Service listings
- Client testimonials
- Self-promotion

## 📸 Image Guidelines

### Hero Images
- **Size**: 1920×800px
- **Aspect**: Wide landscape
- **Style**: Cinematic, architectural
- **Examples**: Building exteriors, material close-ups, construction details, site photos

### Thumbnails
- **Size**: 800×600px
- **Aspect**: 4:3
- **Style**: Strong composition, clear subject
- **Crop**: Focus on most interesting part of hero image

### In-Article Images
- **Size**: 1200×800px or 1200×1200px
- **Placement**: Between sections or after 3-4 paragraphs
- **Captions**: Optional but recommended for context
- **Quality**: Sharp, well-lit, professional

### Image Sources
- Your own project photography
- Construction documentation
- Material samples and mockups
- Sketches and drawings
- Site visits and studies

**Avoid:**
- Stock photos
- Client photos (without permission)
- Low-resolution images
- Over-edited/filtered images

## 🎯 SEO Best Practices

### Title Tags
Format: `Article Title - Studio Notes - Join.T Design Studio`

Keep under 60 characters for search results.

### Meta Descriptions
Write 150-160 character summaries:
```html
<meta name="description" content="Exploring how we select and combine materials to create cohesive architectural environments.">
```

### URL Structure
- Use lowercase
- Use hyphens (not underscores)
- Keep concise
- Examples:
  - `blog/material-palette.html` ✅
  - `blog/Material_Palette_2024.html` ❌

### Content SEO
- Use H2, H3 tags properly (hierarchical structure)
- Include relevant keywords naturally
- Add alt text to all images
- Link to related articles
- Aim for 1000+ words

## 📊 Blog Management

### Publishing Schedule

**Recommended frequency:**
- 1-2 posts per month (manageable)
- Consistent timing (e.g., mid-month)
- Quality over quantity

### Content Calendar Ideas

**Monthly themes:**
- January: Design process, planning
- February: Materials, textures
- March: Light and space
- April: Site and landscape
- May: Construction and craft
- June: Sustainable design
- July: Mid-year project reflections
- August: Design details
- September: Fall project planning
- October: Interior spaces
- November: Year-end reflections
- December: Looking ahead

### Evergreen vs. Timely Content

**Evergreen** (always relevant):
- Design philosophy
- Material selection
- Detailing approaches
- Process insights

**Timely** (seasonal/current):
- Recent project completions
- Industry trends
- Seasonal design considerations

Focus 80% on evergreen content.

## 🔧 Customization

### Change Colors

Edit `css/blog.css`:
```css
/* Adjust any blog-specific colors */
.blog-link::after {
    background: var(--black); /* Change underline color */
}
```

### Adjust Typography

Modify heading sizes in `css/blog.css`:
```css
.blog-title {
    font-size: 1.75rem; /* Adjust as needed */
}

.article-title {
    font-size: clamp(2.5rem, 5vw, 4rem); /* Responsive sizing */
}
```

### Grid Layout

Change column count (desktop):
```css
.blog-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
    /* Or try: repeat(3, 1fr) for 3 columns */
}
```

## 📱 Mobile Optimization

The blog is fully responsive. Test on:
- iPhone (Safari)
- Android (Chrome)
- iPad
- Desktop (various sizes)

Key breakpoints:
- **968px**: 2-column → 1-column blog grid
- **768px**: Reduced font sizes, smaller images
- **480px**: Optimized for small screens

## 🎓 Writing Resources

**Architecture & Design Writing:**
- Architectural Record
- Dezeen (editorial pieces)
- Architect Magazine
- Journal of Design History

**Writing Guides:**
- "The Elements of Style" - Strunk & White
- "On Writing Well" - William Zinsser
- "Bird by Bird" - Anne Lamott

**Tone References:**
- Studio essays from architecture firms
- Museum exhibition texts
- Design journal articles

## ✅ Pre-Publish Checklist

Before publishing each article:

- [ ] Title is clear and editorial
- [ ] Meta description written (150-160 chars)
- [ ] Hero image uploaded (1920×800px)
- [ ] Thumbnail created (800×600px)
- [ ] All in-article images uploaded
- [ ] Image alt text added
- [ ] Content proofread (no typos)
- [ ] Headings use proper hierarchy (H2, H3)
- [ ] Links tested (internal and related articles)
- [ ] Mobile view tested
- [ ] Added to blog landing page (blog.html)
- [ ] Related articles section complete

## 🚀 Promotion Ideas

**Share new articles:**
- Email newsletter
- Social media (LinkedIn, Instagram)
- Project update emails
- Add to email signature

**Content repurposing:**
- Pull quotes for social posts
- Image series on Instagram
- LinkedIn articles
- Newsletter excerpts

## 📈 Analytics (Optional)

Track blog performance:
- Page views per article
- Average time on page
- Most popular articles
- Traffic sources

Use Google Analytics (see main SETUP-GUIDE.md).

## 💡 Pro Tips

1. **Write in batches**: Write 3-4 articles at once, then schedule publishing
2. **Keep a ideas list**: Note topics as they come to you
3. **Use real projects**: Reference completed work with photos
4. **Be authentic**: Share genuine insights, not marketing copy
5. **Stay consistent**: Regular publishing builds audience
6. **Quality matters**: One great article > three mediocre ones
7. **Edit ruthlessly**: Cut unnecessary words, tighten prose
8. **Use subheadings**: Makes scanning easier
9. **Add pull quotes**: Breaks up long text, highlights key ideas
10. **Link internally**: Connect to relevant projects and other articles

---

## 🎉 You're Ready!

Your Studio Notes blog is a professional platform for sharing your architectural insights. Focus on thoughtful, well-crafted content that reflects your studio's values and approach.

Start with one article per month. As you build a library of content, you'll establish thought leadership and attract clients who value design thinking.

Questions? Check the BLOG-TEMPLATE.html for structure guidance!
