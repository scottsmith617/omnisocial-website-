document.addEventListener('DOMContentLoaded', () => {
    // Form Handling
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(leadForm);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submission:', data);
            
            const button = leadForm.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = 'Request Sent!';
            button.disabled = true;
            button.style.backgroundColor = '#D4AF37'; // Match gold
            
            setTimeout(() => {
                leadForm.reset();
                button.textContent = originalText;
                button.disabled = false;
                button.style.backgroundColor = '';
                alert('Thank you! Your audit request has been received. We will be in touch within 24 hours.');
            }, 1500);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in animations on scroll
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .premium-card, .process-step, .stat-box').forEach(el => {
        el.classList.add('fade-in');
        fadeObserver.observe(el);
    });

    // Sticky Nav transition
    const header = document.querySelector('header');
    const navLogo = document.getElementById('nav-logo');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            if (navLogo) navLogo.src = 'assets/lifetwister-wordmark-dark-transparent.png';
        } else {
            header.classList.remove('scrolled');
            if (navLogo) navLogo.src = 'assets/lifetwister-wordmark-transparent.png';
        }
    });
});
