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
                
            </div>
            <div class="horizontal-menu">
    <a href="#medikamente">Medikamente</a>
    <a href="#tabletten">Tabletten</a>
    <a href="#arzneimittel">Arzneimittel</a>
    <a href="#apotheke">Apotheke</a>
    <a href="#pille">Pille</a>
    <a href="#pharma">Pharma</a>
</div>

        </section>
    );
}

export default Filter;
