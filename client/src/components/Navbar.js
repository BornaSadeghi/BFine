import React from 'react';
import { NavbarData } from './NavbarData';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo192.png';

function Navbar() {
    return (
        <div className="nav-flexbox-wrapper">
            <div className="nav-flexbox-container-1">
                <img className="nav-logo" src={ logo } alt="logo"></img>
            </div>
            <div className="nav-flexbox-container-2">
                <div className="nav-links">
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