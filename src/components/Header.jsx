import React from 'react';
import './Header.css';
import logo from '../assets/images/Untitled-1.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">ALPAMEDICS</div>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." />
            </div>
            <div className="user-icon">🔍</div>
        </header>
    );
}

export default Header;
