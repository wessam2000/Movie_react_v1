// src/components/Navbar.js
import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.className = theme;
    }, [theme])


    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <nav className={`app ${theme}`}>
            <h1>Movie App</h1>

            <div>
                <a href="#">Home</a>
                <a href="#">Movies</a>
                <a href="#">Series</a>
                <a href="#">Contact</a>
                <button className='toggle-button' onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </nav>
    );
};

export default Navbar;
