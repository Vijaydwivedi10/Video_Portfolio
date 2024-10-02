import React from 'react';
import '../css/Header.css';
import vijayImage from '../Images/vijay.jpeg';
import { TypeAnimation } from 'react-type-animation';

function Header() {
    const textArray = [
        'Video Editor', 
        'Graphic designer', 
        'Frontend developer',

    ];

    return (
        <div className="header-container">
            {/* Floating icons section */}
            <div className="floating-icons">
                {/* <img src={premierePro} alt="Premiere Pro" className="floating-icon" /> */}
                {/* <img src={afterEffects} alt="After Effects" className="floating-icon" />
                <img src={illustrator} alt="Illustrator" className="floating-icon" />
                <img src={capcut} alt="CapCut" className="floating-icon" />
                <img src={ps} alt="Photoshop" className="floating-icon" /> */}
                {/* Add more icons as needed */}
            </div>

            {/* Profile image section */}
            <div className="header-image-container">
                <img
                    src={vijayImage}
                    alt="Vijay"
                    className="header-image"
                />
            </div>

            {/* Header content section */}
            <div className="header-content">
            <h1 className="header-title">HI! MY NAME IS VIJAY</h1>
            <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'I am a Video Editor',
    1000,
    'I am a Graphic Designer',
    1000,
    'I am a Frontend Developer',
    1000,
    'I am a Motion Designer',
    1000,
  ]}
  font-family= {"Rock Salt"}
  speed={50}
  style={{ fontSize: '2em',
    fontWeight: '400', // or 'bold'
    letterSpacing: '0.10em', // or '1px', adjust as needed
    color: 'orange' // or '#FFA500' 
}}

  repeat={Infinity}
/>
                <h2 className="header-subtitle">IIT Ropar - Computer Science & Engineering</h2>
                <p className="header-description">
                    Welcome to my portfolio! I am a passionate software developer with expertise in data structures, algorithms, and software engineering. Explore my work and get to know more about my journey.
                </p>
                <button className="header-button">
                    Video Editing Portfolio
                </button>
            </div>
        </div>
    );
}

export default Header;
