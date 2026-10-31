import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PostHeroSections from './components/PostHeroSections';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="site">
                <Navbar />
                <Routes>
                    <Route path="/" element={<PostHeroSections />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </Router>
    );
}
