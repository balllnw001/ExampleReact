import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"
import './Header.css'

function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="#">
                            <img src="https://i0.wp.com/www.fontshut.com/wp-content/uploads/2022/02/Harley-Davidson-Logo-Font.jpg?fit=2340%2C1552&ssl=1" />
                        </a>
                        <a href="#" id="header-name">
                            Harley Davidson
                        </a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#">HOME</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#content">CONTENT</a>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <a href="#footer">CONTACT</a>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header