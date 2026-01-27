document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOMENTUM SCROLLING (Simplified Vanilla Implementation) ---
    // User requested structure similar to GSAP ScrollSmoother
    const body = document.body;
    const main = document.getElementById('smooth-wrapper');
    const content = document.getElementById('smooth-content');

    let sy = 0;
    let dy = 0;

    // Only enable on desktop for performance/UX (Native scroll is better on mobile)
    if (window.innerWidth > 1024) {
        body.style.height = content.clientHeight + 'px';
        main.style.position = 'fixed';
        main.style.top = 0;
        main.style.left = 0;
        main.style.width = '100%';
        main.style.height = '100%';

        window.addEventListener('scroll', () => {
            sy = window.scrollY;
        });

        window.addEventListener('resize', () => {
            body.style.height = content.clientHeight + 'px';
        });

        function render() {
            // Linear interpolation for smooth momentum
            dy = (1 - 0.08) * dy + 0.08 * sy;
            const diff = Math.abs(sy - dy);

            // Optimization: Snap if close enough
            if (diff < 0.1) dy = sy;

            // Translate the content
            // Using translate3d for hardware acceleration
            main.style.transform = `translate3d(0, -${dy}px, 0)`;

            requestAnimationFrame(render);
        }
        render();
    } else {
        // Fallback for mobile
        main.style.position = 'relative';
    }


    // --- 2. TEXT SWAP INTERACTION (Requested "Kritrima" Effect) ---
    const swapEl = document.getElementById("sans-eng");
    if (swapEl) {
        let isSwapped = 0;

        swapEl.onmouseover = () => {
            swapEl.innerText = `ARTIFICIAL INTELLIGENCE`;
            // Add flashlight or glow effect specifically here if wanted
            swapEl.style.color = "var(--accent-color)";
            swapEl.style.webkitTextStroke = "0px";
        };

        swapEl.onmouseout = () => {
            swapEl.innerText = `KRITRIMA BUDDHIMATTĀ`;
            swapEl.style.color = "transparent";
            swapEl.style.webkitTextStroke = "1px rgba(255,255,255,0.5)";
        };

        swapEl.onclick = () => {
            // Toggle persistent state on click
            if (isSwapped === 0) {
                swapEl.innerText = `ARTIFICIAL INTELLIGENCE`;
                isSwapped = 1;
            } else {
                swapEl.innerText = `KRITRIMA BUDDHIMATTĀ`;
                isSwapped = 0;
            }
        };
    }


    // --- 3. FLASHLIGHT TEXT & CURSOR ---
    const cursorGlow = document.getElementById('cursor-glow');
    const flashlightTexts = document.querySelectorAll('.flashlight-text');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Move global cursor spotlight
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
        cursorGlow.style.opacity = '1';

        // Update Flashlight Text
        flashlightTexts.forEach(text => {
            const rect = text.getBoundingClientRect();
            // Since we are transforming the parent container with momentum scroll, 
            // getBoundingClientRect might be affected. However, since 'e.clientY' is viewport based 
            // and getBoundingClientRect is viewport based, it should mostly cancel out correctly 
            // even with the transform.

            const x = mouseX - rect.left;
            const y = mouseY - rect.top;

            text.style.setProperty('--x', x + 'px');
            text.style.setProperty('--y', y + 'px');
        });
    });


    // --- 4. CANVAS PARTICLES ---
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    // Config
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    const connectionDistance = 150;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
            this.color = 'rgba(0, 212, 255, ' + (Math.random() * 0.5 + 0.1) + ')';
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            for (let j = i; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < connectionDistance) {
                    ctx.beginPath();
                    let opacity = 1 - (distance / connectionDistance);
                    ctx.strokeStyle = 'rgba(0, 212, 255,' + (opacity * 0.15) + ')';
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateParticles);
    }
    initParticles();
    animateParticles();


    // --- 5. INTERSECTION OBSERVER (Fade-in) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section, .fade-in, .testimonial-card').forEach(section => {
        observer.observe(section);
    });

    // --- 6. TYPEWRITER EFFECT ---
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const sourceText = document.getElementById('typing-source').textContent;
        let charIndex = 0;
        function typeWriter() {
            if (charIndex < sourceText.length) {
                typingText.textContent += sourceText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 30);
            }
        }
        setTimeout(typeWriter, 500);
    }

    // --- 7. BACK TO TOP ---
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
