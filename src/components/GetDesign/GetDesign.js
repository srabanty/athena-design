import React from 'react';
import './GetDesign.css';
const GetDesign = () => {
    return (
        <div className="get-design text-center">
            <h2 className="pb-2">Get Your Design right, right now</h2>
            <p  className="pb-3"><strong>Be the first know our latest offers and updates!</strong></p>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-sm-12 col-md-6">
                        <div className="row shadow-secondary input-container d-flex justify-content-between">
                            <input type="text" placeholder="Enter your email address"/>
                            <button className="started-btn">Get Started</button>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default GetDesign;