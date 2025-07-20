// Mintaro Landing Page JavaScript
class MintaroApp {
    constructor() {
        this.logoStage = document.getElementById('logoStage');
        this.comingSoonStage = document.getElementById('comingSoonStage');
        this.letters = document.querySelectorAll('.letter');
        this.animateElements = document.querySelectorAll('.animate-element');
        
        this.init();
    }

    init() {
        // Start logo animation after a brief delay
        setTimeout(() => {
            this.startLogoAnimation();
        }, 500);
    }

    startLogoAnimation() {
        // Animate letters one by one
        this.letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('visible');
            }, index * 300);
        });

        // After all letters are visible, wait then transition to coming soon
        const totalAnimationTime = this.letters.length * 300 + 1500;
        setTimeout(() => {
            this.transitionToComingSoon();
        }, totalAnimationTime);
    }

    transitionToComingSoon() {
        // Fade out logo stage
        this.logoStage.classList.remove('active');
        
        // Fade in coming soon stage
        setTimeout(() => {
            this.comingSoonStage.classList.add('active');
            this.startComingSoonAnimation();
        }, 300);
    }

    startComingSoonAnimation() {
        // Animate elements with their specified delays
        this.animateElements.forEach(element => {
            const delay = parseInt(element.dataset.delay) || 0;
            setTimeout(() => {
                element.style.animationDelay = '0ms';
                element.style.opacity = '1';
            }, delay);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MintaroApp();
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const cursor = { x: e.clientX, y: e.clientY };
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Subtle parallax effect for decorative dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        const offsetX = (cursor.x - centerX) * (0.01 + index * 0.005);
        const offsetY = (cursor.y - centerY) * (0.01 + index * 0.005);
        dot.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${dot.style.transform.includes('scale') ? dot.style.transform.match(/scale\(([\d.]+)\)/)[1] : 1})`;
    });
});

// Add click effect to the main title
document.addEventListener('click', (e) => {
    if (e.target.closest('.main-title')) {
        const title = e.target.closest('.main-title');
        title.style.transform = 'scale(1.05)';
        setTimeout(() => {
            title.style.transform = 'scale(1)';
        }, 200);
    }
});