# QUICK START GUIDE
## Get Your Website Live in 15 Minutes

---

## 🚀 FASTEST PATH TO LAUNCH

### Step 1: Upload to Netlify (5 minutes)

1. Go to **[netlify.com](https://netlify.com)**
2. Sign up (free)
3. **Drag the entire `joint-website` folder** onto the dashboard
4. Done! Your site is live at `something.netlify.app`

### Step 2: Add Your Domain (5 minutes)

1. In Netlify, go to **Site settings → Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `jointdesign.com`)
4. Go to your domain registrar (where you bought the domain)
5. Add a **CNAME record**:
   - Name: `@` or `www`
   - Value: Your Netlify URL
6. Wait 10-30 minutes for DNS to update

### Step 3: Add Your First Project (5 minutes)

1. Go to `yourdomain.com/admin/`
2. Click **"+ Add New Project"**
3. Fill in:
   - Title: "Your Project Name"
   - Category: Residential or Commercial
   - Location: "Your City"
   - Year: "2024"
   - Scope: "New Construction" (or your services)
   - Image paths: For now, use the placeholder paths (you'll update later)
4. Click **"Save Project"**
5. View it live on your site!

---

## 📸 ADDING IMAGES (Do This Next)

### For Each Project:

1. **Prepare images** (use [TinyPNG.com](https://tinypng.com) to optimize):
   - 1 hero image (1920x1280px)
   - 1 thumbnail (800x600px)
   - 3+ gallery images (1200x1200px)

2. **Organize in folders**:
   ```
   images/projects/project-name/
   ├── hero.jpg
   ├── thumb.jpg
   ├── gallery-1.jpg
   ├── gallery-2.jpg
   └── gallery-3.jpg
   ```

3. **Upload to Netlify**:
   - Add images to your local `images` folder
   - Drag the entire folder to Netlify again
   - Netlify auto-updates

4. **Update project in admin panel**:
   - Edit project
   - Change image paths to: `images/projects/project-name/hero.jpg`
   - Save

---

## ✏️ QUICK CUSTOMIZATION

### Update Contact Info (2 minutes)

Open `contact.html`, find lines 67-72:
```html
<a href="mailto:your-email@domain.com">your-email@domain.com</a>
<a href="tel:123-456-7890">123-456-7890</a>
<p>Your Location</p>
```
Replace with your info, upload to Netlify.

### Change Colors (5 minutes)

Open `css/main.css`, find lines 1-7:
```css
:root {
    --black: #0a0a0a;      /* Main dark color */
    --white: #fafafa;      /* Background */
    --charcoal: #2a2a2a;   /* Secondary dark */
    --gray: #6a6a6a;       /* Text gray */
}
```
Change hex codes, upload to Netlify.

---

## 🎯 YOUR FIRST WEEK PLAN

### Day 1: Launch
- [ ] Upload to Netlify
- [ ] Connect domain
- [ ] Add 1 test project

### Day 2-3: Content
- [ ] Update contact information
- [ ] Edit about page with your story
- [ ] Update services to match what you offer

### Day 4-5: Images
- [ ] Prepare and optimize project images
- [ ] Upload images to server
- [ ] Update project image paths

### Day 6-7: Projects
- [ ] Add 3-5 real projects
- [ ] Write detailed descriptions
- [ ] Add gallery images

### Week 2: Polish
- [ ] Test on mobile devices
- [ ] Set up contact form (Netlify Forms)
- [ ] Add Google Analytics
- [ ] Share with friends for feedback

---

## 📱 TESTING YOUR SITE

### On Desktop:
1. Open in Chrome
2. Press F12 for dev tools
3. Click device icon for mobile view
4. Test all pages and links

### On Mobile:
1. Visit your site on your phone
2. Test the menu
3. Click through projects
4. Submit contact form

---

## 🆘 COMMON ISSUES & FIXES

### Site Not Loading?
→ Check domain DNS settings (can take 24 hours)

### Images Not Showing?
→ Check file paths match exactly (case-sensitive!)

### Projects Not Appearing?
→ Clear browser cache (Ctrl+Shift+R)

### Menu Not Working on Mobile?
→ Try incognito mode, then clear cache

---

## 🎊 YOU'RE LIVE!

Your professional architecture website is ready. Now:

1. **Share your site** on social media
2. **Add to your email signature**
3. **Submit to Google** for indexing
4. **Keep adding projects** to grow your portfolio

---

## 📈 NEXT LEVEL (Optional)

Once comfortable, consider:

- **Google Analytics** - Track visitors
- **SEO optimization** - Rank on Google
- **Blog section** - Share insights
- **Client testimonials** - Build trust
- **Newsletter signup** - Grow audience

---

## Need Help?

Check the full **README.md** for detailed instructions on everything.

Good luck! 🚀
