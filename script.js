// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Hero image carousel
const jewelryItems = document.querySelectorAll('.jewelry-item');
let currentItem = 0;

function nextItem() {
    jewelryItems[currentItem].classList.remove('active');
    currentItem = (currentItem + 1) % jewelryItems.length;
    jewelryItems[currentItem].classList.add('active');
}

// Auto-rotate hero images every 4 seconds
setInterval(nextItem, 4000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.collection-card, .product-card, .about-content, .contact-content');
    animateElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
});

// Product card interactions
document.querySelectorAll('.product-card').forEach(card => {
    const wishlistBtn = card.querySelector('.wishlist');
    const addToCartBtn = card.querySelector('.add-to-cart');
    const quickViewBtn = card.querySelector('.quick-view');

    // Wishlist functionality
    wishlistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        wishlistBtn.style.color = wishlistBtn.style.color === 'white' ? '#d4af37' : 'white';
        wishlistBtn.style.background = wishlistBtn.style.background === 'rgb(212, 175, 55)' ? 'transparent' : '#d4af37';
        
        // Add animation
        wishlistBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            wishlistBtn.style.transform = 'scale(1)';
        }, 200);
    });

    // Add to cart functionality
    addToCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const originalText = addToCartBtn.textContent;
        addToCartBtn.textContent = 'Added!';
        addToCartBtn.style.background = '#28a745';
        
        setTimeout(() => {
            addToCartBtn.textContent = originalText;
            addToCartBtn.style.background = '#d4af37';
        }, 2000);
    });

    // Quick view functionality
    quickViewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // You can implement a modal here
        alert('Quick view feature coming soon!');
    });
});

// Collection card interactions
document.querySelectorAll('.collection-card').forEach(card => {
    const btn = card.querySelector('.collection-btn');
    
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const collectionName = card.querySelector('h3').textContent;
        alert(`Viewing ${collectionName} - Feature coming soon!`);
    });
});

// Contact form functionality
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = '#28a745';
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '#d4af37';
                submitBtn.disabled = false;
            }, 3000);
        }, 2000);
    });
}

// Newsletter form functionality
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        const submitBtn = newsletterForm.querySelector('button');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;
        
        // Simulate subscription
        setTimeout(() => {
            submitBtn.textContent = 'Subscribed!';
            submitBtn.style.background = '#28a745';
            newsletterForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '#d4af37';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// CTA button functionality
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const collectionsSection = document.querySelector('#collections');
        collectionsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Learn more button functionality
const learnMoreBtn = document.querySelector('.learn-more-btn');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
        alert('Learn more about our story and craftsmanship!');
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Search functionality (placeholder)
document.querySelector('.fa-search').addEventListener('click', () => {
    const searchTerm = prompt('Enter your search term:');
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
    }
});

// Shopping bag functionality (placeholder)
document.querySelector('.fa-shopping-bag').addEventListener('click', () => {
    alert('Shopping cart feature coming soon!');
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// Add hover effects to social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #d4af37, #b8941f);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
};

// Initialize scroll progress
createScrollProgress();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Add touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next hero image
            nextItem();
        } else {
            // Swipe right - previous hero image
            jewelryItems[currentItem].classList.remove('active');
            currentItem = currentItem === 0 ? jewelryItems.length - 1 : currentItem - 1;
            jewelryItems[currentItem].classList.add('active');
        }
    }
}

// Performance optimization - lazy loading for images
const lazyImages = document.querySelectorAll('img[src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src; // Trigger load
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// Add loading state to the page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add entrance animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Add error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
    });
});

console.log('Luxe Jewels website loaded successfully! 🎉'); 