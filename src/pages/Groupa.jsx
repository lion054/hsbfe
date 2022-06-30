import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HotCollection from '../components/layouts/authors/HotCollection';
import dataHotCollection2 from '../assets/fake-data/dataHotCollection2';

const Groupa = () => {
  return <div className='explore'>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">HSB Groups</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>HSB Groups</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     <HotCollection data={dataHotCollection2} />
      <Footer />
  </div>;
};

export default Groupa;
