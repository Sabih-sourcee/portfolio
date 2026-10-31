import { Link } from 'react-router-dom';

const PROJECTS = [
    {
        title: 'Virtual Try-On App',
        desc: 'An AI-powered virtual try-on application.',
        tech: ['React', 'GSAP', 'AI'],
        url: 'https://virtual-tryon.lovable.app',
        status: 'Live',
    },
    {
        title: 'Rainwater System',
        desc: 'A dashboard for environmental metrics.',
        tech: ['React', 'GSAP', 'AI'],
        url: 'https://sabih-bot.github.io/Rainwater/',
        status: 'Live',
    },
    {
        title: 'Bawany Enterprises',
        desc: 'Full React rebuild of the Bawany Enterprises website, started from a structured audit of a reference site, fixed a non-functional lead-gen form, missing mobile nav, and dead anchor links.',
        tech: ['React', 'Tailwind', 'Stitch'],
        url: 'https://bawanyenterprises.com',
        status: 'Live',
    },
    {
        title: 'Bawany Mobile',
        desc: 'Built and launched bawanymobile.com (React), deployed on Namecheap/cPanel, handled SSL certificate renewal and FTP deployment via FileZilla.',
        tech: ['React', 'Namecheap', 'cPanel'],
        url: 'https://bawanymobile.com',
        status: 'Live',
    },
];

const FOCUS = [
    {
        title: 'Frontend Engineering',
        desc: 'Crafting responsive, accessible, and highly optimized interfaces using React, Next.js, and modern CSS principles.',
        tech: ['React / Next.js', 'TypeScript', 'GSAP', 'FFmpeg'],
    },
    {
        title: 'Backend & Automation',
        desc: 'Structuring robust architectures, CRM pipelines, and commerce automations — from Supabase APIs to WhatsApp-commerce flows.',
        tech: ['Supabase / Node.js', 'CRM (GoHighLevel/Exterly)', 'WhatsApp-commerce'],
    },
    {
        title: 'AI-Augmented Workflow',
        desc: 'Leveraging LLM APIs and generative tooling to ship chatbots, lead-qualification agents, and faster product iteration.',
        tech: ['LLM API (Gemini)', 'RAG chatbots', 'AI agents'],
    },
];

const SKILL_GROUPS = [
    {
        title: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vite'],
    },
    {
        title: 'AI & LLMs',
        items: ['Gemini API', 'LLM API Integration', 'RAG Chatbots', 'AI Agents', 'Prompt Engineering'],
    },
    {
        title: 'Automation & CRM',
        items: ['GoHighLevel / Exterly', 'WhatsApp-commerce', 'Google Sheets', 'Lead Qualification Bots'],
    },
    {
        title: 'Backend & Media',
        items: ['Node.js', 'Supabase', 'FFmpeg', 'REST APIs'],
    },
    {
        title: 'Deploy & Ops',
        items: ['Namecheap / cPanel', 'FTP / FileZilla', 'SSL', 'GitHub Pages', 'Git'],
    },
];

const NOTES = [
    {
        date: 'july 2026',
        text: 'Shortlisted from 5,500+ global applications for the MIT-affiliated Hack-Nation Global AI Hackathon — July 2026.',
    },
    {
        date: '2026',
        text: 'AI Seekho Silver Tier 2026. Ranked in the top 750 out of 10,000+ participants at a Google Developer Groups event.',
    },
    {
        date: 'season 2026',
        text: 'A journeyman this window — minutes spread across 19 clubs, most at Sabih-sourcee/Terminal-Performance-Manager.',
    },
    {
        date: 'season 2026',
        text: 'A weekday professional — trains on schedule, 77% of touches Mon–Fri.',
    },
    {
        date: 'season 2026',
        text: "Scout's verdict: Sabih-sourcee is a box-to-box engine — links maintenance to launches, covers every blade of grass. Standout attribute: BUILD 99. 20 matchdays in the observed window. Verdict: sign before the window closes.",
    },
    {
        date: '',
        text: 'Awarded prestigious High Achiever status in the advanced ACCP-AI program at Aptech.',
    },
    {
        date: '',
        text: 'Won Project of the Month outperforming the cohort while serving as Team Leader of the batch.',
    },
];

function StatusChip({ status }) {
    const kind = status === 'Live' ? 'chip-live' : 'chip-progress';
    return <span className={`chip ${kind}`}>{status}</span>;
}

