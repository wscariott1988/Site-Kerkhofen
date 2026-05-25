document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    mobileBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
        mobileNav.classList.toggle('flex');
    });

    // Close mobile menu on link click
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
            mobileNav.classList.remove('flex');
        });
    });

    // 3. Parallax Effect for Hero Image
    const heroBg = document.getElementById('hero-bg');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        // Move the background image slightly down as user scrolls down
        if (scrollPosition < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        }
    });

    // 4. Scroll Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
    
    // Trigger animations for elements already in viewport on load
    setTimeout(() => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
});