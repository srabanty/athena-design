import React from 'react';
import './Footer.css';
import logo from '../../siteImages/logo.png';
import facebook from '../../siteImages/footer-facebook.png';
import twitter from '../../siteImages/footer-twitter.png';
import linkedIn from '../../siteImages/footer-linkedin.png';
import dribble from '../../siteImages/footer-dribbble.png';
import be from '../../siteImages/Be.png';
const Footer = () => {
    return (
        <div className="footer-area pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="row d-flex">
                            <img className="logo" src={logo} alt="" />
                        </div>
                        <div className="pt-5 row footer-link d-flex">
                            <img className="mr-3" src={facebook} alt="" />
                            <img className="mr-3" src={twitter} alt="" />
                            <img className="mr-3" src={linkedIn} alt="" />
                            <img className="mr-3" src={dribble} alt="" />
                            <img src={be} alt="" />
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <h5>Features</h5>
                        <h5>Enterprise</h5>
                        <h5>Pricing</h5>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <h5>Blog</h5>
                        <h5>Help Center</h5>
                        <h5>Contact us</h5>
                        <h5>Status</h5>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <h5>About us</h5>
                        <h5>Terms of service</h5>
                        <h5>Security</h5>
                        <h5>Login</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;