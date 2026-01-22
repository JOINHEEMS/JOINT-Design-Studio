// Blog-specific JavaScript for Studio Notes
// Optional enhancements for the blog

// Calculate reading time for articles
function calculateReadingTime() {
    const article = document.querySelector('.article-content');
    if (!article) return;
    
    const text = article.textContent;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words/min
    
    const readingTimeElement = document.querySelector('.article-meta span:last-child');
    if (readingTimeElement && !readingTimeElement.textContent.includes('min read')) {
        readingTimeElement.textContent = `${readingTime} min read`;
    }
}

// Add reading progress indicator (optional)
function addReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--black);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const article = document.querySelector('.article-content');
        if (!article) return;
        
        const windowHeight = window.innerHeight;
        const documentHeight = article.offsetHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const articleTop = article.offsetTop;
        
        const scrolled = ((scrollTop - articleTop + windowHeight) / documentHeight) * 100;
        const progress = Math.min(Math.max(scrolled, 0), 100);
        
        progressBar.style.width = progress + '%';
    });
}

// Enhance image loading with fade-in effect
function enhanceImageLoading() {
    const images = document.querySelectorAll('.article-content img');
    
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.transition = 'opacity 0.5s ease';
                this.style.opacity = '1';
            });
        }
    });
}

// Share article functionality (optional)
function addShareButtons() {
    const articleHeader = document.querySelector('.article-header');
    if (!articleHeader) return;
    
    const shareContainer = document.createElement('div');
    shareContainer.className = 'share-buttons';
    shareContainer.style.cssText = `
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid var(--light-gray);
    `;
    
    const shareText = document.createElement('span');
    shareText.textContent = 'Share:';
    shareText.style.cssText = `
        font-size: 0.85rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--gray);
    `;
    
    const title = encodeURIComponent(document.title);
    const url = encodeURIComponent(window.location.href);
    
    const shareLinks = [
        {
            name: 'LinkedIn',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            icon: 'in'
        },
        {
            name: 'Twitter',
            url: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
            icon: 'tw'
        },
        {
            name: 'Email',
            url: `mailto:?subject=${title}&body=Check out this article: ${url}`,
            icon: '@'
        }
    ];
    
    shareContainer.appendChild(shareText);
    
    shareLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = link.icon;
        a.style.cssText = `
            font-size: 0.85rem;
            color: var(--gray);
            text-decoration: none;
            transition: color 0.3s ease;
        `;
        a.addEventListener('mouseenter', function() {
            this.style.color = 'var(--black)';
        });
        a.addEventListener('mouseleave', function() {
            this.style.color = 'var(--gray)';
        });
        
        shareContainer.appendChild(a);
    });
    
    // Uncomment to enable share buttons
    // articleHeader.appendChild(shareContainer);
}

// Print-friendly styling
function enhancePrint() {
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            header, footer, .related-articles, .cta, .back-to-blog, .share-buttons {
                display: none !important;
            }
            .article-content {
                max-width: 100%;
                font-size: 11pt;
            }
            .article-content img {
                max-width: 100%;
                page-break-inside: avoid;
            }
        }
    `;
    document.head.appendChild(printStyles);
}

// Initialize blog enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Calculate reading time
    calculateReadingTime();
    
    // Enhance image loading
    enhanceImageLoading();
    
    // Add print styles
    enhancePrint();
    
    // Optional: Uncomment to enable
    // addReadingProgress();
    // addShareButtons();
});

// Smooth scroll for anchor links within articles
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('.article-content a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Copy article URL to clipboard (optional feature)
function addCopyLinkButton() {
    const articleHeader = document.querySelector('.article-header');
    if (!articleHeader) return;
    
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy Link';
    copyButton.className = 'copy-link-btn';
    copyButton.style.cssText = `
        margin-top: 1rem;
        padding: 0.75rem 1.5rem;
        border: 1px solid var(--light-gray);
        background: transparent;
        color: var(--gray);
        font-size: 0.85rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    copyButton.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            this.textContent = 'Link Copied!';
            setTimeout(() => {
                this.textContent = 'Copy Link';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
    
    copyButton.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--black)';
        this.style.color = 'var(--black)';
    });
    
    copyButton.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--light-gray)';
        this.style.color = 'var(--gray)';
    });
    
    // Uncomment to enable copy link button
    // articleHeader.appendChild(copyButton);
}

// Export functions for use elsewhere
window.BlogEnhancements = {
    calculateReadingTime,
    addReadingProgress,
    enhanceImageLoading,
    addShareButtons,
    addCopyLinkButton
};
