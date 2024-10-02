import React from 'react';
import '../css/Popup.css'; // Make sure to create a CSS file for the Popup styles

function Popup({ onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close-button" onClick={onClose}>
                    &times; {/* Close button */}
                </button>
                <h2 className="popup-heading">Why Me?</h2>
                <p className="popup-paragraph">
                    Here are a few reasons why you should consider me:
                </p>
                <ul className="popup-list">
                    <li className="popup-list-item">Extensive experience in video editing and graphic design.</li>
                    <li className="popup-list-item">Strong knowledge of data structures and algorithms.</li>
                    <li className="popup-list-item">Proficiency in various software tools, including Adobe Premiere Pro and After Effects.</li>
                    <li className="popup-list-item">Passion for creating engaging and high-quality content.</li>
                    <li className="popup-list-item">Proven ability to work under tight deadlines and deliver results.</li>
                </ul>
            </div>
        </div>
    );
}

export default Popup;
