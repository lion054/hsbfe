import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Create from '../components/layouts/creacte-item/Create';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

const CreateItem = () => {
return <div>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Create Bet</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Create Bet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Create />
    <Newsletters />
    <Footer />
  </div>;
};

export default CreateItem;
