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
                <input type="text" placeholder="Filter 1" className="filter-input" />
                <input type="text" placeholder="Filter 2" className="filter-input" />
                <input type="text" placeholder="Filter 3" className="filter-input" />
                <input type="text" placeholder="Filter 4" className="filter-input" />
            </div>
        </section>
    );
}

export default Filter;
