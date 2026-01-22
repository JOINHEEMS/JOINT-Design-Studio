# Join.T Design Studio - Multi-Page Website Setup Guide

## 📁 File Structure

```
joint-website/
├── index.html              # Homepage
├── projects.html           # All projects page
├── services.html           # Services page
├── about.html             # About page
├── contact.html           # Contact page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── main.js            # Core JavaScript functionality
│   ├── cms.js             # CMS for managing projects
│   └── projects-data.json # Project database (EDIT THIS!)
├── images/
│   └── projects/          # Put all project images here
├── projects/              # Individual project detail pages
│   ├── modern-hillside-home.html
│   ├── minimalist-lake-house.html
│   ├── urban-office-renovation.html
│   └── ... (more projects)
└── admin/                 # Optional: CMS admin interface

```

## 🚀 Quick Start

### 1. Upload Files to Your Server

**Via FTP/cPanel:**
1. Connect to your hosting via FTP (FileZilla, Cyberduck, etc.)
2. Navigate to `public_html` or `www` folder
3. Upload ALL files maintaining the folder structure
4. Rename `index.html` to `index.html` (should be automatic)

**Via Netlify (Recommended - Free):**
1. Zip the entire `joint-website` folder
2. Go to netlify.com
3. Drag and drop the zip file
4. Connect your custom domain in Settings > Domain management

**Via GitHub Pages:**
1. Create a GitHub account
2. Create a new repository named `yourusername.github.io`
3. Upload all files
4. Go to Settings > Pages > Add custom domain

### 2. Add Your Images

Create this folder structure in `/images/projects/`:

```
images/
└── projects/
    ├── modern-hillside-thumb.jpg    # Thumbnail (800x600px)
    ├── modern-hillside-hero.jpg     # Hero image (1920x1080px)
    ├── modern-hillside-1.jpg        # Gallery images (1200x1200px)
    ├── modern-hillside-2.jpg
    ├── modern-hillside-3.jpg
    ├── lake-house-thumb.jpg
    ├── lake-house-hero.jpg
    └── ... (all your project images)
```

**Image Optimization Tips:**
- Thumbnails: 800x600px, 80-85% quality
- Hero images: 1920x1080px, 85% quality
- Gallery images: 1200x1200px, 80% quality
- Use JPG for photos, PNG for logos/graphics
- Compress images using TinyPNG.com or Squoosh.app

### 3. Update Project Data

Open `js/projects-data.json` and edit your projects:

```json
{
  "projects": [
    {
      "id": 1,
      "slug": "your-project-url-name",
      "title": "Your Project Title",
      "type": "Residential",
      "category": "residential",
      "location": "City, State",
      "scope": "New Construction, Interior Design",
      "completion": "2024",
      "featured": true,
      "thumbnail": "images/projects/your-project-thumb.jpg",
      "hero": "images/projects/your-project-hero.jpg",
      "description": [
        "First paragraph about the project...",
        "Second paragraph..."
      ],
      "gallery": [
        "images/projects/your-project-1.jpg",
        "images/projects/your-project-2.jpg",
        "images/projects/your-project-3.jpg"
      ],
      "features": [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ]
    }
  ]
}
```

**Important Fields:**
- `slug`: URL-friendly name (no spaces, lowercase)
- `category`: Either "residential" or "commercial"
- `featured`: Set to `true` for homepage display (limit to 3)
- `thumbnail`: Square or 4:3 ratio image
- `hero`: Wide landscape image
- `gallery`: 3-6 images for detail page

### 4. Update Contact Information

Edit these files:

**contact.html:**
```html
<a href="mailto:YOUR-EMAIL@domain.com">YOUR-EMAIL@domain.com</a>
<a href="tel:YOUR-PHONE">YOUR-PHONE</a>
<p>Your Actual Location</p>
```

**about.html:**
- Update studio description
- Add your bio and credentials
- Replace founder image path

### 5. Connect Your Domain

**For Netlify:**
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain: `yourdomain.com`
4. Add DNS records provided by Netlify to your domain registrar

