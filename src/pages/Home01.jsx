import React from 'react';
import Header from '../components/header/Header';
import Slider01 from '../components/slider/Slider01';
import dataSlider from '../assets/fake-data/dataSlider';
import LiveBets from '../components/layouts/home/LiveBets';
import dataLiveBets from '../assets/fake-data/dataLiveBets'
import HotCollection from '../components/layouts/authors/HotCollection';
import dataHotCollection2 from '../assets/fake-data/dataHotCollection2';
import BestPlayer from '../components/layouts/BestPlayer';
import dataBestPlayer from '../assets/fake-data/dataBestPlayer';
import Create from '../components/layouts/home02/Create';
import dataCreate from '../assets/fake-data/dataCreate'
import Footer from '../components/footer/Footer';
import { Newsletters } from '../components/layouts/home/Newsletters';

const Home01 = () => {
  return <div className='home-1'>
      <Header />
      <Slider01 data={dataSlider} />
      <LiveBets data={dataLiveBets} />
      <Create data={dataCreate} />
      <HotCollection data={dataHotCollection2} />
      <BestPlayer data={dataBestPlayer} />
      <Newsletters />
      <Footer />
  </div>;
};

export default Home01;
