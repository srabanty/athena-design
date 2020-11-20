import React from 'react';
import services from '../../siteImages/services.png'

const Services = () => {
    return (
        <section className="py-5 services">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-5 col-sm-12 col-12">
                        <img src={services} alt="services" className="img-fluid" />
                    </div>
                    <div className="col-md-7 col-sm-12 col-12">
                        <div className="d-flex justify-content-center">
                            <div className="section-title">
                                <h2>Stay Running & Project</h2>
                                <p className="text-secondary py-3">It is a long established fact that a reader will be distracted by the <br />readable content of a page when looking at its layout. The point of <br />using Lorem Ipsum is that it has a more-or-less normal distribution <br />of letter.</p>
                                <button type="button" className="btn main-button">Contact us</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;