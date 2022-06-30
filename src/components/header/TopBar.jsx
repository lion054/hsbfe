import React from 'react';
import { Link } from 'react-router-dom'
import Countdown from "react-countdown";

const TopBar = () => {
  return    <div className="topbar">
                <div className="container">
                    <div className="topbar-inner flex">
                        <div className="menu-options flex">
                           
                            
                        </div>
                        <div className="topbar-right flex">
                            <span>NFT Launch Countdown</span>
                            <div className="countdown">
                                <Countdown date={Date.now() + 500000000}>
                                    <span>You are good to go!</span>
                                </Countdown>
                            </div>
                            <ul className="socical-icon flex">
                                <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-dribbble"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>;
};

export default TopBar;