**DNS Settings (at your domain registrar):**
```
Type: A
Name: @
Value: [Netlify IP - they provide this]

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

Wait 24-48 hours for DNS propagation.

## 📝 Adding New Projects

### Method 1: Using the JSON File (Easiest)

1. Open `js/projects-data.json`
2. Copy an existing project block
3. Update all fields with new project info
4. Upload new project images to `/images/projects/`
5. Save the file
6. Project automatically appears on site!

### Method 2: Creating Individual Project Pages

1. Copy `projects/project-template.html` (see template file)
2. Rename to `projects/your-project-slug.html`
3. Update all content in the HTML
4. Add entry to `projects-data.json`

## 🎨 Customization Guide

### Colors

Edit `css/style.css`, lines 1-7:

```css
:root {
    --black: #0a0a0a;      /* Primary dark */
    --white: #fafafa;      /* Background */
    --charcoal: #2a2a2a;   /* Secondary dark */
    --gray: #6a6a6a;       /* Body text */
    --light-gray: #e5e5e5; /* Borders */
}
```

### Fonts

Current fonts: Archivo (headings) + DM Sans (body)

To change, edit the Google Fonts link in all HTML files:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500&display=swap" rel="stylesheet">
```

Then update CSS:

```css
:root {
    --heading: 'YourFont', sans-serif;
    --body: 'AnotherFont', sans-serif;
}
```

### Logo

Replace the SVG in the header (all HTML files):

```html
<div class="logo-mark">
    <!-- Replace this SVG with your logo -->
    <svg>...</svg>
</div>
```

Or use an image:

```html
<div class="logo-mark">
    <img src="images/logo.png" alt="Logo">
</div>
```

## 📧 Contact Form Setup

The contact form currently shows a success message but doesn't send emails.

### Option 1: Use Netlify Forms (Easiest)

In `contact.html`, update the form:

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact">
    <!-- rest of form -->
</form>
```

Netlify automatically handles form submissions!

### Option 2: Use Formspree

1. Sign up at formspree.io
2. Get your form endpoint
3. Update form action:

```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

### Option 3: Use EmailJS (JavaScript)

1. Sign up at emailjs.com
2. Add their script to `contact.html`
3. Follow their integration guide

## 🔧 SEO Optimization

### 1. Update Meta Tags

In each HTML file, update:

```html
<title>Specific Page Title - Join.T Design Studio</title>
<meta name="description" content="Specific page description here">
```

### 2. Add Google Analytics

Before `</head>` in all HTML files:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Create sitemap.xml

Create `sitemap.xml` in root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-20</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/projects.html</loc>
    <lastmod>2024-01-20</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

### 4. Add robots.txt

Create `robots.txt` in root:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## 🐛 Troubleshooting

### Projects Not Loading

1. Check browser console for errors (F12)
2. Verify `projects-data.json` is valid JSON (use jsonlint.com)
3. Ensure image paths match exactly (case-sensitive!)
4. Check that `cms.js` is loaded

### Images Not Showing

1. Verify image files exist in correct folder
2. Check file names match exactly (case-sensitive)
3. Ensure images are web-optimized (< 2MB each)
4. Try clearing browser cache

### Form Not Submitting

1. Verify form integration is set up (Netlify/Formspree)
2. Check browser console for errors
3. Ensure all required fields have `required` attribute

### Mobile Menu Not Working

1. Check that `main.js` is loading
2. Verify no JavaScript errors in console
3. Clear browser cache

## 📱 Mobile Optimization

The site is fully responsive! Test on:
- iPhone Safari
- Android Chrome
- iPad
- Desktop browsers at different sizes

Use Chrome DevTools (F12) > Toggle device toolbar to test.

## 🔒 Security Best Practices

1. Keep hosting platform updated
2. Use HTTPS (automatic with Netlify)
3. Don't expose email addresses (use contact form)
4. Add CAPTCHA if spam is an issue
5. Regular backups of your files

## 📞 Need Help?

Common resources:
- HTML/CSS: w3schools.com, mdn.mozilla.org
- Hosting: netlify.com/docs
- Image optimization: tinypng.com, squoosh.app
- JSON validation: jsonlint.com

## 🎉 Launch Checklist

- [ ] All images uploaded and optimized
- [ ] Project data updated in JSON file
- [ ] Contact information updated
- [ ] About page customized
- [ ] Domain connected
- [ ] SSL certificate active (HTTPS)
- [ ] Contact form working
- [ ] Google Analytics added
- [ ] Tested on mobile devices
- [ ] Tested all internal links
- [ ] sitemap.xml created
- [ ] Submitted sitemap to Google Search Console
- [ ] Social media links updated
- [ ] Email signature updated with new site

Your site is ready to launch! 🚀
