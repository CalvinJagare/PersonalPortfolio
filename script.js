const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = `rgba(6, 182, 212, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach(particleB => {
            const dx = particleA.x - particleB.x;
            const dy = particleA.y - particleB.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - distance / 100)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particleA.x, particleA.y);
                ctx.lineTo(particleB.x, particleB.y);
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

initParticles();
animateParticles();

const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.dataset.section;
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > window.innerHeight) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });

    letter.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
});

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            if (entry.target.style.transform) {
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

document.querySelectorAll('.about-card, .contact-grid').forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.8s ease';
    observer.observe(el);
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.querySelector('.button-text').textContent;
        const formData = new FormData(contactForm);

        // Show loading state
        submitButton.querySelector('.button-text').textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                submitButton.querySelector('.button-text').textContent = 'Sent! ✓';
                submitButton.style.borderColor = '#10b981';
                submitButton.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.4)';
                contactForm.reset();

                setTimeout(() => {
                    submitButton.querySelector('.button-text').textContent = originalText;
                    submitButton.style.borderColor = '';
                    submitButton.style.boxShadow = '';
                    submitButton.disabled = false;
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            submitButton.querySelector('.button-text').textContent = 'Error! Try again';
            submitButton.style.borderColor = '#ef4444';
            submitButton.style.boxShadow = '0 0 30px rgba(239, 68, 68, 0.4)';

            setTimeout(() => {
                submitButton.querySelector('.button-text').textContent = originalText;
                submitButton.style.borderColor = '';
                submitButton.style.boxShadow = '';
                submitButton.disabled = false;
            }, 3000);
        }
    });
}

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const number = this.querySelector('.stat-number');
        number.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseleave', function() {
        const number = this.querySelector('.stat-number');
        number.style.transform = 'scale(1)';
    });
});

const terminalBody = document.querySelector('.terminal-body');
if (terminalBody) {
    const codeLines = terminalBody.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-10px)';

        setTimeout(() => {
            line.style.transition = 'all 0.3s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

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

navButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(6, 182, 212, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

const nameTitle = document.querySelector('.name-title');
if (nameTitle) {
    setInterval(() => {
        if (Math.random() > 0.95) { 
            nameTitle.style.textShadow = '2px 2px #ff00de, -2px -2px #00fff9';
            setTimeout(() => {
                nameTitle.style.textShadow = 'none';
            }, 50);
        }
    }, 3000);
}

console.log('%c🚀 Portfolio Loaded! ', 'background: linear-gradient(135deg, #06b6d4, #a855f7); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold;');
console.log('%cWant to see the code? Check out the GitHub repo!', 'color: #06b6d4; font-size: 12px;');
