import { Link } from 'react-router-dom';

const PROJECTS = [
    {
        title: 'Interior AI',
        desc: 'Got him into the AI Seekho online hackathon, top 750 out of 10,000+.',
        url: 'https://interior-ai-sigma-ten.vercel.app',
    },
    {
        title: 'The VC Brain',
        desc: 'Built at the HackNation hackathon. Next.js, React.',
        url: 'https://the-vc-brain.vercel.app',
    },
    {
        title: 'SimpleCRM',
        // Text only. Never add a link or demo — the product exposes company CRM keys.
        desc: 'Top 10 out of 1,100 applications. Pitched at NASTP at age 15, the youngest there.',
    },
    {
        title: 'Bawany Enterprises',
        desc: 'Full React rebuild of the Bawany Enterprises website, started from a structured audit of a reference site, fixed a non-functional lead-gen form, missing mobile nav, and dead anchor links.',
        url: 'https://bawanyenterprises.com',
    },
    {
        title: 'Bawany Mobile',
        desc: 'Built and launched bawanymobile.com (React), deployed on Namecheap/cPanel, handled SSL certificate renewal and FTP deployment via FileZilla.',
        url: 'https://bawanymobile.com',
    },
];

const SKILL_GROUPS = [
    { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vite'] },
    { title: 'AI & LLMs', items: ['Gemini API', 'LLM API Integration', 'RAG Chatbots', 'AI Agents', 'Prompt Engineering'] },
    { title: 'Automation & CRM', items: ['GoHighLevel / Exterly', 'WhatsApp-commerce', 'Google Sheets', 'Lead Qualification Bots'] },
    { title: 'Backend & Media', items: ['Node.js', 'Supabase', 'FFmpeg', 'REST APIs'] },
    { title: 'Deploy & Ops', items: ['Namecheap / cPanel', 'FTP / FileZilla', 'SSL', 'GitHub Pages', 'Git'] },
];

const NOTES = [
    { date: 'july 2026', text: 'Shortlisted from 5,500+ global applications for the MIT-affiliated Hack-Nation Global AI Hackathon — July 2026.' },
    { date: '2026', text: 'AI Seekho Silver Tier 2026. Ranked in the top 750 out of 10,000+ participants at a Google Developer Groups event.' },
    { date: 'season 2026', text: 'A journeyman this window — minutes spread across 19 clubs, most at Sabih-sourcee/Terminal-Performance-Manager.' },
    { date: 'season 2026', text: 'A weekday professional — trains on schedule, 77% of touches Mon–Fri.' },
    { date: 'season 2026', text: "Scout's verdict: Sabih-sourcee is a box-to-box engine — links maintenance to launches, covers every blade of grass. Standout attribute: BUILD 99. 20 matchdays in the observed window. Verdict: sign before the window closes." },
    { date: '', text: 'Awarded prestigious High Achiever status in the advanced ACCP-AI program at Aptech.' },
    { date: '', text: 'Won Project of the Month outperforming the cohort while serving as Team Leader of the batch.' },
];

function Dots() {
    return (
        <div className="dots" aria-hidden="true">
            <span /><span /><span />
        </div>
    );
}

function ProjectName({ project }) {
    if (!project.url) return <span className="item-name">{project.title}</span>;
    return (
        <a className="item-name" href={project.url} target="_blank" rel="noopener noreferrer">
            {project.title}
        </a>
    );
}

export default function PostHeroSections() {
    return (
        <main className="page">
            <div className="bio rise">
                <p>
                    I&apos;m Sabih Ur Rehman, an AI Engineer at a company in Karachi. I build interactive products with LLMs, automation, and precise frontend craft.
                </p>
                <p>
                    I specialize in performant, pixel-perfect, and highly interactive user interfaces, blending cutting-edge web technologies with creative design intuition to engineer scalable digital experiences.
                </p>
                <p>
                    <Link to="/contact">Open to opportunities.</Link> AI Engineer at a company.
                </p>
            </div>

            <Dots />

            <section className="block" id="work" aria-labelledby="work-label">
                <h2 id="work-label" className="section-label">Work</h2>
                <div className="list">
                    {PROJECTS.map((project) => (
                        <p key={project.title} className="item">
                            <ProjectName project={project} />
                            <span className="slash">/</span>
                            <span className="item-desc">{project.desc}</span>
                        </p>
                    ))}
                </div>
            </section>

            <Dots />

            <section className="block" id="notes" aria-labelledby="notes-label">
                <h2 id="notes-label" className="section-label">Notes</h2>
                <div className="notes">
                    {NOTES.map((note) => (
                        <article key={note.text} className="note">
                            <p className="note-text">{note.text}</p>
                            {note.date ? <p className="note-date">{note.date}</p> : null}
                        </article>
                    ))}
                </div>
            </section>

            <section className="block" id="skills" aria-labelledby="skills-label">
                <h2 id="skills-label" className="section-label">Skills</h2>
                <div className="list">
                    {SKILL_GROUPS.map((group) => (
                        <p key={group.title} className="item">
                            <span className="item-name">{group.title}</span>
                            <span className="slash">/</span>
                            <span className="item-desc">{group.items.join(', ')}</span>
                        </p>
                    ))}
                </div>
            </section>

            <section className="block" aria-labelledby="github-label">
                <h2 id="github-label" className="section-label">GitHub</h2>
                <p className="plain">
                    @Sabih-sourcee · &ldquo;The Engine&rdquo; · 1st season · class of 2026. Gold, overall 76. Commits 94%.
                </p>
                <p className="plain muted">build 99 · review 42 · ship 99 · volume 99 · impact 40</p>
                <p className="plain muted">last 5 matchdays: D · D · W · D · W</p>
                <p className="plain">Terminal-Performance-Manager · The-VC-Brain · INTERIOR-AI</p>
                <p className="plain muted">TypeScript ×15 · JavaScript ×3 · Python ×2</p>
                <p className="plain">
                    <a href="https://githubfc.com/Sabih-sourcee" target="_blank" rel="noopener noreferrer">View the card</a>
                    {' · '}
                    <a href="https://github.com/Sabih-sourcee" target="_blank" rel="noopener noreferrer">GitHub profile</a>
                </p>
            </section>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Sabih Ur Rehman. All rights reserved.</p>
                <p>
                    <a href="https://github.com/sabih-source/" target="_blank" rel="noopener noreferrer">GitHub</a>
                    {' · '}
                    <a href="#linkedin">LinkedIn</a>
                    {' · '}
                    <a href="#twitter">Twitter</a>
                    {' · '}
                    <Link to="/contact">Contact</Link>
                </p>
            </footer>
        </main>
    );
}
