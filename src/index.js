import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/playfair-display/400-italic.css"; // Playfair-Display FONT
import '@fontsource/bebas-neue/400.css'; // Regular weight
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      {/* Preconnect links for Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Concert+One&family=Lora:ital,wght@0,400..700;1,400..700&family=Pacifico&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
</link>
      <App />
    </>
  </React.StrictMode>
);

reportWebVitals();
