document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const servicesPricingLink = document.getElementById('services-pricing-link');
    const mobileServicesPricingLink = document.getElementById('mobile-services-pricing-link');
    const galleryLink = document.getElementById('gallery-link');
    const mobileGalleryLink = document.getElementById('mobile-gallery-link');
    const gallerySection = document.getElementById('gallery-section');
    const servicesPage = document.getElementById('services-page');
    const mainPageContent = document.querySelectorAll('body > *:not(nav):not(footer)'); // Select all direct children of body except for nav and footer.

    function showServicesPage() {
        mainPageContent.forEach(el => el.style.display = 'none');
        servicesPage.style.display = 'block';
        gallerySection.style.display = 'none';
        window.history.pushState({ page: 'services' }, 'TrustMove Events - Services & Pricing');
    }

    function showGallery() {
        mainPageContent.forEach(el => el.style.display = 'none');
        gallerySection.style.display = 'block';
        servicesPage.style.display = 'none';
        window.history.pushState({ page: 'gallery' }, 'TrustMove Events - Gallery');
    }

    function showMainPage() {
        mainPageContent.forEach(el => el.style.display = 'block');
        gallerySection.style.display = 'none';
        servicesPage.style.display = 'none';
        window.history.pushState({ page: 'main' }, 'TrustMove Events');
    }

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    servicesPricingLink.addEventListener('click', function (event) {
        event.preventDefault();
        showServicesPage();
    });
    mobileServicesPricingLink.addEventListener('click', function (event) {
        event.preventDefault();
        showServicesPage();
        mobileMenu.classList.add('hidden');
    });

    galleryLink.addEventListener('click', function (event) {
        event.preventDefault();
        showGallery();
    });

    mobileGalleryLink.addEventListener('click', function (event) {
        event.preventDefault();
        showGallery();
        mobileMenu.classList.add('hidden');
    });

    window.addEventListener('popstate', function (event) {
        if (event.state && event.state.page === 'services') {
            showServicesPage();
        } else if (event.state && event.state.page === 'gallery') {
            showGallery();
        } else {
            showMainPage();
        }
    });
});
