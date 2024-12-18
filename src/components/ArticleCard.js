// ArticleCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ArticleCard.css'; // Import CSS for styling

export default function ArticleCard({ title, description, link, component }) {
    return (
        <div className="article-card">
            <div className="article-card-content">
                <h3 className="article-title">{title}</h3>
                <p className="article-description">{description}</p>
                <div className="article-component">{component}</div>
                <Link to={link} className="read-more-button">Read More</Link>
            </div>
        </div>
    );
}
