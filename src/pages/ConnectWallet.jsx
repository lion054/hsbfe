import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import WalletConnect from '../components/layouts/WalletConnect';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

const ConnectWallet = () => {
  return <div>
    <Header />
    <WalletConnect />
    <Footer />
  </div>;
};

export default ConnectWallet;
