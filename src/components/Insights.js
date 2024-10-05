import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 
import '../css/Insights.css'; // Import the CSS file for styling
import Papa from 'papaparse'; // CSV parsing library

export default function Insights() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    // URL for your published Google Sheet as CSV
    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQp6QkqdeAVNNHdguT2JGg39fpP9XtiMs5UAimqU_EyLQr79whxQauZrQ6RDIXOQygd8oODzhq-Pn1l/pub?output=csv';

    // Fetch data from the published Google Sheet (CSV)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(SHEET_URL);
                const csvData = await response.text();

                // Parse the CSV data using PapaParse
                Papa.parse(csvData, {
                    header: true,
                    complete: (result) => {
                        const articlesData = result.data.map(entry => ({
                            title: entry.title, // Adjust this according to your sheet headers
                            content: entry.content, // Adjust according to your sheet
                            imageUrl: entry.imageurl // Adjust according to your sheet
                        }));
                        setArticles(articlesData);
                        setLoading(false);
                    },
                    error: (error) => {
                        console.error('Error parsing CSV:', error);
                    }
                });
            } catch (error) {
                console.error('Error fetching data from Google Sheets:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="insights-container">
            <Navbar />
            <div className="insights-content">
                <h2 className="insights-title">Insights</h2>
                <p className="insights-subtitle">Explore a collection of knowledge, techniques, and insights for editors and creators.</p>

                {loading ? (
                    <p>Loading articles...</p>
                ) : (
                    <div className="articles-list">
                        {articles.map((article, index) => (
                            <div key={index} className="article">
                                <h3>{article.title}</h3>
                                <p>{article.content}</p>
                                {article.imageUrl && <img src={article.imageUrl} alt={article.title} className="article-image" />}
                            </div>
                        ))}
                    </div>
                )}

                <Link to="/" className="back-button">Go Back to Portfolio</Link>
            </div>
        </div>
    );
}
