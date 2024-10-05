// Navbar.js
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Navbar.css'; // Import the CSS file

function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            variant="dark"
            expand="lg"
            fixed="top"
        >
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ cursor: 'pointer' }}>
                    My Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleMenuClick} />
                <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? 'show' : ''}>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                        <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                        <Nav.Link as={Link} to="/Insights" className="nav-link insights-link">Insights</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
