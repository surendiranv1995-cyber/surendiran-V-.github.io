// Smooth scroll animation for links
document.addEventListener('DOMContentLoaded', function() {
    // Add typing effect to the main title
    const title = document.querySelector('h1');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 500);
    
    // Add pulse effect to contact links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
        });
        
        link.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
});

// Add pulse animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto-advance slideshow every 4 seconds
setInterval(() => {
    changeSlide(1);
}, 4000);

// Create fireflies
function createFireflies() {
    const container = document.querySelector('.fireflies');
    for (let i = 0; i < 12; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.top = Math.random() * 100 + '%';
        firefly.style.animationDelay = Math.random() * 8 + 's';
        container.appendChild(firefly);
    }
}

// Create sparkles
function createSparkles() {
    const container = document.querySelector('.sparkles');
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 6 + 's';
        container.appendChild(sparkle);
    }
}

// Initialize effects
createFireflies();
createSparkles();

// Split text animation
function splitTextAnimation() {
    const splitElements = document.querySelectorAll('.split-text');
    splitElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${index * 0.1}s`;
            element.appendChild(span);
        });
    });
}

// Fade word by word animation
function fadeWordByWord() {
    const fadeElements = document.querySelectorAll('.fade-word');
    fadeElements.forEach(element => {
        const words = element.textContent.split(' ');
        element.innerHTML = '';
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.animationDelay = `${index * 0.3}s`;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.classList.add('fade-word');
            element.appendChild(span);
        });
    });
}

// Initialize text animations
splitTextAnimation();
fadeWordByWord();

// Enhanced ripple effect
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to buttons
document.querySelectorAll('.ripple-btn').forEach(btn => {
    btn.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);