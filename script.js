document.addEventListener('DOMContentLoaded', () => {

    // --- HAMBURGER MENU ---
    const menuToggle = document.getElementById('menu-toggle');
    const navPanel = document.getElementById('nav-panel');
    const navClose = document.getElementById('nav-close');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    const openNav = () => {
        navPanel.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeNav = () => {
        navPanel.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (menuToggle) menuToggle.addEventListener('click', openNav);
    if (navClose) navClose.addEventListener('click', closeNav);
    if (navOverlay) navOverlay.addEventListener('click', closeNav);

    // Close nav when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeNav();
        });
    });

    // Close nav on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navPanel.classList.contains('active')) {
            closeNav();
        }
    });

    // --- PROJECT DATA ---
    const projectData = {
        1: {
            title: "AUTOMATED WEB INTERACTION BOT",
            desc: "Developed a high-frequency automation script to benchmark browser interaction speeds on dynamic web platforms. Implemented DOM parsing with BeautifulSoup to extract real-time text data and simulate human input events. Optimized script execution to achieve stable simulated typing speeds of 150+ WPM with <10ms latency.",
            tech: ["PYTHON", "SELENIUM", "BEAUTIFULSOUP", "HTML5", "CSS3"]
        },
        2: {
            title: "AI RED TEAM FRAMEWORK",
            desc: "Built an automated 'Red Team' framework using DeepSeek-R1, identifying 15+ critical security vulnerabilities in Llama-3 models without human intervention. Implemented Visual Prompt Injection and RAG Poisoning attacks using Flux.1, exposing gaps in standard multimodal safety filters. Optimized system performance using MFlux and 4-bit quantization, reducing memory usage by 60%.",
            tech: ["PYTHON", "DEEPSEEK-R1", "LLAMA-3", "FLUX.1", "PYTORCH", "MLX"]
        },
        3: {
            title: "INTELLIGENT CLOUD STORAGE SYSTEM",
            desc: "Developed a cloud-based file-sharing system inspired by Google Drive. Implemented secure file storage and access using AWS services. Designed the system to scale automatically based on user demand. Deployed backend services on AWS EC2 using Docker containers to ensure high availability.",
            tech: ["PYTHON", "AWS EC2", "AWS S3", "CLOUDWATCH", "DOCKER", "SCIKIT-LEARN"]
        }
    };

    // --- PROJECT MODAL ---
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTech = document.getElementById('modal-tech');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    document.querySelectorAll('.project-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const projectId = pill.dataset.project;
            const project = projectData[projectId];

            if (project) {
                modalTitle.textContent = project.title;
                modalDesc.textContent = project.desc;
                modalTech.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // --- SCROLL REVEAL ANIMATION ---
    const revealElements = document.querySelectorAll('.bg-text-line, .about-main, .about-sidebar, .projects-main-title');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- HERO TITLE HOVER EFFECT ---
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.addEventListener('mouseover', () => {
            heroTitle.innerHTML = `FULL-STACK<br>DEVELOPER`;
        });
        heroTitle.addEventListener('mouseout', () => {
            heroTitle.innerHTML = `GANNOJI<br>SATHVIK`;
        });
    }

    // --- SMOOTH SCROLL ---
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

    // Scroll arrow click
    const scrollArrow = document.querySelector('.scroll-arrow-down');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            const about = document.getElementById('about');
            if (about) {
                about.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // --- HEADER SCROLL EFFECT ---
    const header = document.querySelector('.minimal-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
        }
    });

    // --- CURSOR GLOW ---
    if (window.innerWidth > 768) {
        const glow = document.createElement('div');
        glow.style.cssText = `
            position: fixed;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            z-index: 0;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(glow);

        document.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
            glow.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });
    }

    // --- HERO ENTRANCE ANIMATION ---
    const animateHero = () => {
        const heroLeft = document.querySelector('.hero-left');
        const heroRight = document.querySelector('.hero-right');

        if (heroLeft) {
            heroLeft.style.opacity = '0';
            heroLeft.style.transform = 'translateY(30px)';

            setTimeout(() => {
                heroLeft.style.transition = 'opacity 1s ease, transform 1s ease';
                heroLeft.style.opacity = '1';
                heroLeft.style.transform = 'translateY(0)';
            }, 200);
        }

        if (heroRight) {
            heroRight.style.opacity = '0';
            heroRight.style.transform = 'translateY(30px)';

            setTimeout(() => {
                heroRight.style.transition = 'opacity 1s ease, transform 1s ease';
                heroRight.style.opacity = '1';
                heroRight.style.transform = 'translateY(0)';
            }, 400);
        }
    };

    setTimeout(animateHero, 100);

    // --- FLOATING SPHERE CLICK ---
    const floatingSphere = document.querySelector('.floating-sphere');
    if (floatingSphere) {
        floatingSphere.addEventListener('click', () => {
            window.location.href = 'mailto:gannojisathvik24@gmail.com';
        });
    }

    // --- SKILL BUBBLES - No pause on hover, keeps rotating ---
    // Hover effects handled by CSS only

    // --- PARALLAX FOR FLOATING ORB ---
    const floatingOrb = document.querySelector('.floating-orb');

    window.addEventListener('scroll', () => {
        if (floatingOrb) {
            const scrollY = window.scrollY;
            const orbOffset = scrollY * 0.1;
            floatingOrb.style.transform = `translateY(calc(-50% + ${orbOffset}px))`;
        }
    });

    // --- SIDE PILLS HOVER ---
    document.querySelectorAll('.side-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            // Could link to specific project categories
        });
    });

});
