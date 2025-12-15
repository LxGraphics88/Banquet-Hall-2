document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        // Add a 'scrolled' class to the nav after scrolling 50px
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Simple smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});