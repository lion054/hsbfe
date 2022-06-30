import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/icon/icon-1.svg'
import img3 from '../../assets/images/icon/icon-3.svg'
import img5 from '../../assets/images/icon/icon-5.svg'

const WalletConnect = () => {
    const [data] = useState(
        [
            {
                img: img1,
                title: 'Meta Mask',
                class: ''
            },
            {
                img: img3,
                title: 'Fortmatic',
                class: ''
            },
            {
                img: img5,
                title: 'Coinbase Wallet',
                class: ''
            },
        ]
    )
return (
    <section className="tf-section connect-wallet">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading">
                        <h3>Connect Wallet</h3>
                    </div>
                </div>
                {
                    data.map((item,index)=> (
                        <div key={index} className="col-lg-4 col-md-4">
                            <div className={`sc-wallet ${item.class}`}>
                                <div className="icon">
                                    <img src={item.img} alt="HandshakeBets" />
                                </div>
                                <div className="content">
                                    <h4><Link to="/item-details">{item.title}</Link></h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    );
};

export default WalletConnect;
