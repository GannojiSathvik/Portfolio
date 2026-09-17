/* ============================================================
   GANNOJI SATHVIK — PORTFOLIO SCRIPT
   GSAP + Lenis + Custom Cursor + Filtering + Dark Mode
   ============================================================ */

// ─────────────────────────────────────────
// DOM READY
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    // ── GSAP Plugin Register ──────────────
    gsap.registerPlugin(ScrollTrigger);

    // ── Lenis Smooth Scroll ──────────────
    // lerp follows the wheel continuously; a fixed duration made every scroll trail behind
    const lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Browsers restore the old scroll position after load, overriding this
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });

    // ── Scroll Helpers ────────────────────
    // The fixed header is ~112px tall, so every in-page jump stops just below it.
    const scrollToSection = (target, duration = 1.4) =>
        lenis.scrollTo(target, { offset: -112, duration });

    // The menu and the modal can each hold the lock; scrolling resumes once both let go.
    // Lenis drives the scrolling, so it has to be stopped too — body overflow alone won't hold it.
    const scrollLocks = new Set();
    const lockScroll = owner => {
        scrollLocks.add(owner);
        lenis.stop();
        document.body.style.overflow = 'hidden';
    };
    const unlockScroll = owner => {
        scrollLocks.delete(owner);
        if (scrollLocks.size) return;
        lenis.start();
        document.body.style.overflow = '';
    };

    buildProjectMarquee();

    // ── Page Loader ───────────────────────
    const loader = document.getElementById('loader');
    const loaderFill = document.querySelector('.loader-fill');
    // Build the hero entrance now (paused) so its starting state is applied while the
    // loader still covers the page; otherwise the hero shows, vanishes, then fades back in.
    const heroIntro = initHeroAnimation();
    if (loader) {
        gsap.to(loaderFill, {
            scaleX: 1, duration: 1.2, ease: 'power2.inOut',
            onComplete: () => {
                gsap.to(loader, {
                    yPercent: -100, duration: 0.8, ease: 'power4.inOut',
                    onComplete: () => {
                        loader.style.display = 'none';
                        document.body.classList.remove('loading');
                    }
                });
                gsap.delayedCall(0.3, () => heroIntro.play());
            }
        });
    } else {
        heroIntro.play();
    }

    // ── Hover Cursor Ring ──────────────────
    // The normal pointer stays; a thin ring follows it and appears only over clickable things.
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const cursor = document.getElementById('cursor');
        gsap.set(cursor, { scale: 0.5 });
        const cursorX = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3.out' });
        const cursorY = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3.out' });
        document.addEventListener('mousemove', e => { cursorX(e.clientX); cursorY(e.clientY); }, { passive: true });

        const hoverEls = document.querySelectorAll('a, button, .project-card, .project-pill, .filter-btn, .floating-sphere');
        hoverEls.forEach(el => {
            el.addEventListener('mouseenter', () => gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.35, ease: 'power3.out', overwrite: 'auto' }));
            el.addEventListener('mouseleave', () => gsap.to(cursor, { opacity: 0, scale: 0.5, duration: 0.25, ease: 'power2.in', overwrite: 'auto' }));
        });
    }

    // ── Scroll Progress Bar + Header State ──
    // Both read Lenis's own scroll values, so there's no layout read per frame.
    const progressBar = document.getElementById('scroll-progress');
    const header = document.getElementById('main-header');
    lenis.on('scroll', ({ scroll, progress }) => {
        if (progressBar) progressBar.style.transform = `scaleX(${progress || 0})`;
        if (header) header.classList.toggle('scrolled', scroll > 80);
    });

    // ── Hamburger Navigation ──────────────
    const menuToggle = document.getElementById('menu-toggle');
    const navPanel = document.getElementById('nav-panel');
    const navClose = document.getElementById('nav-close');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    const openNav = () => { navPanel.classList.add('active'); lockScroll('nav'); };
    const closeNav = () => { navPanel.classList.remove('active'); unlockScroll('nav'); };

    if (menuToggle) menuToggle.addEventListener('click', openNav);
    if (navClose) navClose.addEventListener('click', closeNav);
    if (navOverlay) navOverlay.addEventListener('click', closeNav);
    navLinks.forEach(l => l.addEventListener('click', closeNav));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && navPanel.classList.contains('active')) closeNav();
    });

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
            if (target) scrollToSection(target);
        });
    });

    // ── Scroll Indicator Click ────────────
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const about = document.getElementById('about');
            if (about) scrollToSection(about, 1.2);
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
            gsap.to(heroTitle, { color: 'var(--text-primary)', duration: 0.3, clearProps: 'color' });
            heroTitle.innerHTML = 'GANNOJI<br>SATHVIK';
        });
    }

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

    // Everything the modal shows comes from the project's card.
    const openModal = (card) => {
        if (!card || !modal) return;
        const details = card.querySelector('template.project-details').content;
        if (modalNum) modalNum.textContent = card.querySelector('.project-num').textContent;
        if (modalTitle) modalTitle.textContent = card.querySelector('.project-card-title').textContent;
        if (modalDesc) modalDesc.textContent = details.querySelector('p').textContent;
        if (modalTech) modalTech.replaceChildren(...[...details.querySelectorAll('li')].map(li => {
            const tag = document.createElement('span');
            tag.textContent = li.textContent;
            return tag;
        }));
        if (modalGithub) modalGithub.href = card.querySelector('.project-link').getAttribute('href');
        modal.classList.add('active');
        lockScroll('modal');
    };
    const closeModal = () => {
        if (modal) modal.classList.remove('active');
        unlockScroll('modal');
    };

    document.querySelectorAll('.project-expand').forEach(el => {
        el.addEventListener('click', () => openModal(el.closest('.project-card')));
    });
    document.querySelectorAll('.project-pill').forEach(el => {
        el.addEventListener('click', () =>
            openModal(document.querySelector(`.project-card[data-project="${el.dataset.project}"]`)));
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
    const tl = gsap.timeline({ paused: true });
    const ease = 'expo.out';

    tl.from('.hero-role-tag', { opacity: 0, y: 20, duration: 0.8, ease })
        .from('.hero-tagline', { opacity: 0, y: 30, duration: 1, ease }, '-=0.5')
        .addLabel('stats', '-=0.6')
        .from('.hero-stat', { opacity: 0, y: 20, duration: 0.7, stagger: 0.12, ease }, 'stats')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.6, ease }, '-=0.4')
        .from('.hero-huge-title', { opacity: 0, y: 50, duration: 1.2, ease }, '-=0.9')
        // opacity only: the arrow's CSS bounce animation owns its transform
        .from('.hero-scroll-indicator', { opacity: 0, duration: 0.6, ease }, '-=0.3')
        .from('.logo', { opacity: 0, x: -20, duration: 0.6, ease }, 0.2)
        .from('.header-right', { opacity: 0, x: 20, duration: 0.6, ease }, 0.2)
        .add(countUpHeroStats(), 'stats');
    return tl;
}

