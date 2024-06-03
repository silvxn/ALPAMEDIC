import React from 'react';
import './Header.css';
import logo from '../assets/images/Untitled-1.png';
import cartImage from './wk3.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">ALPAMEDICS</div>
            <div className="search-container">
                <div>
                <nav>
                    <ul>
                        <li><a href="#home"><strong>Home</strong></a></li>
                        <li><a href="#products"><strong>News</strong></a></li>
                        <li><a href="#contact"><strong>Kontact</strong></a></li>
                        <li><a href="#about"> <strong>About</strong></a></li>

                        <li>
                            <a href="#warenkorb" className="warenkorb-link">
                                <img src={cartImage} alt="Warenkorb" className="cart-icon" />
                            </a>
                        </li>

                        
                    </ul>
                </nav>
                     </div>
                
            </div>
            <input type="text" className="search-input" placeholder="Search..." />
            <div className="user-icon">🔍</div>
           
                
        </header>
    );
}

export default Header;
