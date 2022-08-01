import React from 'react';
import "./Head_Header.css"
import { Routes, Route, Link } from "react-router-dom";

const Head_Header = () => {
    return (
        <div>
            <header className='header_section'>
                <nav className='navigation_bar'>
                <li className='navigation_li'>
                    <img src='' />
                </li>
                <li className='navigation_li navigation_links'>
                    <Link to="/" className='navigation_link'>Home</Link>
                    <Link to="/blog" className='navigation_link'>Blog</Link>
                    <Link to="/about" className='navigation_link'>About</Link>
                </li>
                </nav>
            </header>
            
        </div>
    );
};

export default Head_Header;