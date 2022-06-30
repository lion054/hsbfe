import React from 'react';
import { Link } from 'react-router-dom';

const TopPlayer = props => {
    const data = props.data
  return (
    <div className="tf-section top-player">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-3">
                        <h3>Top Groups</h3>
                        <p className="desc">Revolutionizing the way YOU challenge your friends.</p>
                    </div>
                </div>
                {
                    data.slice(0,4).map((item,index)=> (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className={`sc-author-card style-2 ${item.active}`}>
                                <div className="card-media">
                                    <img src={item.img} alt="HandshakeBets" />
                                </div>
                                <div className="card-avatar">
                                    <img src={item.avt} alt="HandshakeBets" />
                                </div>
                                <div className="card-content">
                                    <h5><Link to="/authors">{item.name}</Link> </h5>
                                    <div className="details">{item.postion}</div>
                                    <div className="card-bottom">
                                        
                                        <Link to="/namez" className="sc-button style-2"><span>Join</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default TopPlayer;
