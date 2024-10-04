// App.js
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Make sure to import Routes and Route here
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import HireMeButton from './components/HireMeButton';
import Navbar from './components/Navbar';  
import Insights from './components/Insights'; // Import the Articles component

function App() {
    const location = useLocation(); // Get current location from the router

    useEffect(() => {
        const handleScrollToSection = () => {
            const path = location.pathname;
            if (path === '/experience') {
                scrollToSection('portfolio'); // Scroll to portfolio section
            } else if (path === '/contact') {
                scrollToSection('Contact'); // Scroll to contact section
            }
        };

        handleScrollToSection();
    }, [location]); // Dependency array includes location

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -70; // Adjust based on navbar height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="App">
            <Navbar />
            <Header />
            <Portfolio />
            <Contact />
            <HireMeButton />
        </div>
    );
}

// Main component that handles routing
function MainApp() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/experience" element={<App />} />
            <Route path="/contact" element={<App />} />
            <Route path="/Insights" element={<Insights />} />
        </Routes>
    );
}

// Router component that wraps the MainApp with Router
export default function RouterApp() {
    return (
        <Router>
            <MainApp />
        </Router>
    );
}
