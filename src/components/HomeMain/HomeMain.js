import React from 'react';
import Header from '../Header/Header';
import './HomeMain.css'
import homeBanner from '../../siteImages/home-banner.png'

const HomeMain = () => {
    return (
        <section className="home-main">
            <div className="container">
                <Header />
                <div className="row d-flex align-items-center justify-content-center py-5 mt-5">
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="section-title">
                            <h1>Florence <br />agency</h1>
                            <p className="text-secondary py-3">Lorem Ipsum has been the industry's standard dummy text ever <br />since the 1500s, when an unknown printer took a galley of type and<br /> scrambled it to make a type specimen book.</p>
                            <button type="button" className="btn main-button">See Pricing</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <img src={homeBanner} alt="homeBanner" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMain;