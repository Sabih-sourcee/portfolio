import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Code2, Database, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Achievements from './Achievements';
import PlayerHeroSection from './PlayerHeroSection';

gsap.registerPlugin(ScrollTrigger);

export default function PostHeroSections() {
    const carouselWrapperRef = useRef(null);
    const trackRef = useRef(null);
    const cardsRef = useRef([]);

    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
    const projects = [
        {
            title: "Virtual Try-On App",
            desc: "An AI-powered virtual try-on application.",
            tech: "React • GSAP • AI",
            img: `${baseUrl}/assets/ai-tryon.png`,
            url: "https://virtual-tryon.lovable.app"
        },
        {
            title: "Rainwater System",
            desc: "A dashboard for environmental metrics.",
            tech: "React • GSAP • AI",
            img: `${baseUrl}/assets/ai-rainwater.png`,
            url: "https://sabih-bot.github.io/Rainwater/"
        },
        {
            title: "Factorled.pk",
            desc: "Led technical projects across web development, CRM automation, and AI-powered tooling for Factorled (Pakistani LED lighting brand) as CTO/AI Engineer.",
            tech: "React • LLM API • CRM Automation",
            img: `${baseUrl}/assets/factorled-pk.png`,
            url: "https://factorled.pk"
        },
        {
            title: "Factorled CRM Automation",
            desc: "Diagnosed a lead-mixing bug between web form and WhatsApp channels in GoHighLevel/Exterly, then analyzed pipeline performance at a 10.7% close rate to surface the follow-up bottleneck. Designed a WhatsApp lead-qualification bot on Gemini + Google Sheets.",
            tech: "GoHighLevel • Gemini • Google Sheets",
            img: `${baseUrl}/assets/factorled-crm.png`,
            result: "10.7% close-rate analysis → follow-up bottleneck identified"
        },
        {
            title: "Bawany Enterprises",
            desc: "Full React rebuild of the Bawany Enterprises website, started from a structured audit of a reference site, fixed a non-functional lead-gen form, missing mobile nav, and dead anchor links.",
            tech: "React • Tailwind • Stitch",
            img: `${baseUrl}/assets/bawany-enterprises.png`,
            url: "https://bawanyenterprises.com"
        },
        {
            title: "Bawany Mobile",
            desc: "Built and launched bawanymobile.com (React), deployed on Namecheap/cPanel, handled SSL certificate renewal and FTP deployment via FileZilla.",
            tech: "React • Namecheap • cPanel",
            img: `${baseUrl}/assets/bawany-mobile.png`,
            url: "https://bawanymobile.com"
        }
    ];

    useEffect(() => {
        const wrapper = carouselWrapperRef.current;
        const track = trackRef.current;
        if (!wrapper || !track) return;

        const mm = gsap.matchMedia();

        mm.add({
            isDesktop: "(min-width: 768px)",
            isMobile: "(max-width: 767px)"
        }, (context) => {
            let { isDesktop } = context.conditions;
            const cards = cardsRef.current.filter(Boolean);

            // Baseline - clear leftover 3D tilt that blocks clicks
            gsap.set(cards, { clearProps: "opacity,visibility,transform" });
            gsap.set(cards, { autoAlpha: 1, scale: 1, rotationX: 0, rotationY: 0, x: 0, y: 0 });
            cards.forEach((card) => {
                const inner = card.querySelector('.project-card-inner');
                if (inner) gsap.set(inner, { clearProps: "transform", rotationX: 0, rotationY: 0, scale: 1, x: 0, y: 0 });
            });

            if (isDesktop) {
                const slideTween = gsap.to(track, {
                    x: () => -(Math.max(track.scrollWidth - window.innerWidth + 100, 0)),
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top top",
                        end: () => `+=${Math.max(track.scrollWidth, window.innerWidth)}`,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                    }
                });

                cards.forEach((card) => {
                    const inner = card.querySelector('.project-card-inner');
                    if (!inner) return;

                    gsap.fromTo(inner,
                        { y: 24, opacity: 0.35 },
                        {
                            y: 0,
                            opacity: 1,
                            ease: "power2.out",
                            duration: 0.45,
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: card,
                                containerAnimation: slideTween,
                                start: "left 92%",
                                toggleActions: "play none none none",
                                once: true,
                            }
                        }
                    );
                });
            } else {
                cards.forEach((card) => {
                    const inner = card.querySelector('.project-card-inner');
                    if (!inner) return;

                    gsap.fromTo(inner,
                        { y: 28, opacity: 0.35 },
                        {
                            y: 0,
                            opacity: 1,
                            ease: "power2.out",
                            duration: 0.45,
                            immediateRender: false,
                            scrollTrigger: {
                                trigger: card,
                                start: "top 92%",
                                toggleActions: "play none none none",
                                once: true,
                            }
                        }
                    );
                });
            }

            // Expertise cards only — project cards stay flat so CTAs stay clickable
            const tiltTargets = [...document.querySelectorAll('.expertise-card')];

            const cleanups = [];
            tiltTargets.forEach((el) => {
                if (!el) return;

                const handleMove = (e) => {
                    const rect = el.getBoundingClientRect();
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

                    const x = clientX - rect.left;
                    const y = clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 28;
                    const rotateY = (centerX - x) / 28;

                    gsap.to(el, {
                        rotationX: rotateX,
                        rotationY: rotateY,
                        scale: 1.01,
                        duration: 0.35,
                        ease: "power2.out",
                        transformPerspective: 1000,
                        overwrite: "auto"
                    });
                };

                const handleLeave = () => {
                    gsap.to(el, {
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        duration: 0.45,
                        ease: "power3.out",
                        overwrite: "auto"
                    });
                };

                el.addEventListener('mousemove', handleMove);
                el.addEventListener('mouseleave', handleLeave);
                el.addEventListener('touchstart', handleMove, { passive: true });
                el.addEventListener('touchend', handleLeave);
                cleanups.push(() => {
                    el.removeEventListener('mousemove', handleMove);
                    el.removeEventListener('mouseleave', handleLeave);
                    el.removeEventListener('touchstart', handleMove);
                    el.removeEventListener('touchend', handleLeave);
                });
            });

            requestAnimationFrame(() => {
                ScrollTrigger.sort();
                ScrollTrigger.refresh();
            });

            return () => cleanups.forEach((fn) => fn());
        });

        return () => mm.revert();
    }, []);

    const scrollRight = () => { /* GSAP handles layout override */ };
    const scrollLeft = () => { };

    return (
        <div className="post-hero">

            {/* P1: Portfolio Intro */}
            <section className="section-padding p1-intro">
                <div className="container">
                    <p className="eyebrow">Who I Am</p>
                    <h2 className="intro-title">SABIH UR REHMAN</h2>
                    <p className="intro-subtitle">AI-Augmented Frontend Developer</p>
                    <p className="intro-desc">
                        Specializing in performant, pixel-perfect, and highly interactive user interfaces.
                        Blending cutting-edge web technologies with creative design intuition to engineer scalable digital experiences.
                    </p>
                    <div className="intro-actions">
                        <button className="btn btn-primary">View Projects</button>
                        <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
                    </div>
                </div>
            </section>

            <PlayerHeroSection />

            {/* P2: Featured Projects Carousel */}
            <section className="section-padding p2-projects" id="work" ref={carouselWrapperRef}>
                <div className="carousel-header">
                    <h3 className="heading" style={{ fontSize: '3rem', margin: 0 }}>Selected Work</h3>
                    <div className="carousel-nav">
                        <button className="nav-btn" onClick={scrollLeft} aria-label="Scroll left" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                            <ArrowLeft size={24} />
                        </button>
                        <button className="nav-btn" onClick={scrollRight} aria-label="Scroll right" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="carousel-track-wrapper">
                    <div className="carousel-track" ref={trackRef}>
                        {projects.map((item, index) => (
                            <div
                                key={item.title}
                                className="project-card"
                                ref={(el) => (cardsRef.current[index] = el)}
                            >
                                <div className="project-card-inner">
                                    {item.img ? (
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="project-img"
                                            style={{
                                                imageRendering: '-webkit-optimize-contrast',
                                                transform: 'translateZ(0)',
                                                backfaceVisibility: 'hidden'
                                            }}
                                        />
                                    ) : (
                                        <div
                                            className="project-img project-img-placeholder"
                                            style={{ background: `linear-gradient(145deg, #111 0%, ${item.accent || '#333'} 100%)` }}
                                            aria-hidden="true"
                                        >
                                            <span>{item.placeholder || item.title.slice(0, 2)}</span>
                                        </div>
                                    )}
                                    <h4 className="project-title">{item.title}</h4>
                                    <p className="project-desc">{item.desc}</p>
                                    {item.result && (
                                        <p className="project-result">{item.result}</p>
                                    )}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', gap: '1rem' }}>
                                        <span className="tech-label">{item.tech}</span>
                                        {item.url && (
                                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="expertise-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', margin: 0, flexShrink: 0 }}>
                                                View Project
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* P3: Cinematic Capability Banner */}
            <section className="p3-banner">
                <div className="banner-content">
                    <h2 className="heading banner-title">BUILDING DIGITAL MOMENTUM</h2>
                </div>
            </section>

            {/* P4: Core Expertise Grid */}
            <section className="section-padding p4-expertise" id="expertise">
                <div className="container">
                    <div className="expertise-card">
                        <div className="expertise-icon">
                            <Code2 size={32} />
                        </div>
                        <h3 className="expertise-title heading">Frontend Engineering</h3>
                        <p className="expertise-desc">
                            Crafting responsive, accessible, and highly optimized interfaces using React, Next.js, and modern CSS principles.
                        </p>
                        <p className="skill-tags">React / Next.js • TypeScript • GSAP • FFmpeg</p>
                        <a href="#skills" className="btn btn-white expertise-btn">Explore</a>
                    </div>

                    <div className="expertise-card">
                        <div className="expertise-icon">
                            <Database size={32} />
                        </div>
                        <h3 className="expertise-title heading">Backend & Automation</h3>
                        <p className="expertise-desc">
                            Structuring robust architectures, CRM pipelines, and commerce automations — from Supabase APIs to WhatsApp-commerce flows.
                        </p>
                        <p className="skill-tags">Supabase / Node.js • CRM (GoHighLevel/Exterly) • WhatsApp-commerce</p>
                        <a href="#skills" className="btn btn-white expertise-btn">Explore</a>
                    </div>

                    <div className="expertise-card">
                        <div className="expertise-icon">
                            <Sparkles size={32} />
                        </div>
                        <h3 className="expertise-title heading">AI-Augmented Workflow</h3>
                        <p className="expertise-desc">
                            Leveraging LLM APIs and generative tooling to ship chatbots, lead-qualification agents, and faster product iteration.
                        </p>
                        <p className="skill-tags">LLM API (Gemini) • RAG chatbots • AI agents</p>
                        <a href="#skills" className="btn btn-white expertise-btn">Explore</a>
                    </div>
                </div>
            </section>

            {/* Skills showcase */}
            <section className="section-padding p-skills" id="skills">
                <div className="container">
                    <div className="skills-header">
                        <p className="eyebrow">Toolkit</p>
                        <h2 className="heading skills-title">Skills</h2>
                        <p className="skills-lead">
                            The stack I use to ship product interfaces, AI tooling, and growth automations.
                        </p>
                    </div>

                    <div className="skills-groups">
                        {[
                            {
                                title: "Frontend",
                                items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Vite"]
                            },
                            {
                                title: "AI & LLMs",
                                items: ["Gemini API", "LLM API Integration", "RAG Chatbots", "AI Agents", "Prompt Engineering"]
                            },
                            {
                                title: "Automation & CRM",
                                items: ["GoHighLevel / Exterly", "WhatsApp-commerce", "Google Sheets", "Lead Qualification Bots"]
                            },
                            {
                                title: "Backend & Media",
                                items: ["Node.js", "Supabase", "FFmpeg", "REST APIs"]
                            },
                            {
                                title: "Deploy & Ops",
                                items: ["Namecheap / cPanel", "FTP / FileZilla", "SSL", "GitHub Pages", "Git"]
                            }
                        ].map((group) => (
                            <div key={group.title} className="skills-group">
                                <h3 className="skills-group-title heading">{group.title}</h3>
                                <ul className="skills-chip-list">
                                    {group.items.map((skill) => (
                                        <li key={skill} className="skill-chip">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* P5: Achievements */}
            <Achievements />

            {/* Footer */}
            <footer className="site-footer">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4 className="heading">S.U.R</h4>
                        <p style={{ color: '#999', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Crafting immersive digital experiences with modern web technologies.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4 className="heading">Projects</h4>
                        <a href="#work" className="footer-link">Factorled.pk</a>
                        <a href="#work" className="footer-link">Factorled CRM</a>
                        <a href="#work" className="footer-link">Bawany Enterprises</a>
                        <a href="#work" className="footer-link">Bawany Mobile</a>
                    </div>
                    <div className="footer-col">
                        <h4 className="heading">Skills</h4>
                        <a href="#skills" className="footer-link">LLM API (Gemini)</a>
                        <a href="#skills" className="footer-link">WhatsApp-commerce</a>
                        <a href="#skills" className="footer-link">CRM (GoHighLevel/Exterly)</a>
                        <a href="#skills" className="footer-link">FFmpeg • React / Next.js</a>
                    </div>
                    <div className="footer-col">
                        <h4 className="heading">Social</h4>
                        <a href="https://github.com/sabih-source/" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                        <a href="#li" className="footer-link">LinkedIn</a>
                        <a href="#tw" className="footer-link">Twitter</a>
                        <Link to="/contact" className="footer-link">Contact Page</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} Sabih Ur Rehman. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
