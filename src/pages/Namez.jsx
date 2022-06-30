import React , { useState } from 'react';
//import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/background/img-login.jpg'


   
const Namez = () => {

    const [dataCategory] = useState(
        [
            {
                name: 'HSB TOKEN',
                count: '5'
            },
            {
                name: 'SHKS TOKEN',
                count: '8'
            },
            {
                name: 'GAME XP',
                count: '3'
            },
            {
                name: 'NFTs',
                count: '2'
            },
        ]
    )


  return <div>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Account</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Account</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="tf-section login-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-create-item-content">
                        <div className="form-create-item">
                            <div className="sc-heading">
                                <h3>Name or Nickname</h3>
                            </div>
                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                <input name="user" type="text" placeholder="The Lion"
                                    required />
                                <button name="submit" type="submit"
                                    className="sc-button style letter style-2"><span>Change</span> </button>
                            </form>

                            <div className="widget item wg-category">
                                </div>    
                        <div className="widget item wg-category">
                            <div className="wg-title">
                            0xfa1c731d2b808ba08261a098badf43171f955c43
                            </div>
                            <ul>
                                {
                                    dataCategory.map((item,index)=> (
                                        <li key={index}><Link to="#"><span>{item.name}</span><span>({item.count})</span></Link></li>
                                    ))
                                }
                            </ul>
                        </div>

                        </div>
                        <div className="form-background">
                            <img src={img1} alt="HandshakeBets" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Newsletters />
    <Footer />
  </div>;
};

export default Namez;
