// Navigation.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    const [activeLink, setActiveLink] = useState(null);


    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeClassName="active" onClick={() => handleSetActiveLink("/")}>Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active" onClick={() => handleSetActiveLink("/about")}>About</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active" onClick={() => handleSetActiveLink("/contact")}>Contact</NavLink></li>
            </ul>
        </div>
    );
}

export default Navigation;
