// Simple CMS for managing projects
const CMS = {
    projectsFile: 'js/projects-data.json',
    cache: { projects: null, lastUpdated: null }
};

async function loadProjects() {
    try {
        if (CMS.cache.projects && CMS.cache.lastUpdated) {
            const cacheAge = new Date().getTime() - CMS.cache.lastUpdated;
            if (cacheAge < 300000) return CMS.cache.projects;
        }
        const response = await fetch(CMS.projectsFile);
        const data = await response.json();
        CMS.cache.projects = data.projects;
        CMS.cache.lastUpdated = new Date().getTime();
        return data.projects;
    } catch (error) {
        console.error('Error loading projects:', error);
        return [];
    }
}

async function renderProjectsGrid(container, filter = 'all') {
    const projects = await loadProjects();
    if (!container) return;
    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    container.innerHTML = filteredProjects.map(project => `
        <div class="project-card fade-in" data-category="${project.category}">
            <a href="projects/${project.slug}.html">
                <div class="project-image">
                    <img data-src="${project.thumbnail}" alt="${project.title}" loading="lazy">
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-meta">${project.type} • ${project.location}</p>
            </a>
        </div>
    `).join('');
    lazyLoadImages();
}

async function renderFeaturedProjects(container, limit = 3) {
    const projects = await loadProjects();
    if (!container) return;
    const featured = projects.filter(p => p.featured).slice(0, limit);
    container.innerHTML = featured.map(project => `
        <div class="project-card fade-in">
            <a href="projects/${project.slug}.html">
                <div class="project-image">
                    <img data-src="${project.thumbnail}" alt="${project.title}" loading="lazy">
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-meta">${project.type} • ${project.location}</p>
            </a>
        </div>
    `).join('');
    lazyLoadImages();
}

async function renderProjectDetail(slug) {
    const projects = await loadProjects();
    const project = projects.find(p => p.slug === slug);
    if (!project) return;
    
    document.title = `${project.title} - Join.T Design Studio`;
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) breadcrumb.innerHTML = `<a href="../index.html">Home</a><span>/</span><a href="../projects.html">Projects</a><span>/</span><span>${project.title}</span>`;
    
    const heroImage = document.querySelector('.project-detail-hero img');
    if (heroImage) { heroImage.src = project.hero; heroImage.alt = project.title; }
    
    const title = document.querySelector('.project-detail-title');
    if (title) title.textContent = project.title;
    
    const infoBlocks = document.querySelectorAll('.info-block');
    if (infoBlocks.length >= 4) {
        infoBlocks[0].querySelector('p').textContent = project.type;
        infoBlocks[1].querySelector('p').textContent = project.location;
        infoBlocks[2].querySelector('p').textContent = project.scope;
        infoBlocks[3].querySelector('p').textContent = project.completion;
    }
    
    const overviewDiv = document.querySelector('.project-overview-content');
    if (overviewDiv && project.description) {
        overviewDiv.innerHTML = project.description.map(p => `<p>${p}</p>`).join('');
    }
    
    const gallery = document.querySelector('.project-gallery');
    if (gallery && project.gallery) {
        gallery.innerHTML = project.gallery.map(img => `<div class="gallery-image fade-in"><img data-src="${img}" alt="${project.title}" loading="lazy"></div>`).join('');
    }
    
    const details = document.querySelector('.details-grid');
    if (details && project.features) {
        const mid = Math.ceil(project.features.length / 2);
        details.innerHTML = `<ul>${project.features.slice(0, mid).map(f => `<li>${f}</li>`).join('')}</ul><ul>${project.features.slice(mid).map(f => `<li>${f}</li>`).join('')}</ul>`;
    }
    
    lazyLoadImages();
}

document.addEventListener('DOMContentLoaded', async function() {
    const featuredContainer = document.getElementById('featured-projects');
    if (featuredContainer) await renderFeaturedProjects(featuredContainer, 3);
    
    const projectsContainer = document.getElementById('all-projects');
    if (projectsContainer) await renderProjectsGrid(projectsContainer);
    
    if (document.querySelector('.project-detail-hero')) {
        const urlParts = window.location.pathname.split('/');
        const slug = urlParts[urlParts.length - 1].replace('.html', '');
        await renderProjectDetail(slug);
    }
});

window.CMS = { loadProjects, renderProjectsGrid, renderFeaturedProjects, renderProjectDetail };
