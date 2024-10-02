import React from 'react';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import HireMeButton from './components/HireMeButton.js';

function App() {
    return (
        <div className="App">
            <Header />
            <Portfolio />
            <Contact />
            <HireMeButton />
        </div>
    );
}

export default App;
