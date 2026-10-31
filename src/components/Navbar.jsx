import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="topbar">
            <Link to="/" className="brand">sabih</Link>
            <nav className="topnav" aria-label="Primary">
                <Link to="/">home</Link>
                <a href="/#skills">skills</a>
                <Link to="/contact">contact</Link>
            </nav>
        </header>
    );
}
