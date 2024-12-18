// Insights.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import Navbar from './Navbar';
import ArticleCard from './ArticleCard'; // Import the ArticleCard component
import ColourTheory from './ColourTheory'; // Import the ColourTheory component
import '../css/Insights.css'; // Import the CSS file for styling

export default function Insights() {
    return (
        <div className="insights-container">
            <Navbar />
            <div className="insights-content">
                <h2 className="insights-title">Insights</h2>

                <div className="articles-grid">
                    {/* Example Card for Colour Theory */}
                    <ArticleCard
                        title="Color Theory for Brands"
                        description="Discover the impact of colors in branding, and learn how to choose the right color palette for your brand."
                        link="/colour-theory"
                        component={<ColourTheory />} // Render the component inside the card
                    />

                    {/* Additional Placeholder Articles */}
                    <ArticleCard
                        title="Understanding Typography"
                        description="Learn the fundamentals of typography and how to use fonts to enhance your brand's visual appeal."
                        link="/typography"
                        component={<p>Typography component goes here.</p>} // Placeholder for another component
                    />

                    <ArticleCard
                        title="Effective Use of White Space"
                        description="Master the art of white space and learn how to use it to create elegant and focused designs."
                        link="/white-space"
                        component={<p>White Space component goes here.</p>} // Placeholder for another component
                    />

                    {/* Add more ArticleCards as needed */}
                </div>

                {/* Back button to Portfolio */}
                <Link to="/" className="back-button">Go Back to Portfolio</Link>
            </div>
        </div>
    );
}
