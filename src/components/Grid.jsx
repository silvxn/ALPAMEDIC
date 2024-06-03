


import React, { useState } from 'react';
import './Grid.css';
import cartImage from './wk3.png';


const Impressum = () => {
    return (
        <section className="impressum-section">
        </section>
    );
}

const Footer = () => {
    const [selectedLink, setSelectedLink] = useState(null);

    const handleClick = (index) => {
        setSelectedLink(index);
    }

    const links1 = ['Zur Webseite', 'Aromatherapie', 'Homöopathie', 'Tee', 'Naturheilkunde', 'Naturkost', 'Gut für', 'Sortiment', 'Wissen'];
    const links2 = ['Kontakt', 'Newsletter', 'Bonuspunkte', 'Gutscheine', 'Fachkund:in werde', 'Händlerverzeichnis'];
    const links3 = ['Datenschutz', 'AGB', 'Widerrufsbelehrung'];
    const links4 = ['PayPal', 'Sepa', 'Maestro', 'Klarna'];

    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-info">
                    <h1>Impressum</h1>
                    <p>&copy; 2024 XYZ Ltd. All rights reserved.</p>
                    <p>Company Name: XYZ Ltd.</p><br />
                    <p>Address: 1234 Street Name, City, Country</p>
                </div>
                
                <div className="footer-navigation">
                    <h2>Navigation</h2>
                    <ul>
                        {links1.map((link, index) => (
                            <p key={index}>
                                <a 
                                    href={`#${link}`} 
                                    className={selectedLink === index ? 'selected' : ''} 
                                    onClick={() => handleClick(index)}
                                >
                                    {link}
                                </a>
                            </p>
                        ))}
                    </ul>
                </div>

                <div className="footer-service">
                    <h2>Service</h2>
                    <ul>
                        {links2.map((link, index) => (
                            <p key={index + links1.length}>
                                <a 
                                    href={`#${link}`} 
                                    className={selectedLink === index + links1.length ? 'selected' : ''} 
                                    onClick={() => handleClick(index + links1.length)}
                                >
                                    {link}
                                </a>
                            </p>
                        ))}
                    </ul>
                </div>
                
                <div className="footer-zahlung">
                    <h2>Zahlungarten</h2>
                    <ul>
                        {links4.map((link, index) => (
                            <p key={index + links1.length + links2.length}>
                                <a 
                                    href={`#${link}`} 
                                    className={selectedLink === index + links1.length + links2.length ? 'selected' : ''} 
                                    onClick={() => handleClick(index + links1.length + links2.length)}
                                >
                                    {link}
                                </a>
                            </p>
                        ))}
                    </ul>
                    <h2>Versand</h2>
                    <ul>
                        {links4.map((link, index) => (
                            <p key={index + links1.length + links2.length + links3.length}>
                                <a 
                                    href={`#${link}`} 
                                    className={selectedLink === index + links1.length + links2.length + links3.length ? 'selected' : ''} 
                                    onClick={() => handleClick(index + links1.length + links2.length + links3.length)}
                                >
                                    {link}
                                </a>
                            </p>
                        ))}
                    </ul>
                </div>

                <div className="footer-legal">
                    <h2>Rechtliches</h2>
                    <ul>
                        {links3.map((link, index) => (
                            <p key={index + links1.length + links2.length + links3.length}>
                                <a 
                                    href={`#${link}`} 
                                    className={selectedLink === index + links1.length + links2.length + links3.length + links4.length ? 'selected' : ''} 
                                    onClick={() => handleClick(index + links1.length + links2.length + links3.length + links4.length)}
                                >
                                    {link}
                                </a>
                            </p>
                        ))}
                    </ul>
                    <h2>Wir beraten Sie gerne!</h2>
                    <ul>
                        <p>Phone: +123456789</p>
                        <p>Montag-Freitag: 8.00-19.00 Uhr</p>
                        <p>Samstag: 9.00-18.00 Uhr</p>
                        <p>Email: contact@xyz.com</p><br />
                    </ul>
                </div>
            </div>
        </footer>
    );
}

