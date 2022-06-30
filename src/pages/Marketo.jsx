import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import TrendingCollections from '../components/layouts/home/TrendingCollections';
import dataTrendingCollections from '../assets/fake-data/dataTrendingCollections';

const Marketo = () => {
  return <div className='explore'>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Marketplace</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Marketplace</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <TrendingCollections data={dataTrendingCollections} />
      <Footer />
  </div>;
};

export default Marketo;
