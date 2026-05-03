function renderGallery() {
    const gallery = document.getElementById('gallery');

    if (!gallery || !projects) return;

    gallery.innerHTML = projects.map(project => `
        <a href="${project.link}" class="gallery-item">
            <div class="gallery-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%22%23ddd%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22%3EImage not found%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="gallery-content">
                <h3>${project.title}</h3>
            </div>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderGallery);
