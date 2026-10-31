import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LINKS = [
    { href: '/', label: 'Home' },
    { href: '/#work', label: 'Work' },
    { href: '/#notes', label: 'Notes' },
    { href: '/contact', label: 'Contact' },
];

function MoonIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
        </svg>
    );
}

function SunIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
    );
}

export default function Navbar() {
    const { pathname } = useLocation();
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const on = localStorage.getItem('sabih-theme') === 'dark';
        setDark(on);
        document.documentElement.dataset.theme = on ? 'dark' : 'light';
    }, []);

    const toggleTheme = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.dataset.theme = next ? 'dark' : 'light';
        localStorage.setItem('sabih-theme', next ? 'dark' : 'light');
    };

    return (
        <header className="identity">
            <Link to="/" className="avatar-link">
                <img
                    className="avatar"
                    src={`${import.meta.env.BASE_URL}assets/sabih.webp`}
                    alt="Sabih Ur Rehman"
                    width={600}
                    height={800}
                />
            </Link>
            {pathname === '/' ? (
                <h1 className="name">Sabih Ur Rehman</h1>
            ) : (
                <p className="name"><Link to="/">Sabih Ur Rehman</Link></p>
            )}
            <nav className="nav" aria-label="Primary">
                {LINKS.map((link) => {
                    const active = link.href === '/'
                        ? pathname === '/'
                        : link.href === '/contact' && pathname === '/contact';
                    const className = active ? 'nav-link active' : 'nav-link';
                    if (link.href.startsWith('/#')) {
                        return <a key={link.label} href={link.href} className={className}>{link.label}</a>;
                    }
                    return <Link key={link.label} to={link.href} className={className}>{link.label}</Link>;
                })}
                <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={dark ? 'Switch to light' : 'Switch to dark'}>
                    {dark ? <SunIcon /> : <MoonIcon />}
                </button>
            </nav>
        </header>
    );
}
