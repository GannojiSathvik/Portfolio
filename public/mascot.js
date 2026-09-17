/* ============================================================
   ROBOT BUDDY — a small round robot in the corner that shows feelings.
   The body stays a simple sphere; the eyes, mouth, hops and tilts do the
   acting.

   Self-contained: builds its own markup, loads GSAP if the page lacks it,
   and touches nothing else. Pair it with the ROBOT BUDDY block in style.css.
   Moods: idle, happy, excited, curious, surprised, sleepy, sad, angry,
   shy, love. Triggers are wired in initMascot() at the bottom.
   Every so often it also plays on its own: roams around the screen,
   peeks up the edge, spins, or rides along while the page scrolls.
   Any element with [data-robot-demo] plays a showcase of every mood when
   clicked (also available as window.robotBuddy.demo(anchorElement)).
   ============================================================ */

(() => {
    const SVG_NS = 'http://www.w3.org/2000/svg';
    const INK = '#ffe7e4'; // eyes, mouth and brows: warm off-white on the red body

    // Mouth line shapes all share one path structure so GSAP can morph between them.
    const MOUTH = {
        smile: 'M60 101 Q70 107 80 101',
        flat: 'M62 103 Q70 103 78 103',
        frown: 'M61 106 Q70 99 79 106',
        pout: 'M64 105 Q70 101 76 105',
        squiggle: 'M62 103 Q66 100 70 103',
    };

    // What the face looks like in each mood.
    const FACES = {
        idle:      { eyes: 'open',   mouth: 'smile' },
        happy:     { eyes: 'happy',  open: true },
        excited:   { eyes: 'open',   open: true, eyeScale: 1.15, shine: true },
        curious:   { eyes: 'open',   o: 0.6, rightEye: 1.25 },
        surprised: { eyes: 'open',   o: 1, eyeScale: 1.3 },
        sleepy:    { eyes: 'closed', o: 0.45 },
        sad:       { eyes: 'open',   mouth: 'frown', lids: 'sad' },
        angry:     { eyes: 'open',   mouth: 'pout', lids: 'angry', flush: true },
        shy:       { eyes: 'happy',  mouth: 'squiggle', blush: true },
        love:      { eyes: 'heart',  mouth: 'smile', blush: true },
    };

    // Higher wins while a reaction is still playing.
    const PRIORITY = { angry: 5, surprised: 4, excited: 3, love: 3, sad: 3, happy: 2, shy: 2, curious: 1, sleepy: 0, idle: 0 };

    const el = (tag, attrs = {}, parent) => {
        const node = document.createElementNS(SVG_NS, tag);
        for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
        if (parent) parent.appendChild(node);
        return node;
    };

    function buildMarkup() {
        const button = document.createElement('button');
        button.className = 'robot-buddy';
        button.type = 'button';
        button.setAttribute('aria-label', 'Robot buddy — click to say hi');

        const svg = el('svg', { viewBox: '0 0 140 150', 'aria-hidden': 'true' });
        button.appendChild(svg);
        const caption = document.createElement('span');
        caption.className = 'rb-caption';
        caption.setAttribute('aria-hidden', 'true');
        button.appendChild(caption);

        const defs = el('defs', {}, svg);
        const grad = el('radialGradient', { id: 'rb-shade', cx: '38%', cy: '30%', r: '75%' }, defs);
        // Reddish glossy sphere.
        el('stop', { offset: '0%', 'stop-color': '#e0555c' }, grad);
        el('stop', { offset: '100%', 'stop-color': '#7a1220' }, grad);

        const parts = { caption };
        parts.shadow = el('ellipse', { class: 'rb-shadow', cx: 70, cy: 140, rx: 30, ry: 5 }, svg);
        // Breathing lives on its own wrapper so it never fights the body's reactions.
        parts.breath = el('g', { class: 'rb-breath' }, svg);
        parts.body = el('g', { class: 'rb-body' }, parts.breath);

        // Arm tucked behind the head; swings up to wave.
        parts.arm = el('g', { class: 'rb-arm' }, parts.body);
        el('rect', { x: 108, y: 84, width: 22, height: 11, rx: 5.5, fill: 'url(#rb-shade)' }, parts.arm);

        el('circle', { cx: 70, cy: 86, r: 46, fill: 'url(#rb-shade)' }, parts.body);
        el('circle', { cx: 70, cy: 86, r: 45.2, fill: 'none', stroke: 'rgba(255, 170, 165, 0.4)', 'stroke-width': 1.6 }, parts.body);
        parts.flush = el('circle', { cx: 70, cy: 86, r: 46, fill: '#8f0c18', opacity: 0 }, parts.body);
        el('ellipse', { cx: 54, cy: 62, rx: 14, ry: 7, fill: '#ffffff', opacity: 0.12, transform: 'rotate(-25 54 62)' }, parts.body);

        const face = el('g', { class: 'rb-face' }, parts.body);
        parts.face = face;

        parts.blush = el('g', { opacity: 0.35 }, face);
        el('ellipse', { cx: 45, cy: 96, rx: 7, ry: 3.5, fill: '#ff9aa6', opacity: 0.85 }, parts.blush);
        el('ellipse', { cx: 95, cy: 96, rx: 7, ry: 3.5, fill: '#ff9aa6', opacity: 0.85 }, parts.blush);

        // Eye sets — only one is visible at a time.
        parts.eyes = el('g', {}, face);
        parts.eyeOpen = el('g', {}, parts.eyes);
        parts.leftEye = el('g', {}, parts.eyeOpen);
        parts.rightEye = el('g', {}, parts.eyeOpen);
        el('ellipse', { cx: 54, cy: 82, rx: 6.5, ry: 9, fill: INK }, parts.leftEye);
        el('ellipse', { cx: 86, cy: 82, rx: 6.5, ry: 9, fill: INK }, parts.rightEye);
        // Glossy highlights, like classic anime eyes.
        parts.shine = el('g', {}, parts.eyeOpen);
        el('circle', { cx: 56.5, cy: 77.5, r: 2.4, fill: '#ffffff' }, parts.shine);
        el('circle', { cx: 88.5, cy: 77.5, r: 2.4, fill: '#ffffff' }, parts.shine);
        el('circle', { cx: 52, cy: 86, r: 1, fill: '#fff', opacity: 0.8 }, parts.shine);
        el('circle', { cx: 84, cy: 86, r: 1, fill: '#fff', opacity: 0.8 }, parts.shine);

        const stroke = { fill: 'none', stroke: INK, 'stroke-width': 4, 'stroke-linecap': 'round' };
        parts.eyeHappy = el('g', { opacity: 0 }, parts.eyes);
        el('path', { d: 'M47 84 Q54 74 61 84', ...stroke }, parts.eyeHappy);
        el('path', { d: 'M79 84 Q86 74 93 84', ...stroke }, parts.eyeHappy);
        parts.eyeClosed = el('g', { opacity: 0 }, parts.eyes);
        el('path', { d: 'M47 82 Q54 87 61 82', ...stroke }, parts.eyeClosed);
        el('path', { d: 'M79 82 Q86 87 93 82', ...stroke }, parts.eyeClosed);
        parts.eyeHeart = el('g', { opacity: 0 }, parts.eyes);
        const heart = 'M0 3 C0 -1 -6 -2 -6 2 C-6 5 -2 7 0 10 C2 7 6 5 6 2 C6 -2 0 -1 0 3 Z';
        el('path', { d: heart, fill: '#ff6b81', transform: 'translate(54 75) scale(1.15)' }, parts.eyeHeart);
        el('path', { d: heart, fill: '#ff6b81', transform: 'translate(86 75) scale(1.15)' }, parts.eyeHeart);

        // Cartoon brows: inner ends down for angry, up for sad.
        const brow = { ...stroke, 'stroke-width': 3.5 };
        parts.lidAngry = el('g', { opacity: 0 }, face);
        el('path', { d: 'M45 66 L62 72', ...brow }, parts.lidAngry);
        el('path', { d: 'M95 66 L78 72', ...brow }, parts.lidAngry);
        parts.lidSad = el('g', { opacity: 0 }, face);
        el('path', { d: 'M46 71 L61 65', ...brow }, parts.lidSad);
        el('path', { d: 'M94 71 L79 65', ...brow }, parts.lidSad);

        parts.mouth = el('path', { d: MOUTH.smile, fill: 'none', stroke: INK, 'stroke-width': 3.5, 'stroke-linecap': 'round' }, face);
        parts.mouthOpen = el('path', { d: 'M59 99 Q70 115 81 99 Q70 103 59 99 Z', fill: INK, opacity: 0 }, face);
        parts.mouthO = el('ellipse', { cx: 70, cy: 104, rx: 5, ry: 6, fill: INK, opacity: 0 }, face);

        // Floating symbols (manga-style), all hidden until a mood calls for them.
        // Symbols sit in a positioned wrapper; GSAP animates the inner group so it never clobbers the position.
        const placed = (x, y, rotate = 0) => el('g', { opacity: 1 }, el('g', { transform: `translate(${x} ${y}) rotate(${rotate})` }, svg));
        parts.vein = placed(104, 34, 10);
        parts.vein.setAttribute('opacity', 0);
        for (const d of ['M-9 -2.5 Q-2.5 -2.5 -2.5 -9', 'M2.5 -9 Q2.5 -2.5 9 -2.5', 'M9 2.5 Q2.5 2.5 2.5 9', 'M-2.5 9 Q-2.5 2.5 -9 2.5']) {
            el('path', { d, fill: 'none', stroke: '#ffffff', 'stroke-width': 6, 'stroke-linecap': 'round' }, parts.vein);
        }
        for (const d of ['M-9 -2.5 Q-2.5 -2.5 -2.5 -9', 'M2.5 -9 Q2.5 -2.5 9 -2.5', 'M9 2.5 Q2.5 2.5 2.5 9', 'M-2.5 9 Q-2.5 2.5 -9 2.5']) {
            el('path', { d, fill: 'none', stroke: '#ea4045', 'stroke-width': 3, 'stroke-linecap': 'round' }, parts.vein);
        }

        const text = (content, x, y, size, fill) => {
            const t = el('text', { x, y, 'font-size': size, 'font-weight': 800, fill, opacity: 0, 'text-anchor': 'middle', 'font-family': 'Outfit, sans-serif' }, svg);
            t.textContent = content;
            return t;
        };
        parts.question = text('?', 112, 40, 26, '#fafafa');
        parts.exclaim = text('!', 112, 40, 28, '#f19d38');
        parts.zzz = el('g', { opacity: 0 }, svg);
        [['z', 104, 44, 13], ['z', 114, 32, 17], ['Z', 126, 18, 21]].forEach(([c, x, y, s]) => {
            const t = el('text', { x, y, 'font-size': s, 'font-weight': 700, fill: '#c9c9d1', 'font-family': 'Outfit, sans-serif' }, parts.zzz);
            t.textContent = c;
        });
        parts.tears = [[50, 90], [90, 90]].map(([x, y]) => el('path', { d: 'M0 0 Q-4 7 0 10 Q4 7 0 0 Z', fill: '#7fc8ff', opacity: 0 }, placed(x, y)));
        parts.sweat = el('path', { d: 'M110 52 Q104 62 110 66 Q116 62 110 52 Z', fill: '#7fc8ff', opacity: 0 }, svg);
        parts.hearts = [0, 1].map(i => el('path', { d: heart, fill: '#ff6b81', opacity: 0 }, placed(100 + i * 16, 40 - i * 8)));
        const star = 'M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8 Z';
        parts.sparkles = [[20, 44], [120, 50]].map(([x, y]) => el('path', { d: star, fill: '#f19d38', opacity: 0 }, placed(x, y)));

        return { button, parts };
    }

    function initMascot() {
        if (!window.gsap) return;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const { button, parts: p } = buildMarkup();
        document.body.appendChild(button);

        gsap.set([p.body, p.arm, p.leftEye, p.rightEye, p.eyes, p.vein, ...p.hearts, ...p.sparkles, ...p.tears, p.question, p.exclaim, p.zzz, p.sweat],
            { transformOrigin: '50% 50%' });
        gsap.set([p.body, p.breath], { transformOrigin: '50% 100%' });
        gsap.set(p.arm, { svgOrigin: '110 90', rotation: 60, opacity: 0 });

        const symbols = [p.vein, p.question, p.exclaim, p.sweat, ...p.hearts, ...p.sparkles, ...p.tears];
        let mood = 'idle';
        let busyUntil = 0;
        let reaction = null;
        const lastShown = {};

        // ── Face ───────────────────────────────
        function setFace(name) {
            const f = FACES[name];
            const d = reduce ? 0 : 0.18;
            gsap.to(p.eyeOpen, { opacity: f.eyes === 'open' ? 1 : 0, duration: d });
            gsap.to(p.eyeHappy, { opacity: f.eyes === 'happy' ? 1 : 0, duration: d });
            gsap.to(p.eyeClosed, { opacity: f.eyes === 'closed' ? 1 : 0, duration: d });
            gsap.to(p.eyeHeart, { opacity: f.eyes === 'heart' ? 1 : 0, duration: d });
            gsap.to(p.eyes, { scale: f.eyeScale || 1, duration: d * 1.5, ease: 'back.out(2)' });
            gsap.to(p.rightEye, { scale: f.rightEye || 1, duration: d * 1.5, ease: 'back.out(2)' });
            gsap.to(p.shine.children, { scale: f.shine ? 1.5 : 1, transformOrigin: '50% 50%', duration: d });
            gsap.to(p.lidAngry, { opacity: f.lids === 'angry' ? 1 : 0, duration: d });
            gsap.to(p.lidSad, { opacity: f.lids === 'sad' ? 1 : 0, duration: d });
            gsap.to(p.blush, { opacity: f.blush ? 1 : 0.35, duration: d * 2 });
            gsap.to(p.flush, { opacity: f.flush ? 0.35 : 0, duration: d * 2 });
            gsap.to(p.mouth, { opacity: f.mouth ? 1 : 0, duration: d, attr: f.mouth ? { d: MOUTH[f.mouth] } : {} });
            gsap.to(p.mouthOpen, { opacity: f.open ? 1 : 0, duration: d });
            gsap.to(p.mouthO, { opacity: f.o ? 1 : 0, scale: f.o || 1, transformOrigin: '50% 50%', duration: d });
        }

        // Pops a symbol in, holds it, and floats it away.
        function popSymbol(node, { hold = 0.8, pulses = 0 } = {}) {
            const tl = gsap.timeline();
            tl.fromTo(node, { opacity: 0, scale: reduce ? 1 : 0, y: 0 },
                { opacity: 1, scale: 1, duration: reduce ? 0.15 : 0.22, ease: 'back.out(3)' });
            if (pulses && !reduce) tl.to(node, { scale: 1.25, duration: 0.12, ease: 'power1.inOut', yoyo: true, repeat: pulses * 2 - 1 });
            tl.to(node, { opacity: 0, y: reduce ? 0 : -8, duration: 0.3, ease: 'power1.in' }, `+=${hold}`);
            return tl;
        }

        // Body motion for each mood (skipped entirely with reduced motion).
        function bodyMotion(name) {
            const tl = gsap.timeline();
            if (reduce) return tl;
            switch (name) {
                case 'happy':
                    tl.to(p.body, { scaleX: 1.1, scaleY: 0.9, duration: 0.09, ease: 'power2.out' })
                        .to(p.body, { scaleX: 0.95, scaleY: 1.06, y: -14, duration: 0.2, ease: 'power2.out' })
                        .to(p.body, { scaleX: 1, scaleY: 1, y: 0, duration: 0.35, ease: 'bounce.out' });
                    break;
                case 'excited':
                    for (let i = 0; i < 3; i++) {
                        tl.to(p.body, { y: -12, rotation: i % 2 ? 8 : -8, duration: 0.14, ease: 'power2.out' })
                            .to(p.body, { y: 0, duration: 0.14, ease: 'power2.in' });
                    }
                    tl.to(p.body, { rotation: 0, duration: 0.3, ease: 'elastic.out(1, 0.4)' });
                    break;
                case 'curious':
                    tl.to(p.body, { rotation: 12, duration: 0.3, ease: 'power2.out' })
                        .to(p.body, { rotation: 0, duration: 0.5, ease: 'power2.inOut' }, '+=1.2');
                    break;
                case 'surprised':
                    tl.to(p.body, { scaleY: 0.92, scaleX: 1.05, duration: 0.08 })
                        .to(p.body, { scaleY: 1.15, scaleX: 0.92, y: -16, duration: 0.25, ease: 'back.out(3)' })
                        .to(p.body, { scaleY: 1, scaleX: 1, y: 0, duration: 0.4, ease: 'bounce.out' });
                    break;
                case 'sad':
                    tl.to(p.body, { y: 4, scaleY: 0.96, duration: 0.7, ease: 'power1.inOut' })
                        .to(p.body, { y: 0, scaleY: 1, duration: 0.7, ease: 'power1.inOut' }, '+=1.2');
                    break;
                case 'angry':
                    tl.to(p.body, { scale: 1.08, duration: 0.15, ease: 'power2.out' })
                        .to(p.body, { x: 4, duration: 0.05, repeat: 9, yoyo: true, ease: 'none' })
                        .to(p.body, { x: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
                    break;
                case 'shy':
                    tl.to(p.body, { rotation: -10, scale: 0.95, duration: 0.4, ease: 'power2.out' })
                        .to(p.body, { rotation: 0, scale: 1, duration: 0.5, ease: 'power2.inOut' }, '+=1');
                    break;
                case 'love':
                    tl.to(p.body, { scale: 1.08, duration: 0.15, ease: 'power2.out', yoyo: true, repeat: 3 });
                    break;
            }
            return tl;
        }

        function wave() {
            if (reduce) return gsap.timeline();
            return gsap.timeline()
                .set(p.arm, { opacity: 1 })
                .to(p.arm, { rotation: -70, duration: 0.25, ease: 'back.out(2)' })
                .to(p.arm, { rotation: -40, duration: 0.18, repeat: 5, yoyo: true, ease: 'sine.inOut' })
                .to(p.arm, { rotation: 60, duration: 0.3, ease: 'power2.in' })
                .set(p.arm, { opacity: 0 });
        }

        const SYMBOLS = {
            curious: () => popSymbol(p.question, { hold: 1 }),
            surprised: () => popSymbol(p.exclaim, { hold: 0.5 }),
            excited: () => gsap.timeline().add(popSymbol(p.exclaim, { hold: 0.4 })).add(p.sparkles.map(s => popSymbol(s, { hold: 0.3 })), 0),
            happy: () => gsap.timeline().add(p.sparkles.map(s => popSymbol(s, { hold: 0.2 }))),
            angry: () => popSymbol(p.vein, { hold: 0.6, pulses: 3 }),
            sad: () => {
                const tl = gsap.timeline();
                if (reduce) return tl.add(p.tears.map(t => popSymbol(t, { hold: 1 })));
                p.tears.forEach((t, i) => tl.fromTo(t, { opacity: 0, y: 0, scaleY: 0.6 },
                    { opacity: 1, y: 22, scaleY: 1.2, duration: 0.9, ease: 'power1.in', repeat: 2, delay: i * 0.25 }, 0));
                return tl.to(p.tears, { opacity: 0, duration: 0.2 });
            },
            shy: () => popSymbol(p.sweat, { hold: 0.6 }),
            love: () => gsap.timeline().add(p.hearts.map((h, i) => popSymbol(h, { hold: 0.5 }).delay(i * 0.2))),
        };

        const DURATION = { happy: 1.2, excited: 1.6, curious: 2.2, surprised: 1.2, sad: 2.8, angry: 2.2, shy: 2.2, love: 1.8 };

        // Plays a mood, then settles back to idle. Returns false if something more important is playing.
        function express(name, { auto = false, withWave = false } = {}) {
            const now = performance.now();
            if (asleep && name !== 'sleepy') wake();
            if (now < busyUntil && PRIORITY[name] < PRIORITY[mood]) return false;
            if (auto && (now < busyUntil || now - (lastShown[name] || -1e9) < 10000)) return false;
            lastShown[name] = now;

            if (reaction) {
                reaction.kill();
                gsap.to(symbols, { opacity: 0, duration: 0.15 });
                gsap.set(p.arm, { rotation: 60, opacity: 0 });
                gsap.to(p.body, { x: 0, y: 0, rotation: 0, scaleX: 1, scaleY: 1, duration: 0.15 });
            }
            mood = name;
            busyUntil = now + (DURATION[name] || 1) * 1000;
            setFace(name);
            reaction = gsap.timeline()
                .add(bodyMotion(name), 0)
                .add(SYMBOLS[name] ? SYMBOLS[name]() : gsap.timeline(), 0)
                .add(withWave ? wave() : gsap.timeline(), 0.1)
                .call(() => { mood = 'idle'; setFace('idle'); }, null, DURATION[name] || 1);
            return true;
        }

        // ── Idle life: breathing, floating, blinking ──
        const breathe = reduce ? null : gsap.timeline({ repeat: -1, yoyo: true })
            .to(p.breath, { scaleY: 1.025, scaleX: 0.99, y: -2, duration: 1.8, ease: 'sine.inOut' }, 0)
            .to(p.shadow, { scaleX: 0.92, opacity: 0.5, duration: 1.8, ease: 'sine.inOut', transformOrigin: '50% 50%' }, 0);

        function blinkLoop() {
            gsap.delayedCall(2.5 + Math.random() * 3.5, () => {
                if (!asleep && FACES[mood].eyes === 'open') {
                    const blink = gsap.timeline().to(p.eyeOpen, { scaleY: 0.1, duration: 0.06, transformOrigin: '50% 60%' })
                        .to(p.eyeOpen, { scaleY: 1, duration: 0.09 });
                    if (Math.random() < 0.15) blink.to(p.eyeOpen, { scaleY: 0.1, duration: 0.06 }).to(p.eyeOpen, { scaleY: 1, duration: 0.09 });
                }
                blinkLoop();
            });
        }
        blinkLoop();

        // ── Sleep after a quiet spell ──
        let asleep = false;
        let idleTimer = null;
        let zzzLoop = null;
        function sleep() {
            if (asleep || roaming || performance.now() < busyUntil) return resetIdle();
            asleep = true;
            mood = 'sleepy';
            setFace('sleepy');
            if (breathe) breathe.pause();
            if (!reduce) gsap.to(p.body, { rotation: -6, y: 3, duration: 1.2, ease: 'sine.inOut' });
            zzzLoop = gsap.timeline({ repeat: -1, repeatDelay: 0.6 })
                .fromTo(p.zzz, { opacity: 0, y: 4 }, { opacity: 1, y: 0, duration: 0.8, ease: 'sine.out' })
                .to(p.zzz, { opacity: 0, y: -6, duration: 0.8, ease: 'sine.in' }, '+=0.8');
        }
        function wake() {
            if (!asleep) return;
            asleep = false;
            if (zzzLoop) { zzzLoop.kill(); gsap.to(p.zzz, { opacity: 0, duration: 0.2 }); }
            if (!reduce) gsap.to(p.body, { rotation: 0, y: 0, duration: 0.3 });
            if (breathe) breathe.resume();
            mood = 'idle';
            setFace('idle');
        }
        function resetIdle() {
            clearTimeout(idleTimer);
            idleTimer = setTimeout(sleep, 25000);
        }
        let wakeQueued = false;
        const onActivity = () => {
            if (asleep && !wakeQueued) {
                wakeQueued = true;
                requestAnimationFrame(() => { wakeQueued = false; wake(); express('surprised'); });
            }
            resetIdle();
        };
        ['mousemove', 'keydown', 'touchstart', 'wheel'].forEach(t => window.addEventListener(t, onActivity, { passive: true }));
        resetIdle();

        // ── Eyes follow the cursor ──
        if (!reduce && window.matchMedia('(pointer: fine)').matches) {
            const lookX = gsap.quickTo(p.eyes, 'x', { duration: 0.3, ease: 'power3.out' });
            const lookY = gsap.quickTo(p.eyes, 'y', { duration: 0.3, ease: 'power3.out' });
            window.addEventListener('mousemove', e => {
                const r = button.getBoundingClientRect();
                const dx = e.clientX - (r.left + r.width / 2);
                const dy = e.clientY - (r.top + r.height / 2);
                const len = Math.hypot(dx, dy) || 1;
                lookX((dx / len) * Math.min(4, len / 40));
                lookY((dy / len) * Math.min(3, len / 40));
            }, { passive: true });
        }

        // ── Clicks: one = happy, quick second = excited, poking 5+ = angry 💢 ──
        let clicks = [];
        let angryUntil = 0;
        button.addEventListener('click', () => {
            const now = performance.now();
            clicks = clicks.filter(t => now - t < 2000);
            clicks.push(now);
            if (now < angryUntil) {
                // Still cross: pout and shake without escalating.
                if (!reduce) gsap.fromTo(p.body, { x: -3 }, { x: 0, duration: 0.3, ease: 'elastic.out(1, 0.3)' });
                return;
            }
            if (clicks.length >= 5) {
                clicks = [];
                angryUntil = now + 5000;
                express('angry');
            } else if (clicks.length >= 2 && now - clicks[clicks.length - 2] < 600) {
                express('excited');
            } else {
                express('happy');
            }
        });
        button.addEventListener('mouseenter', () => { if (mood === 'idle') express('curious', { auto: true }); });

        // ── Page events ──
        // Random play state (used below and by the scroll handler).
        let roaming = false;
        let hovered = false;
        let ridingUntil = 0;
        button.addEventListener('mouseenter', () => { hovered = true; });
        button.addEventListener('mouseleave', () => { hovered = false; });

        const lean = reduce ? null : gsap.quickTo(p.breath, 'rotation', { duration: 0.5, ease: 'power3.out' });
        const rideY = reduce ? null : gsap.quickTo(button, 'y', { duration: 0.7, ease: 'power3.out' });
        let settleTimer = null;

        let lastY = window.scrollY, lastT = performance.now();
        window.addEventListener('scroll', () => {
            const now = performance.now();
            const velocity = (window.scrollY - lastY) / Math.max(1, now - lastT) * 1000;
            lastY = window.scrollY; lastT = now;
            if (Math.abs(velocity) > 2500) express('surprised', { auto: true });
            if (reduce) return;

            // Always: lean into the scroll a little.
            lean(gsap.utils.clamp(-14, 14, -velocity / 120));
            // Sometimes: get carried along with the scroll, then drift home.
            if (now < ridingUntil && !roaming) {
                rideY(gsap.utils.clamp(-260, 0, -Math.abs(velocity) * 0.12));
                if (mood === 'idle') setFace('excited');
            }
            clearTimeout(settleTimer);
            settleTimer = setTimeout(() => {
                lean(0);
                if (!roaming) {
                    rideY(0);
                    if (mood === 'idle') setFace('idle');
                }
            }, 160);
        }, { passive: true });

        const contact = document.getElementById('contact');
        if (contact) {
            let waved = false;
            new IntersectionObserver(entries => {
                const visible = entries.some(e => e.isIntersecting);
                button.classList.toggle('at-contact', visible);
                if (visible && !waved) {
                    waved = true;
                    setTimeout(() => express('excited', { withWave: true }), 400);
                }
            }, { threshold: 0.4 }).observe(contact);
        }

        document.querySelectorAll('.project-card').forEach(card => {
            let timer = null;
            let loved = false;
            card.addEventListener('mouseenter', () => {
                if (loved) return;
                timer = setTimeout(() => { loved = express('love', { auto: true }); }, 1500);
            });
            card.addEventListener('mouseleave', () => clearTimeout(timer));
        });

        let hiddenAt = 0;
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) hiddenAt = performance.now();
            else if (performance.now() - hiddenAt > 3000) express('happy', { auto: true });
        });

        // ── Random play ──
        // A hop from one spot to another, as a few small arcs, leaning the way it travels.
        function hop(fromX, fromY, toX, toY) {
            const tl = gsap.timeline();
            const hops = Math.max(1, Math.round(Math.hypot(toX - fromX, toY - fromY) / 220));
            tl.to(p.body, { rotation: toX < fromX ? -10 : 10, duration: 0.2, ease: 'power2.out' });
            for (let k = 1; k <= hops; k++) {
                const at = tl.duration();
                const x = fromX + (toX - fromX) * k / hops;
                const y = fromY + (toY - fromY) * k / hops;
                const prevY = fromY + (toY - fromY) * (k - 1) / hops;
                tl.to(button, { x, duration: 0.44, ease: 'sine.inOut' }, at)
                    .to(button, { y: Math.min(prevY, y) - gsap.utils.random(30, 55), duration: 0.22, ease: 'power2.out' }, at)
                    .to(button, { y, duration: 0.22, ease: 'power2.in' }, at + 0.22)
                    .to(p.body, { scaleX: 1.12, scaleY: 0.88, duration: 0.07, yoyo: true, repeat: 1, ease: 'power1.out' }, at + 0.44);
            }
            return tl.to(p.body, { rotation: 0, duration: 0.25, ease: 'power2.out' });
        }

        const limits = () => {
            const r = button.getBoundingClientRect();
            return { minX: -(window.innerWidth - r.width - 48), minY: -(window.innerHeight - r.height - 60) };
        };

        const PLAYS = {
            // Wander to 2–4 random spots, react at each, then go home.
            roam() {
                const { minX, minY } = limits();
                const tl = gsap.timeline();
                let x = gsap.getProperty(button, 'x'), y = gsap.getProperty(button, 'y');
                tl.call(() => setFace('excited'));
                const stops = gsap.utils.random(2, 4, 1);
                for (let i = 0; i < stops; i++) {
                    const tx = gsap.utils.random(minX, 0), ty = gsap.utils.random(minY, 0);
                    tl.add(hop(x, y, tx, ty))
                        .call(() => setFace(gsap.utils.random(['happy', 'curious', 'excited', 'love'])))
                        .to({}, { duration: gsap.utils.random(0.5, 1.2) });
                    x = tx; y = ty;
                }
                return tl.call(() => setFace('happy')).add(hop(x, y, 0, 0));
            },
            // Slide up the edge, look around, slide back.
            peek() {
                const { minY } = limits();
                return gsap.timeline()
                    .call(() => setFace('curious'))
                    .to(button, { y: gsap.utils.random(minY * 0.8, minY * 0.3), duration: 1.2, ease: 'power2.inOut' })
                    .to(p.body, { rotation: -12, duration: 0.4, ease: 'power2.inOut' })
                    .to(p.body, { rotation: 12, duration: 0.6, ease: 'power2.inOut' }, '+=0.4')
                    .to(p.body, { rotation: 0, duration: 0.3 }, '+=0.4')
                    .call(() => setFace('happy'))
                    .to(button, { y: 0, duration: 1, ease: 'power2.inOut' }, '+=0.3');
            },
            // A happy flip in place.
            spin() {
                return gsap.timeline()
                    .call(() => setFace('happy'))
                    .to(p.body, { scaleY: 0.88, scaleX: 1.08, duration: 0.12 })
                    .to(p.body, { y: -30, scaleY: 1.05, scaleX: 0.96, rotation: 360, duration: 0.7, ease: 'power2.out' })
                    .to(p.body, { y: 0, scaleY: 1, scaleX: 1, duration: 0.45, ease: 'bounce.out' })
                    .set(p.body, { rotation: 0 })
                    .add(SYMBOLS.happy());
            },
            // For the next while, get carried along whenever the page scrolls.
            ride() {
                ridingUntil = performance.now() + gsap.utils.random(12000, 20000);
                return gsap.timeline().add(bodyMotion('happy'));
            },
        };

        function schedulePlay() {
            gsap.delayedCall(gsap.utils.random(10, 22), () => {
                const free = !asleep && !roaming && !hovered && !document.hidden && performance.now() > busyUntil;
                if (free) {
                    const options = window.innerWidth > 768 ? ['roam', 'roam', 'peek', 'spin', 'ride', 'ride'] : ['spin', 'ride', 'peek'];
                    const play = gsap.utils.random(options);
                    roaming = play !== 'ride';
                    PLAYS[play]().call(() => {
                        roaming = false;
                        if (mood === 'idle') setFace('idle');
                        resetIdle();
                    });
                }
                schedulePlay();
            });
        }
        if (!reduce) gsap.delayedCall(6, schedulePlay);

        // ── Demo: hop next to the anchor and perform every mood ──
        let demoRunning = false;
        // Each caption shows briefly, then fades on its own.
        const say = label => {
            gsap.killTweensOf(p.caption);
            p.caption.textContent = label;
            return gsap.timeline()
                .fromTo(p.caption, { opacity: 0, y: 6, xPercent: -50 }, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' })
                .to(p.caption, { opacity: 0, y: -4, duration: 0.3, ease: 'power1.in' }, '+=1.4');
        };
        const DEMO_STEPS = [
            ['happy', 'Happy', 1.6], ['excited', 'Excited!', 1.8], ['curious', 'Curious?', 2.2],
            ['surprised', 'Surprised!', 1.5], ['love', 'In love', 2], ['shy', 'Shy…', 2.2],
            ['sad', 'Sad', 2.6], ['angry', 'Angry 💢', 2.4],
        ];

        function demo(anchor) {
            if (demoRunning) return;
            demoRunning = true;
            roaming = true;
            wake();
            const tl = gsap.timeline({
                onComplete: () => {
                    demoRunning = false;
                    roaming = false;
                    gsap.to(p.caption, { opacity: 0, duration: 0.2 });
                    setFace('idle');
                    resetIdle();
                },
            });

            // Travel next to the button that started the demo.
            let tx = 0, ty = 0;
            const x0 = gsap.getProperty(button, 'x'), y0 = gsap.getProperty(button, 'y');
            if (!reduce && anchor) {
                const r = button.getBoundingClientRect();
                const a = anchor.getBoundingClientRect();
                const { minX, minY } = limits();
                tx = gsap.utils.clamp(minX, 0, a.right + 28 - (r.left - x0));
                // The drawn body sits in the lower part of its box, so aim a little higher.
                ty = gsap.utils.clamp(minY, 0, a.top + a.height / 2 - r.height * 0.62 - (r.top - y0));
                tl.call(() => setFace('excited')).add(hop(x0, y0, tx, ty));
            }

            DEMO_STEPS.forEach(([name, label, hold]) => {
                tl.call(() => { busyUntil = 0; say(label); express(name); })
                    .to({}, { duration: hold });
            });
            tl.call(() => { say('Sleepy'); mood = 'sleepy'; setFace('sleepy'); })
                .fromTo(p.zzz, { opacity: 0, y: 4 }, { opacity: 1, y: 0, duration: 0.6, ease: 'sine.out' })
                .to(p.zzz, { opacity: 0, y: -6, duration: 0.6, ease: 'sine.in' }, '+=0.9')
                .call(() => { mood = 'idle'; busyUntil = 0; say('Bye!'); express('excited', { withWave: true }); })
                .to({}, { duration: 2.2 });
            if (!reduce && anchor) tl.add(hop(tx, ty, 0, 0));
            else if (x0 || y0) tl.to(button, { x: 0, y: 0, duration: 0.6 });
        }

        window.robotBuddy = { demo };
        document.querySelectorAll('[data-robot-demo]').forEach(trigger => {
            trigger.addEventListener('click', () => demo(trigger));
        });

        // ── Entrance: drops in after the loader and wakes up ──
        setFace('sleepy');
        gsap.set(button, { yPercent: reduce ? 0 : 160, opacity: reduce ? 1 : 0 });
        gsap.timeline({ delay: 2.6 })
            .to(button, { yPercent: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.6)' })
            .call(() => { mood = 'idle'; express('surprised'); }, null, '+=0.5')
            .call(() => express('happy'), null, '+=1.3');
    }

    // Works on any site: uses the page's GSAP if present, otherwise loads it first.
    function start() {
        if (window.gsap) return initMascot();
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.onload = initMascot;
        document.head.appendChild(script);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
})();
