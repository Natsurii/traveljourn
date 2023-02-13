import React from 'react';
import globe from '../../public/assets/globe.svg'
import '../styles/Header.css'
function Header() {
    return (
        <header>
            <img src={globe} alt="globe" />
            <h1>my travel journal.</h1>
        </header>
    )
}

export default Header