function Tags({ items }) {
    return (
        <ul className="tags">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

export default function PostHeroSections() {
    return (
        <main>
            <header className="intro-block">
                <p className="intro">
                    I&apos;m Sabih Ur Rehman, an AI Engineer at a company in Karachi. I build interactive products with LLMs, automation, and precise frontend craft.
                </p>
                <p className="intro intro-next">
                    I specialize in performant, pixel-perfect, and highly interactive user interfaces, blending cutting-edge web technologies with creative design intuition to engineer scalable digital experiences.
                </p>
                <p className="inline-links">
                    <a href="#work">work</a>
                    <Link to="/contact">contact</Link>
                    <a href="https://github.com/sabih-source/" target="_blank" rel="noopener noreferrer">github</a>
                </p>
            </header>

            <section className="block" id="work" aria-labelledby="work-label">
                <h2 id="work-label" className="section-label">currently building</h2>
                <div className="stack">
                    {PROJECTS.map((project) => (
                        <article key={project.title} className="project">
                            <div className="project-head">
                                <h3 className="project-title">{project.title}</h3>
                                <StatusChip status={project.status} />
                            </div>
                            <p className="project-desc">{project.desc}</p>
                            <Tags items={project.tech} />
                            {project.url && (
                                <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">
                                    view project
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            <section className="block" id="expertise" aria-labelledby="focus-label">
                <h2 id="focus-label" className="section-label">focus</h2>
                <div className="stack">
                    {FOCUS.map((item) => (
                        <article key={item.title} className="focus-item">
                            <h3 className="project-title">{item.title}</h3>
                            <p className="project-desc">{item.desc}</p>
                            <Tags items={item.tech} />
                        </article>
                    ))}
                </div>
            </section>

            <section className="block" id="skills" aria-labelledby="skills-label">
                <h2 id="skills-label" className="section-label">skills</h2>
                <p className="lede">The stack I use to ship product interfaces, AI tooling, and growth automations.</p>
                <div className="stack">
                    {SKILL_GROUPS.map((group) => (
                        <article key={group.title} className="focus-item">
                            <h3 className="group-title">{group.title}</h3>
                            <Tags items={group.items} />
                        </article>
                    ))}
                </div>
            </section>

            <section className="block" id="notes" aria-labelledby="notes-label">
                <h2 id="notes-label" className="section-label">notes</h2>
                <div className="notes">
                    {NOTES.map((note) => (
                        <article key={note.text} className={note.date ? 'note' : 'note note-undated'}>
                            {note.date ? <p className="note-date">{note.date}</p> : null}
                            <p className="note-text">{note.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="block" aria-labelledby="github-label">
                <h2 id="github-label" className="section-label">github</h2>
                <p className="prose">
                    @Sabih-sourcee · &ldquo;The Engine&rdquo; · 1st season · class of 2026. Gold, overall 76. Commits 94%.
                </p>
                <p className="prose muted">build 99 · review 42 · ship 99 · volume 99 · impact 40</p>
                <p className="prose muted">last 5 matchdays: D · D · W · D · W</p>
                <p className="prose">Terminal-Performance-Manager · The-VC-Brain · INTERIOR-AI</p>
                <p className="prose muted">TypeScript ×15 · JavaScript ×3 · Python ×2</p>
                <p className="inline-links">
                    <a href="https://githubfc.com/Sabih-sourcee" target="_blank" rel="noopener noreferrer">view the card</a>
                    <a href="https://github.com/Sabih-sourcee" target="_blank" rel="noopener noreferrer">github profile</a>
                </p>
            </section>

            <footer className="site-footer">
                <p className="prose">Crafting immersive digital experiences with modern web technologies.</p>
                <p className="inline-links">
                    <a href="https://virtual-tryon.lovable.app" target="_blank" rel="noopener noreferrer">virtual try-on</a>
                    <a href="https://sabih-bot.github.io/Rainwater/" target="_blank" rel="noopener noreferrer">rainwater</a>
                    <a href="https://bawanyenterprises.com" target="_blank" rel="noopener noreferrer">bawany enterprises</a>
                    <a href="https://bawanymobile.com" target="_blank" rel="noopener noreferrer">bawany mobile</a>
                    <a href="#skills">skills</a>
                    <a href="https://github.com/sabih-source/" target="_blank" rel="noopener noreferrer">github</a>
                    <a href="#linkedin">linkedin</a>
                    <a href="#twitter">twitter</a>
                    <Link to="/contact">contact</Link>
                </p>
                <p className="muted copyright">&copy; {new Date().getFullYear()} Sabih Ur Rehman. All rights reserved.</p>
            </footer>
        </main>
    );
}
