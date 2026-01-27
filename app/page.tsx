"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // State for hero animation trigger
  const [heroVisible, setHeroVisible] = useState(false);

  // Project Data
  const projectData = {
    1: {
      title: "AUTOMATED WEB INTERACTION BOT",
      desc: "Developed a high-frequency automation script to benchmark browser interaction speeds on dynamic web platforms. Implemented DOM parsing with BeautifulSoup to extract real-time text data and simulate human input events. Optimized script execution to achieve stable simulated typing speeds of 150+ WPM with <10ms latency.",
      tech: ["PYTHON", "SELENIUM", "BEAUTIFULSOUP", "HTML5", "CSS3"],
    },
    2: {
      title: "AI RED TEAM FRAMEWORK",
      desc: "Built an automated 'Red Team' framework using DeepSeek-R1, identifying 15+ critical security vulnerabilities in Llama-3 models without human intervention. Implemented Visual Prompt Injection and RAG Poisoning attacks using Flux.1, exposing gaps in standard multimodal safety filters. Optimized system performance using MFlux and 4-bit quantization, reducing memory usage by 60%.",
      tech: ["PYTHON", "DEEPSEEK-R1", "LLAMA-3", "FLUX.1", "PYTORCH", "MLX"],
    },
    3: {
      title: "INTELLIGENT CLOUD STORAGE SYSTEM",
      desc: "Developed a cloud-based file-sharing system inspired by Google Drive. Implemented secure file storage and access using AWS services. Designed the system to scale automatically based on user demand. Deployed backend services on AWS EC2 using Docker containers to ensure high availability.",
      tech: ["PYTHON", "AWS EC2", "AWS S3", "CLOUDWATCH", "DOCKER", "SCIKIT-LEARN"],
    },
  };

  useEffect(() => {
    // Trigger hero animation on mount
    setHeroVisible(true);

    // --- SCROLL REVEAL ANIMATION ---
    const revealElements = document.querySelectorAll(
      ".bg-text-line, .about-main, .about-sidebar, .projects-main-title"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1, // Lower threshold for better mobile detection
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    // --- CURSOR GLOW (Desktop) ---
    // Check if we are in a browser environment and not mobile
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      const glow = document.createElement("div");
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

      const moveGlow = (e: MouseEvent) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
        glow.style.opacity = "1";
      };

      const hideGlow = () => {
        glow.style.opacity = "0";
      };

      document.addEventListener("mousemove", moveGlow);
      document.addEventListener("mouseleave", hideGlow);

      return () => {
        document.removeEventListener("mousemove", moveGlow);
        document.removeEventListener("mouseleave", hideGlow);
        if (document.body.contains(glow)) {
          document.body.removeChild(glow);
        }
      };
    }
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false);
  };

  return (
    <>
      {/* Ambient Background Effects */}
      <div className="ambient-glow"></div>
      <div className="noise-overlay"></div>

      {/* Minimal Header */}
      <header className="minimal-header" style={{ backdropFilter: 'none' }}>
        <a href="#" className="logo">
          <svg
            className="logo-icon"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 5L35 15V25L20 35L5 25V15L20 5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="20" cy="20" r="4" fill="currentColor" />
          </svg>
          <span>Gannoji Sathvik</span>
        </a>

        <button
          className="menu-toggle btn-circle"
          id="menu-toggle"
          aria-label="Menu"
          onClick={() => setIsNavOpen(true)}
        >
          {/* Restored image for menu toggle */}
          <span className="btn-bubble">
            <Image
              src="/assets/button-small-1.webp"
              alt=""
              fill
              sizes="100px"
              style={{ objectFit: "cover" }}
              priority
            />
          </span>
          <svg
            viewBox="0 0 32 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hamburger-icon"
          >
            <path
              d="M1 1L16.5172 1M1 7.5H30.9472M22.4141 1.00001H31"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {/* Slide-Out Navigation Panel */}
      <nav className={`nav-panel ${isNavOpen ? 'active' : ''}`} id="nav-panel">
        <div className="nav-overlay" id="nav-overlay" onClick={() => setIsNavOpen(false)}></div>
        <div className="nav-content">
          <button className="nav-close" id="nav-close" onClick={() => setIsNavOpen(false)}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <ul className="nav-links">
            <li>
              <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                <span>SKILLS</span>
                <div className="nav-bubble"></div>
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                <span>PROJECTS</span>
                <div className="nav-bubble"></div>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                <span>ABOUT ME</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link has-dot" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                <span>CONTACT</span>
                <div className="nav-dot"></div>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="full-page">
          {/* Floating Geometric Shards Animation */}
          <div className="shards-container">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`shard shard-${i + 1}`}></div>
            ))}
          </div>

          {/* Volumetric Red Light */}
          <div className="volumetric-light"></div>
          <div className="hero-split">
            {/* Added heroVisible class toggle */}
            <div className={`hero-left ${heroVisible ? 'visible' : ''}`}>
              <p className="hero-tagline">
                ADVANCING AI RESEARCH<br />
                AND DEVELOPMENT WITH<br />
                PRIVACY AT THE<br />
                FOREFRONT.
              </p>
              <a href="#about" className="cta-button hero-cta" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                <span>GET STARTED</span>
              </a>
            </div>

            <div className={`hero-right ${heroVisible ? 'visible' : ''}`}>
              <h1 className="hero-huge-title" id="hero-title">
                GANNOJI<br />SATHVIK
              </h1>
            </div>
          </div>

          <div className={`hero-scroll-indicator btn-circle ${heroVisible ? 'visible' : ''}`} onClick={() => scrollToSection('about')}>
            {/* Restored image for scroll indicator */}
            <span className="btn-bubble">
              <Image
                src="/assets/button-small-4.webp"
                alt=""
                fill
                sizes="100px"
                style={{ objectFit: "cover" }}
              />
            </span>
            <svg className="scroll-arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </section>

        {/* ABOUT SECTION - Full Page with Background Text */}
        <section id="about" className="full-page reveal-section">
          {/* Large Background Text */}
          <div className="bg-text-container">
            <span className="bg-text-line reveal-text" data-delay="0">
              SAFETY.PRIVACY
            </span>
            <span className="bg-text-line reveal-text" data-delay="1">
              BY HUMANS.FOR
            </span>
            <span className="bg-text-line reveal-text" data-delay="2">
              HUMANITY
            </span>
          </div>

          {/* Floating Orb */}
          <div className="floating-orb">
            <div className="orb-glow"></div>
          </div>

          <div className="container about-container">
            <div className="section-header">
              <span className="section-label">—— ABOUT</span>
            </div>

            <div className="about-grid">
              <div className="about-main reveal-content">
                <h2 className="about-title">
                  I am a focused Computer Science student bridging the gap between
                  <span className="highlight"> CORE CS FUNDAMENTALS</span> and
                  <span className="highlight"> MODERN AI/ML</span>.
                </h2>
                <p className="about-body">
                  Currently a 3rd-year student at Woxsen University. I prefer
                  practical, problem-driven learning. While I am an introvert by
                  nature, I am highly consistent and committed to building
                  strong, efficient systems. My goal is to engineer scalable
                  solutions at top-tier tech benchmarks.
                </p>
              </div>

              <div className="about-sidebar reveal-content" data-delay="200">
                <div className="education-card">
                  <h3 className="card-label">EDUCATION</h3>
                  <p className="card-title">B.Tech in Computer Science Engineering</p>
                  <p className="card-subtitle">Woxsen University, India (3rd Year)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION - Full Page */}
        <section id="skills" className="full-page">
          <div className="skills-orbit-container">
            <div className="skills-center">
              <h2 className="skills-center-text">
                Tech<br />
                Skills<span className="dot">.</span>
              </h2>
            </div>

            <div className="skills-orbit">
              {[
                "PYTHON", "JavaScript", "AWS", "ML/AI",
                "DSA", "PERN", "Git", "Selenium"
              ].map((skill, i) => (
                <div key={skill} className="skill-bubble" style={{ "--i": i } as React.CSSProperties}><span>{skill}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="full-page">
          <div className="projects-header">
            <h2 className="projects-main-title reveal-content">
              THE FASTEST<br />
              WAY TO ADAPT<br />
              AND SCALE <span className="highlight-word">AI</span><br />
              TECHNOLOGY
            </h2>
          </div>

          <div className="brahmai-circle-container">
            <div className="side-pill left">
              <span>AUTOMATION</span>
            </div>

            <div className="brahmai-circle">
              <svg className="gradient-ring" viewBox="0 0 300 300">
                <defs>
                  <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#666666", stopOpacity: 1 }} />
                    <stop offset="25%" style={{ stopColor: "#888888", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "#ff6b6b", stopOpacity: 1 }} />
                    <stop offset="75%" style={{ stopColor: "#ffa500", stopOpacity: 1 }} />
                    <stop offset="85%" style={{ stopColor: "#00ff88", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#00d4ff", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle cx="150" cy="150" r="140" fill="none" stroke="url(#circleGradient)" strokeWidth="4"
                  strokeLinecap="round" className="ring-path" />
              </svg>

              <div className="circle-rays-container">
                {[...Array(12)].map((_, i) => <div key={i} className="ray"></div>)}
              </div>

              <div className="circle-center">
                <div className="center-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
                <div className="center-stat">
                  <span className="stat-number">PROJECTS</span>
                  <span className="stat-sub"></span>
                </div>
              </div>

              <div className="orbit-dot"></div>
            </div>

            <div className="side-pill right">
              <span>SECURITY</span>
            </div>
          </div>

          <div className="projects-scroll-track">
            <div className="projects-scroll-content">
              {Object.entries(projectData).map(([id, data]) => (
                <button key={id} className="project-pill" onClick={() => setActiveProject(Number(id))}>
                  <span>{data.title}</span>
                </button>
              ))}
              {Object.entries(projectData).map(([id, data]) => (
                <button key={`dup-${id}`} className="project-pill" onClick={() => setActiveProject(Number(id))}>
                  <span>{data.title}</span>
                </button>
              ))}
            </div>
          </div>

          <a href="#contact" className="cta-button centered glass-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
            <span>GET STARTED</span>
          </a>

          <div className={`project-modal ${activeProject !== null ? 'active' : ''}`} id="project-modal">
            <div className="modal-overlay" onClick={() => setActiveProject(null)}></div>
            <div className="modal-content">
              <button className="modal-close" onClick={() => setActiveProject(null)}>&times;</button>
              {activeProject !== null && projectData[activeProject as keyof typeof projectData] && (
                <>
                  <h3 className="modal-title">{projectData[activeProject as keyof typeof projectData].title}</h3>
                  <p className="modal-desc">{projectData[activeProject as keyof typeof projectData].desc}</p>
                  <div className="modal-tech">
                    {projectData[activeProject as keyof typeof projectData].tech.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="full-page lets-talk-section">
          <div className="tech-grid-bg"></div>

          <div className="contact-content">
            <p className="contact-subtitle">Time back and less stress daily, so you can deliver your creative best.</p>
            <h2 className="contact-huge-title">LET'S<br />TALK</h2>

            <div className="floating-sphere" onClick={() => window.location.href = 'mailto:gannojisathvik24@gmail.com'}>
              <div className="sphere-glow"></div>
              <div className="sphere-inner">
                <span className="sphere-arrow">↗</span>
              </div>
            </div>

            <div className="contact-dot"></div>
          </div>
        </section>

        <footer className="premium-footer">
          <div className="footer-divider"></div>

          <div className="footer-content">
            <div className="footer-left">
              <a href="#" className="footer-logo">
                <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" stroke="currentColor" strokeWidth="1.5"
                    fill="none" />
                  <circle cx="20" cy="20" r="4" fill="currentColor" />
                </svg>
                <span>Gannoji Sathvik</span>
              </a>
              <div className="newsletter-box">
                <input type="email" placeholder="Sign up for newsletter" className="newsletter-input" />
                <button className="newsletter-btn">→</button>
              </div>
            </div>

            <div className="footer-center">
              <div className="footer-links-col">
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>ABOUT</a>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>SKILLS</a>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>PROJECTS</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>CONTACT</a>
              </div>
            </div>

            <div className="footer-right">
              <div className="social-icons">
                <a href="https://github.com" target="_blank" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a href="mailto:gannojisathvik24@gmail.com" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </a>
              </div>

              <div className="footer-cta-wrapper">
                <a href="mailto:gannojisathvik24@gmail.com" className="cta-button footer-cta">
                  <span>LET'S TALK</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Gannoji Sathvik®</p>
            <p>BY HUMANS. FOR THE FUTURE.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
