// Animate skill bars when section comes into view
    document.addEventListener('DOMContentLoaded', function() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.setProperty('--target-width', width);
                    entry.target.style.animation = 'fillBar 2s ease-in-out forwards';
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            observer.observe(bar);
        });

        // Update copyright year
        document.getElementById('year').textContent = new Date().getFullYear();
    });