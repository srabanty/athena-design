import React from 'react';
import logo from '../../siteImages/logo.png';
import crossIcon from '../../siteImages/cross.png';

import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <img src={logo} alt="logo" className="logo d-none d-md-block" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <div className="close-icon py-1"><img src={crossIcon} alt="crossIcon"/></div>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-center">
                        <li className="nav-item active mx-2 ">
                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Our Team</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a href="#contact">
                                <button type="button" className="btn main-button">Contact us</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;