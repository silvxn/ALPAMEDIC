import React from 'react';
import './Filter.css';
import backgroundImage from '../assets/images/Untitled-1.png';

const Filter = () => {
    return (
        <section className="filter-section">
            <img
                className="background-image"
                src={backgroundImage}
                alt="Alpamedics"
            />
            <h1>WELCOME TO ALPAMEDICS</h1>
            <div className="filter-container">
                <input type="text" placeholder="Medikamente" className="filter-input" />
                <input type="text" placeholder="Sorten" className="filter-input" />
                <input type="text" placeholder="Pharma" className="filter-input" />
                <input type="text" placeholder="Preis" className="filter-input" />
                <p> <div className="user-icon">🔍</div></p>
            </div>
        </section>
    );
}

export default Filter;
