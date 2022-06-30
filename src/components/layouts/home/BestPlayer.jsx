import React from 'react';
import { Link } from 'react-router-dom'

const BestPlayer = props => {
    const data = props.data;
  return (
    <section className="tf-section top-player-page">
        <div className="best-player-inner">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2">
                        <div className="content-left">
                            <div className="inner">
                                <h3>Leaderboard</h3>
                              
                            </div>
                        </div>
                        <div className="content-right">
                            <Link to="/explore-01" className="sc-button style letter style-2"><span>View All</span> </Link>
                        </div>
                    </div>
                </div>
                {
                    data.slice(0,6).map((item,index) => (
                        <div key={index} className="col-lg-2 col-md-4 col-6">
                            <div className="sc-author">
                                <div className="card-avatar">
                                    <img src={item.img} alt="HandshakeBets" />
                                </div>
                                <div className="infor">
                                    <h6> <Link to="/authors">{item.name}</Link> </h6>
                                    <div className="details">{item.price}</div>
                                </div>
                                <Link to="/namez" className="sc-button btn-bordered-white"><span>View</span></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  );
};

export default BestPlayer;
