import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RobotHero from './components/RobotHero';
import PostHeroSections from './components/PostHeroSections';
import CustomCursor from './components/CustomCursor';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import MobileExperienceNotice from './components/MobileExperienceNotice';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function Home() {
    return (
        <>
            <RobotHero />
            <PostHeroSections />
        </>
    );
}

function App() {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });
        lenisRef.current = lenis;

        // Single RAF path via GSAP ticker — dual RAF was fighting ScrollTrigger pins
        // and could make Selected Work flicker/disappear near section boundaries.
        lenis.on('scroll', ScrollTrigger.update);
        const onTick = (time) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(onTick);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(onTick);
        };
    }, []);

    return (
        <Router basename="/portfolio">
            <ScrollToTop />
            <div className="app-container">
                <Navbar />
                <CustomCursor />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <ScrollToTopButton />
                <MobileExperienceNotice />
            </div>
        </Router>
    );
}

export default App;
