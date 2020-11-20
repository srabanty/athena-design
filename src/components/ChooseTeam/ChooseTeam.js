import React from 'react';
import './ChooseTeam.css';

const ChooseTeam = () => {
    return (
        <div className=" team text-center pt-5 pb-5">
            <h2 className="pb-5">Choose Your Dedicated Team</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="basic shadow-gray pt-5 pb-5">
                            <h3 className="font-weight-bold">$199</h3>
                            <p><strong>For Basic</strong></p>
                            <div className="main-border"></div>
                            <h6 className="pt-4 pb-2">Homepage</h6>
                            <h6 className="pb-2">No Inner Page</h6>
                            <h6 className="pb-2">Asset file</h6>
                            <h6 className="pb-2">Source file</h6>
                            <h6 className="pb-2">Free stock photos</h6>
                            <h6 className="pb-2">10 Days free support</h6>
                            <h6 className="pb-2">24/7</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="basic shadow-main pt-5 pb-5">
                        <h3 className="font-weight-bold">$399</h3>
                            <p><strong>For Preferred</strong></p>
                            <div className="white-border"></div>
                            <h6 className="pt-4 pb-2">Homepage</h6>
                            <h6 className="pb-2">4 Inner Page</h6>
                            <h6 className="pb-2">Asset file</h6>
                            <h6 className="pb-2">Source file</h6>
                            <h6 className="pb-2">Free stock photos</h6>
                            <h6 className="pb-2">10 Days free support</h6>
                            <h6 className="pb-4">24/7</h6>
                            <button className="pr-4 pl-4 text-white btn-designed">Order Now</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="basic shadow-gray pt-5 pb-5">
                        <h3 className="font-weight-bold">$599</h3>
                            <p><strong>For Elite</strong></p>
                            <div className="main-border"></div>
                            <h6 className="pt-4 pb-2">Homepage</h6>
                            <h6 className="pb-2">No Inner Page</h6>
                            <h6 className="pb-2">Asset file</h6>
                            <h6 className="pb-2">Source file</h6>
                            <h6 className="pb-2">Free stock photos</h6>
                            <h6 className="pb-2">10 Days free support</h6>
                            <h6 className="pb-2">24/7</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseTeam;