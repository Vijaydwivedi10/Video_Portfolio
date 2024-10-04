// Articles.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar'; 
import '../css/Insights.css'; // Import the CSS file for styling

export default function Insights() {
    return (
        <div className="insights-container">
            <Navbar />
            <div className="insights-content">
                <h2 className="insights-title">Insights</h2>
                <p className="insights-subtitle">Explore a collection of knowledge, techniques, and insights for editors and creators.</p>
                <div className="coming-soon">
                    <h3>COMING SOON</h3>
                    <p>Stay tuned for exciting articles and resources!</p>
                </div>
                <Link to="/" className="back-button">Go Back to Portfolio</Link> {/* Link to Portfolio */}
            </div>
        </div>
    );
}
