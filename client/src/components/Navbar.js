import React from 'react';
import { NavbarData } from './NavbarData';
import { Link } from 'react-router-dom';
import bloodLogo from '../assets/logo192.png';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="nav-flexbox-wrapper">
            <div className="nav-logo-container">
                <img className="nav-logo" src={ bloodLogo } alt="logo"></img>
            </div>
            <div className="nav-flexbox-item">
                <div className="navbar">
                    {
                        NavbarData.map((item, index) => {
                            return (
                                <li key={ index } className="nav-li">
                                    <Link to={item.path} className="nav-a">
                                        <span className="nav-name">{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }   
                </div>
            </div>
        </div>
    )
}

export default Navbar;