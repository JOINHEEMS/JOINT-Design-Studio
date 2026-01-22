# Join.T Design Studio Website

## 🎯 Overview

A modern, multi-page architecture portfolio website with:
- **CMS Integration** - Manage projects via JSON file (no database needed!)
- **Lazy Loading** - Optimized image loading for fast performance
- **Responsive Design** - Perfect on all devices
- **SEO Optimized** - Clean structure and meta tags
- **Easy to Update** - Add projects without coding

## 📦 What's Included

### Pages:
1. **index.html** - Homepage with featured projects
2. **projects.html** - All projects with filter
3. **services.html** - Services overview
4. **about.html** - Studio information
5. **contact.html** - Contact form and info
6. **projects/** - Individual project detail pages

### JavaScript:
- **main.js** - Core functionality (navigation, animations, forms)
- **cms.js** - Content management system
- **projects-data.json** - YOUR PROJECT DATABASE (edit this!)

### CSS:
- **style.css** - All styles with CSS variables for easy customization

## 🚀 Quick Setup (3 Steps)

### 1. Upload to Your Host
- Upload all files to your `public_html` folder
- Or use Netlify (drag & drop the folder - done!)

### 2. Add Your Images
Create: `images/projects/` folder
Add your images following this naming:
```
project-name-thumb.jpg (800x600px)
project-name-hero.jpg (1920x1080px)
project-name-1.jpg (1200x1200px)
project-name-2.jpg
project-name-3.jpg
```

### 3. Update Project Data
Edit `js/projects-data.json` with your projects:
```json
{
  "slug": "project-url-name",
  "title": "Project Title",
  "location": "City, State",
  "featured": true,
  "thumbnail": "images/projects/your-thumb.jpg",
  "hero": "images/projects/your-hero.jpg",
  "description": ["Paragraph 1", "Paragraph 2"],
  "gallery": ["img1.jpg", "img2.jpg", "img3.jpg"],
  "features": ["Feature 1", "Feature 2"]
}
```

**That's it! Your projects will automatically appear on the site.**

## 📝 Adding a New Project

1. Prepare your images (thumbnail + hero + 3-6 gallery images)
2. Upload images to `/images/projects/`
3. Open `js/projects-data.json`
4. Copy an existing project entry
5. Update with your new project info
6. Save - done!

The project will automatically show on:
- Homepage (if `featured: true`)
- Projects page
- Will be filterable by category

## 🎨 Customization

### Change Colors
Edit `css/style.css` lines 1-7:
```css
:root {
    --black: #0a0a0a;
    --white: #fafafa;
    --charcoal: #2a2a2a;
}
```

### Change Fonts
Edit the Google Fonts link in HTML files and update:
```css
:root {
    --heading: 'YourFont', sans-serif;
    --body: 'AnotherFont', sans-serif;
}
```

### Update Contact Info
Edit `contact.html`:
- Email address
- Phone number
- Location

## 📧 Contact Form Setup

### Option 1: Netlify Forms (Easiest)
In `contact.html`, add to form tag:
```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 2: Formspree
1. Sign up at formspree.io
2. Add action to form:
```html
<form action="https://formspree.io/f/YOUR-ID" method="POST">
```

### Option 3: Email Service
Use EmailJS, SendGrid, or your own backend API.

## 🔧 Features

### Lazy Loading
Images load as you scroll - faster initial page load!

### Fade-in Animations
Add `class="fade-in"` to any element for scroll animation.

### Project Filtering
Click category tabs on Projects page to filter.

### Mobile Menu
Responsive hamburger menu for mobile devices.

### SEO Ready
- Semantic HTML
- Meta descriptions
- Proper heading structure
- Fast loading

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🐛 Troubleshooting

**Projects not loading?**
- Check `projects-data.json` is valid JSON (use jsonlint.com)
- Verify image paths match exactly
- Check browser console (F12) for errors

**Images not showing?**
- Confirm files exist in `/images/projects/`
- Check file names (case-sensitive!)
- Compress large images (< 2MB each)

**Contact form not working?**
- Set up Netlify Forms or Formspree integration
- Check form ID matches in JavaScript

## 📁 File Structure
```
├── index.html
├── projects.html
├── services.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── cms.js
│   └── projects-data.json   ← EDIT THIS!
├── images/
│   └── projects/            ← ADD IMAGES HERE!
└── projects/
    └── [auto-generated from data]
```

## 🎯 Best Practices

### Image Optimization
- Use JPG for photos (80-85% quality)
- Max width: 1920px
- Compress with TinyPNG or Squoosh
- Use descriptive file names

### Content Updates
- Keep project descriptions concise (2-3 paragraphs)
- Use 3-6 gallery images per project
- Set only 3 projects as "featured"
- Update completion dates regularly

### Performance
- Optimize all images before upload
- Keep JSON file < 100KB
- Test on mobile devices
- Check Google PageSpeed Insights

## 📞 Support Resources

- **Setup Guide**: See SETUP-GUIDE.md for detailed instructions
- **HTML/CSS Help**: w3schools.com, mdn.mozilla.org
- **Hosting**: netlify.com/docs
- **Image Tools**: tinypng.com, squoosh.app

## ✅ Launch Checklist

- [ ] All images uploaded and optimized
- [ ] projects-data.json updated
- [ ] Contact info updated
- [ ] Domain connected
- [ ] SSL enabled (HTTPS)
- [ ] Contact form tested
- [ ] Mobile tested
- [ ] All links work
- [ ] Google Analytics added
- [ ] Social media links updated

## 🎉 You're Ready!

Your professional architecture portfolio is ready to launch. The CMS makes it easy to add projects anytime without touching code.

Need help? Check SETUP-GUIDE.md for detailed instructions!
