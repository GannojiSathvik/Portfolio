/* ============================================================
   GANNOJI SATHVIK — PORTFOLIO SCRIPT
   GSAP + Lenis + Custom Cursor + Filtering + Dark Mode
   ============================================================ */

// ─────────────────────────────────────────
// PROJECT DATA
// ─────────────────────────────────────────
const projectData = {
    1: {
        num: '001',
        title: 'AUTOMATED WEB INTERACTION BOT',
        desc: 'Developed a high-frequency automation script to benchmark browser interaction speeds on dynamic web platforms. Implemented DOM parsing with BeautifulSoup to extract real-time text data and simulate human input events. Optimized script execution to achieve stable simulated typing speeds of 150+ WPM with <10ms latency.',
        tech: ['PYTHON', 'SELENIUM', 'BEAUTIFULSOUP', 'HTML5', 'CSS3'],
        github: '#'
    },
    2: {
        num: '002',
        title: 'AI RED TEAM FRAMEWORK',
        desc: 'Built an automated Red Team framework using DeepSeek-R1, identifying 15+ critical security vulnerabilities in Llama-3 models without human intervention. Implemented Visual Prompt Injection and RAG Poisoning attacks using Flux.1, exposing gaps in standard multimodal safety filters. Optimized system performance using MFlux and 4-bit quantization, reducing memory usage by 60%.',
        tech: ['PYTHON', 'DEEPSEEK-R1', 'LLAMA-3', 'FLUX.1', 'PYTORCH', 'MLX'],
        github: '#'
    },
    3: {
        num: '003',
        title: 'INTELLIGENT CLOUD STORAGE SYSTEM',
        desc: 'Developed a cloud-based file-sharing system inspired by Google Drive. Implemented secure file storage and access using AWS services. Designed the system to scale automatically based on user demand. Deployed backend services on AWS EC2 using Docker containers to ensure high availability.',
        tech: ['PYTHON', 'AWS EC2', 'AWS S3', 'CLOUDWATCH', 'DOCKER', 'SCIKIT-LEARN'],
        github: '#'
    }
};

