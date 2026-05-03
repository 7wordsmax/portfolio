(function () {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    const galleryImages = Array.from(document.querySelectorAll('.cs-gallery-item img'));
    let currentIndex = -1;

    function open(index) {
        if (index < 0 || index >= galleryImages.length) return;
        currentIndex = index;
        const img = galleryImages[currentIndex];
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || '';
        lightboxCaption.textContent = img.dataset.caption || img.alt || '';
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        updateNavVisibility();
    }

    function close() {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        currentIndex = -1;
        lightboxImage.src = '';
    }

    function step(delta) {
        const next = currentIndex + delta;
        if (next < 0 || next >= galleryImages.length) return;
        open(next);
    }

    function updateNavVisibility() {
        if (galleryImages.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            return;
        }
        prevBtn.style.visibility = currentIndex <= 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = currentIndex >= galleryImages.length - 1 ? 'hidden' : 'visible';
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => open(index));
    });

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        step(-1);
    });
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        step(1);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) close();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('is-open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
    });
})();
