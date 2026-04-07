// Smooth scrolling for any anchor links (if you add a menu later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple form handling (console log for now)
const submitBtn = document.querySelector('.submit-btn');
if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Booking inquiry submitted, connect this to a form service like Formspree later');
        alert('Thanks for your inquiry! We will get back to you within 24 hours.');
    });
}

// Video button placeholder actions
const videoBtns = document.querySelectorAll('.video-btn');
videoBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Video link clicked, replace with actual YouTube/SoundCloud URLs');
        alert('🚀 Add your actual YouTube, SoundCloud, or Spotify links here!');
    });
});

// Gallery placeholder click
const galleryItems = document.querySelectorAll('.gallery-placeholder');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log('Gallery image placeholder, replace with actual photos');
    });
});

// Add a subtle scroll animation for sections
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});