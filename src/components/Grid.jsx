import React from 'react';
import './Grid.css';

const Grid = () => {
    return (
        <section className="grid-section">
            <div className="grid-container">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div className="grid-item" key={index}>

                            <h2>Grid Element {index + 1}</h2>
                            <p>This is some content for grid item {index + 1}.</p>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Grid;
