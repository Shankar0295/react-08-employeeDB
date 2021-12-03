import React from 'react';
import './Header.css';
// import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            {/* <Link className="title-style"></Link> */}
            <h1 className="title">Lumino Admin</h1>
            <a className="portfolio-link" target="_blank" href="/">Portfoilo</a>
        </div>
    )
}

export default Header