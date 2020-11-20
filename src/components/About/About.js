import React from 'react';
import './About.css'
import about1 from '../../siteImages/about-1.png'
import about2 from '../../siteImages/about-2.png'
import about3 from '../../siteImages/about-3.png'
import about4 from '../../siteImages/about-4.png'

const About = () => {
    return (
        <section className="text-center py-5 about">
            <div className="container">
                <div className="section-title">
                    <h2 className="section-heading">What we do</h2>
                    <p className="text-secondary py-3">Our main focus is to make the User Experience very <br />simple and easy. Simplicity is our Strength.</p>
                </div>
                <div className="about-content row py-3">
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="single-about p-4 p-sm-2 my-sm-2 my-2">
                            <img src={about1} alt="about" className="img-fluid mt-4"/>
                            <h5 className="pt-3">Experience Design</h5>
                            <p className="text-secondary py-1">The point of using Lorem <br />Ipsum is that it has a more-or-<br />less normal.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="single-about p-4 p-sm-2 my-sm-2 my-2">
                            <img src={about2} alt="about" className="img-fluid mt-4"/>
                            <h5 className="pt-3">Interface Design</h5>
                            <p className="text-secondary py-1">The point of using Lorem <br />Ipsum is that it has a more-or-<br />less normal.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="single-about p-4 p-sm-2 my-sm-2 my-2">
                            <img src={about3} alt="about" className="img-fluid mt-4"/>
                            <h5 className="pt-3">Prototyping</h5>
                            <p className="text-secondary py-1">The point of using Lorem <br />Ipsum is that it has a more-or-<br />less normal.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="single-about p-4 p-sm-2 my-sm-2 my-2">
                            <img src={about4} alt="about" className="img-fluid mt-4"/>
                            <h5 className="pt-3">Illustration</h5>
                            <p className="text-secondary py-1">The point of using Lorem <br />Ipsum is that it has a more-or-<br />less normal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;