const data = [
    {
        imgSrc: 'https://cdn.pixabay.com/photo/2015/05/08/20/54/drugs-758837_960_720.jpg',
        price: '€29.99',
        stars: 4,
        reviews: 34,
        name: 'Paracetamol'
    },
    {
        imgSrc:'https://www.medikamente-per-klick.de/images/products/medikamenteperklick/gross/02193227_g.jpg',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc: 'https://www.medikamente-per-klick.de/images/products/medikamenteperklick/gross/03216769_g.jpg',
        price: '€9.99',
        stars: 2,
        reviews: 18,
        name: 'Aspirine'
    },
    {
        imgSrc:'https://www.medikamente-per-klick.de/images/products/medikamenteperklick/gross/15194702_g.jpg',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://cdn.shop-apotheke.com/images/650x0/D05/746/661/D05746661-p10.webp',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://medice.com/_next/image?url=https%3A%2F%2Fmedice.com%2Fapi%2Fde-de%2Fprodukte%2Fadhs-erwachsene%2Fmedikinet-r-adult%2F%40%40images%2F065ae0ea-7124-45ea-bd21-8072d8ca015b.jpeg&w=1920&q=90',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://www.pharmaindustrie-online.de/sites/default/files/field/image/bayer_healthcare_aspirin_innovation.jpg',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://cdn8.apopixx.de/1000/web_schraeg/10836596.jpg',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc:'https://via.placeholder.com/200',
        price: '€39.99',
        stars: 5,
        reviews: 42,
        name: 'Ibuprofen'
    },
    {
        imgSrc: 'https://via.placeholder.com/200',
        price: '€9.99',
        stars: 2,
        reviews: 18,
        name: 'Aspirine'
    },
    {
        imgSrc: 'https://via.placeholder.com/200',
        price: '€9.99',
        stars: 2,
        reviews: 18,
        name: 'Aspirine'
    },
    {
        imgSrc: 'https://via.placeholder.com/200',
        price: '€9.99',
        stars: 2,
        reviews: 18,
        name: 'Aspirine'
    },
    {
        imgSrc: 'https://via.placeholder.com/200',
        price: '€9.99',
        stars: 2,
        reviews: 18,
        name: 'Aspirine'
    },
    {
        imgSrc: 'https://via.placeholder.com/200',
        price: '€9.99',
        stars: 2,
        reviews: 18,
        name: 'Aspirine'
    },
    {
        imgSrc: 'https://via.placeholder.com/200',
        price: '€9.99',
        stars: 2,
        reviews: 18,
        name: 'Aspirine'
    },
    {
        imgSrc: 'https://cdn.pixabay.com/photo/2019/09/22/19/52/pharmacy-4496869_960_720.jpg',
        price: '€9.99',
        stars: 2,
        reviews: 18,
        name: 'Aspirine'
    },
    {
        imgSrc: 'https://via.placeholder.com/200',
        price: '€9.99',
        stars: 4,
        reviews: 18,
        name: 'Aspirine'
    },
    {
        imgSrc: 'https://via.placeholder.com/200',
        price: '€9.99',
        stars: 3,
        reviews: 18,
        name: 'Aspirine'
    },
    {
        imgSrc: 'https://cdn.pixabay.com/photo/2019/04/27/05/27/people-4159313_960_720.jpg',
        price: '€9.99',
        stars: 5,
        reviews: 18,
        name: 'Aspirine'
    },
    // Ajoutez d'autres éléments de données ici
];

const Grid = () => {
    return (
        <div>
            <Impressum />
            <section className="grid-section">
                <div className="grid-container">
                    {data.map((item, index) => (
                        <div className="grid-item" key={index}>
                            <a href="linksZurProduktsdetails"><img src={item.imgSrc} alt={`Item ${index + 1}`} /></a>  
                            <p><strong>{item.name}</strong></p>
                            <p>Preis: {item.price}</p>
                            <a href="bewertungenId"><p>{'★'.repeat(item.stars)}<br />({item.reviews} Bewertungen)</p></a>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Grid;
