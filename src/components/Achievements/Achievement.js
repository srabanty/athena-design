import React from 'react';
import './Achievement.css';
import happyClient from '../../siteImages/achivment-happy.png';
import achievement from '../../siteImages/achivment-marketing.png';
import crazyMinds from '../../siteImages/achivment-surface.png';
import runningProjects from '../../siteImages/achivment-transportation.png';
const Achievement = () => {
    return (
        <div className="achievement-section">
            <div className="container pt-5 pb-5">
                <div className="row d-flex">
                    <div className="col-md-5 pt-5">
                        <h2>Our Achievements</h2>
                        <p>It is a long estimated fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 all-achievements">
                        <div className="row pb-4">
                            <div className="col-sm-12 col-md-6 pt-2">
                                <div className="happy-client p-4">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-3">
                                            <img src={happyClient} alt=""/>
                                        </div>
                                        <div className="col-9 text-white">
                                            <h3 className="font-weight-bold">700+</h3>
                                            <h6>Happy Clients</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pt-2">
                                <div className="project-completed p-3 pt-4">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-3">
                                            <img src={achievement} alt=""/>
                                        </div>
                                        <div className="col-9">
                                            <h3 className="font-weight-bold">140+</h3>
                                            <h6>Projects Completed</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 pt-2">
                                <div className="crazy-minds p-3 pt-4">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-3">
                                            <img src={crazyMinds} alt=""/>
                                        </div>
                                        <div className="col-9">
                                            <h3 className="font-weight-bold">25+</h3>
                                            <h6>Crazy Minds</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pt-2">
                                <div className="running-project p-3 pt-4">
                                    <div className="row">
                                        <div className="col-3">
                                            <img src={runningProjects} alt=""/>
                                        </div>
                                        <div className="col-9">
                                            <h3 className="font-weight-bold">75+</h3>
                                            <h6>Completed Project</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;