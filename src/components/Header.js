import React, { useState } from 'react';
import '../css/Header.css';
import vijayImage from '../Images/vijay.jpeg';
import picofme from '../ImagesVideos/picofme.png';
import { TypeAnimation } from 'react-type-animation';
import Popup from './Popup'; // Import the Popup component

function Header() {
    const [hovered, setHovered] = useState(false); 
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility

    const handlePopupToggle = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <section id="header" className="header">
        <div className="header-container">
            {/* Profile image section */}
            <div 
      className="header-image-container"
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered ? picofme : vijayImage}  // Change image on hover
        alt={hovered ? "Pic of Me" : "Vijay"} // Update alt text based on hovered state
        className={`header-image ${hovered ? 'picofme' : 'vijay-image'}`} // Apply different classes based on hover
      />
    </div>

            {/* Header content section */}
            <div className="header-content">
            <h1 className="header-title">
                    HI! MY NAME IS <span className="highlight">Vijay Dwivedi</span>
                </h1>
                <TypeAnimation
                    className="animated-text" // Add this class
                    sequence={[
                        'I am a Video Editor',
                        1000,
                        'I am a Graphic Designer',
                        1000,
                        'I am a Frontend Developer',
                        1000,
                        'I am a Motion Designer',
                        1000,
                    ]}
                    font-family={"Rock Salt"}
                    speed={50}
                    repeat={Infinity}
                />
                <h2 className="header-subtitle">IIT Ropar - Computer Science & Engineering</h2>
                <p className="header-description">
                Welcome to my portfolio! I’m a graphic designer, video editor, motion designer, and frontend developer with <b>1 Year of experience</b>. My diverse skills help create compelling visual stories that drive growth and spark innovation. Explore my work and discover how I can elevate your vision to new heights!
                    </p>
                <button className="header-button" onClick={handlePopupToggle}>
                    WHY ME ?
                </button>
            </div>

            {/* Render Popup if it is open */}
            {isPopupOpen && <Popup onClose={handlePopupToggle} />}
        </div>
        </section>
    );
}

export default Header;
