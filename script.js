document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('lead-form');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(leadForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Form submission:', data);
            
            // Show success message
            const button = leadForm.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = 'Request Sent!';
            button.disabled = true;
            button.style.backgroundColor = '#28a745';
            
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
});