// ─────────────────────────────────────────
// DOM READY
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    // ── GSAP Plugin Register ──────────────
    gsap.registerPlugin(ScrollTrigger);

    // ── Lenis Smooth Scroll ──────────────
    const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // ── Page Loader ───────────────────────
    const loader = document.getElementById('loader');
    const loaderFill = document.querySelector('.loader-fill');
    if (loader) {
        gsap.to(loaderFill, {
            width: '100%', duration: 1.2, ease: 'power2.inOut',
            onComplete: () => {
                gsap.to(loader, {
                    yPercent: -100, duration: 0.8, ease: 'power4.inOut',
                    onComplete: () => {
                        loader.style.display = 'none';
                        document.body.classList.remove('loading');
                        initHeroAnimation();
                    }
                });
            }
        });
    } else {
        initHeroAnimation();
    }

    // ── Custom Cursor ──────────────────────
    if (window.innerWidth > 768) {
        const cursor = document.getElementById('cursor');
        const ball = document.getElementById('ball');
        let cx = 0, cy = 0, bx = 0, by = 0;

        document.addEventListener('mousemove', e => {
            cx = e.clientX; cy = e.clientY;
            gsap.to(cursor, { x: cx, y: cy, duration: 0.1, ease: 'none' });
        });

        // Lag ball slightly behind cursor
        gsap.ticker.add(() => {
            bx += (cx - bx) * 0.08;
            by += (cy - by) * 0.08;
            gsap.set(ball, { x: bx, y: by });
        });

        // Cursor scale on interactive elements
        const hoverEls = document.querySelectorAll('a, button, .project-card, .project-pill, .filter-btn, .floating-sphere');
        hoverEls.forEach(el => {
            el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 4, duration: 0.25, ease: 'power4' }));
            el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, duration: 0.25, ease: 'power4' }));
        });
    }

    // ── Scroll Progress Bar ───────────────
    const progressBar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (progressBar) progressBar.style.width = pct + '%';
    });

    // ── Header Scroll Effect ──────────────
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 80);
        }
    });

    // ── Hamburger Navigation ──────────────
    const menuToggle = document.getElementById('menu-toggle');
    const navPanel = document.getElementById('nav-panel');
    const navClose = document.getElementById('nav-close');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    const openNav = () => { navPanel.classList.add('active'); document.body.style.overflow = 'hidden'; };
    const closeNav = () => { navPanel.classList.remove('active'); document.body.style.overflow = ''; };

    if (menuToggle) menuToggle.addEventListener('click', openNav);
    if (navClose) navClose.addEventListener('click', closeNav);
    if (navOverlay) navOverlay.addEventListener('click', closeNav);
    navLinks.forEach(l => l.addEventListener('click', closeNav));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

    // ── Nav Link Stagger on Open ──────────
    const navItems = document.querySelectorAll('.nav-item');
    const observer1 = new MutationObserver(() => {
        if (navPanel.classList.contains('active')) {
            gsap.fromTo(navItems,
                { x: 40, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power3.out', delay: 0.15 }
            );
        }
    });
    if (navPanel) observer1.observe(navPanel, { attributes: true, attributeFilter: ['class'] });

    // ── Smooth Scroll for Anchor Links ────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) lenis.scrollTo(target, { offset: -80, duration: 1.4 });
        });
    });

    // ── Scroll Indicator Click ────────────
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const about = document.getElementById('about');
            if (about) lenis.scrollTo(about, { offset: -80, duration: 1.2 });
        });
    }

    // ── Hero Title Hover ──────────────────
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.addEventListener('mouseenter', () => {
            gsap.to(heroTitle, { color: 'var(--accent-color)', duration: 0.3 });
            heroTitle.innerHTML = 'FULL-STACK<br>DEVELOPER';
        });
        heroTitle.addEventListener('mouseleave', () => {
            gsap.to(heroTitle, { color: '#ffffff', duration: 0.3 });
            heroTitle.innerHTML = 'GANNOJI<br>SATHVIK';
        });
    }

    // ── Hero Count-up Stats ───────────────
    document.querySelectorAll('.stat-val[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        let current = 0;
        const step = () => {
            current++;
            el.textContent = current;
            if (current < target) requestAnimationFrame(step);
        };
        setTimeout(step, 1200);
    });

    // ── Floating Sphere ───────────────────
    const sphere = document.getElementById('floating-sphere');
    if (sphere) {
        sphere.addEventListener('click', () => { window.location.href = 'mailto:gannojisathvik24@gmail.com'; });
        sphere.addEventListener('keydown', e => { if (e.key === 'Enter') sphere.click(); });
    }

    // ── Dark / Light Mode ─────────────────
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') document.body.classList.add('light-mode');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        });
    }

    // ── Project Modal ─────────────────────
    const modal = document.getElementById('project-modal');
    const modalNum = document.getElementById('modal-num');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTech = document.getElementById('modal-tech');
    const modalGithub = document.getElementById('modal-github');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    const openModal = (id) => {
        const p = projectData[id];
        if (!p || !modal) return;
        if (modalNum) modalNum.textContent = p.num;
        if (modalTitle) modalTitle.textContent = p.title;
        if (modalDesc) modalDesc.textContent = p.desc;
        if (modalTech) modalTech.innerHTML = p.tech.map(t => `<span>${t}</span>`).join('');
        if (modalGithub) modalGithub.href = p.github;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    const closeModal = () => {
        if (modal) modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.project-expand, .project-pill').forEach(el => {
        el.addEventListener('click', () => openModal(el.dataset.project));
    });
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeModal();
    });

    // ── Project Filtering ─────────────────
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const cats = (card.dataset.category || '').split(' ');
                const show = filter === 'all' || cats.includes(filter);
                if (show) {
                    card.classList.remove('hidden');
                    gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' });
                } else {
                    gsap.to(card, {
                        opacity: 0, y: 10, duration: 0.3, ease: 'power2.in',
                        onComplete: () => card.classList.add('hidden')
                    });
                }
            });
        });
    });

    // ── Stagger Reveal Observer ───────────
    const staggerEls = document.querySelectorAll('.stagger-item');
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('in-view'), i * 80);
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    staggerEls.forEach(el => revealObs.observe(el));

    // ── Background Text Reveal ────────────
    const bgTextObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.bg-text-line').forEach(el => bgTextObs.observe(el));

    // ── Skill Bar Animation ───────────────
    const skillBarsObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                    const w = bar.dataset.width || 0;
                    gsap.to(bar, { width: w + '%', duration: 1.4, ease: 'power3.out', delay: 0.2 });
                });
                skillBarsObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.skill-category').forEach(el => skillBarsObs.observe(el));

    // ── GSAP ScrollTrigger — Section Parallax ──
    if (window.innerWidth > 768) {
        // Floating orb parallax
        const floatingOrb = document.querySelector('.floating-orb');
        if (floatingOrb) {
            gsap.to(floatingOrb, {
                y: -80,
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top bottom', end: 'bottom top',
                    scrub: 1.5
                }
            });
        }

        // Shards parallax
        document.querySelectorAll('.shard').forEach((shard, i) => {
            gsap.to(shard, {
                y: (i % 2 === 0 ? -60 : 60) * (i * 0.15 + 0.5),
                scrollTrigger: {
                    trigger: '#hero',
                    start: 'top top', end: 'bottom top',
                    scrub: 2
                }
            });
        });
    }

    // ── Contact Form ──────────────────────
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            // Let native mailto action proceed — just add visual feedback
            const btn = form.querySelector('.form-submit span');
            if (btn) {
                btn.textContent = 'SENDING…';
                setTimeout(() => { btn.textContent = 'SEND MESSAGE'; }, 2000);
            }
        });
    }

});

// ─────────────────────────────────────────
// HERO ENTRANCE ANIMATION
// ─────────────────────────────────────────
function initHeroAnimation() {
    const tl = gsap.timeline();
    const ease = 'expo.out';

    tl.from('.hero-role-tag', { opacity: 0, y: 20, duration: 0.8, ease })
        .from('.hero-tagline', { opacity: 0, y: 30, duration: 1, ease }, '-=0.5')
        .from('.hero-stat', { opacity: 0, y: 20, duration: 0.7, stagger: 0.12, ease }, '-=0.6')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.6, ease }, '-=0.4')
        .from('.hero-huge-title', { opacity: 0, y: 50, duration: 1.2, ease }, '-=0.9')
        .from('.hero-scroll-indicator', { opacity: 0, y: 20, duration: 0.6, ease }, '-=0.3')
        .from('.logo', { opacity: 0, x: -20, duration: 0.6, ease }, 0.2)
        .from('.header-right', { opacity: 0, x: 20, duration: 0.6, ease }, 0.2);
}