// Counts each hero stat up from 0: blurred while it's moving fast, sharpening as it
// slows, then a brief accent glow when it lands. Runs inside the hero timeline so it
// starts only after the loader has gone, on every page load.
function countUpHeroStats() {
    const tl = gsap.timeline();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return tl.set('.hero-stat .stat-plus', { opacity: 1 });
    }
    const duration = 3;
    const accentRgb = getComputedStyle(document.body).getPropertyValue('--accent-rgb').trim() || '255, 255, 255';
    document.querySelectorAll('.stat-val[data-count]').forEach((el, i) => {
        const target = parseInt(el.dataset.count, 10);
        const plus = el.parentElement.querySelector('.stat-plus');
        const counter = { value: 0 };
        const start = i * 0.2;
        // reserve the final width so the "+" doesn't shift as digits are added
        el.style.minWidth = `${String(target).length}ch`;
        el.textContent = 0;

        tl.to(counter, {
            value: target,
            duration,
            ease: 'power2.out',
            onUpdate: () => {
                const shown = Math.round(counter.value);
                if (el.textContent !== String(shown)) el.textContent = shown;
            }
        }, start)
            .fromTo(el, { filter: 'blur(6px)', opacity: 0.5 },
                { filter: 'blur(0px)', opacity: 1, duration: duration * 0.8, ease: 'power2.out', clearProps: 'filter' }, start)
            .to(el, {
                textShadow: `0 0 18px rgba(${accentRgb}, 0.6)`,
                duration: 0.35, ease: 'power2.out',
                yoyo: true, repeat: 1
            }, start + duration - 0.25);
        if (plus) {
            tl.fromTo(plus, { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(3)' }, start + duration - 0.25);
        }
    });
    return tl;
}

// Fills the Focus-section marquee with one pill per project card. The set is repeated
// 4x so it always overflows the viewport, then the whole run is doubled so the CSS
// translateX(-50%) loop is seamless.
function buildProjectMarquee() {
    const track = document.querySelector('.projects-scroll-content');
    if (!track) return;
    const pills = [...document.querySelectorAll('.project-card[data-pill]')].map(card => {
        const pill = document.createElement('button');
        pill.className = 'project-pill';
        pill.dataset.project = card.dataset.project;
        const label = document.createElement('span');
        label.textContent = card.dataset.pill;
        pill.append(label);
        return pill;
    });
    const half = Array.from({ length: 4 }, () => pills.map(p => p.cloneNode(true))).flat();
    track.append(...half, ...half.map(p => p.cloneNode(true)));
}
