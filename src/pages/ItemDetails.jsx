import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Countdown from 'react-countdown';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/avatar/avt-6.jpg'
import img2 from '../assets/images/avatar/avt-2.jpg'
import img3 from '../assets/images/avatar/avt-4.jpg'
import imgdetail1 from '../assets/images/product-item/auction-detail.jpg'
import avt1 from '../assets/images/avatar/avt-4.jpg'
import avt2 from '../assets/images/avatar/avt-6.jpg'
import avt3 from '../assets/images/avatar/avt-3.jpg'

const ItemDetails = () => {
    const [dataHistory] = useState(
        [
            {
                img: img1,
                name:"@Johnson",
                time: "8 hours ago ",
                price: "25 HSBC ",
            },
            {
                img: img2,
                name:"@Johnson",
                time: "8 hours ago ",
                price: "25 HSBC ",
            },
            {
                img: img3,
                name:"@Johnson",
                time: "8 hours ago ",
                price: "25 HSBC ",
            },
        ]
    )
  return <div className='item-details'>
        <Header />
       
        <section className="tf-section item-details-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="item-media">
                                <div className="media">
                                    <img src={imgdetail1} alt="HandshakeBets" />
                                </div>
                                <div className="countdown style-2">
                                    <Countdown  date={Date.now() + 500000000} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="content-item">
                                <h3> Djokovic Will not Play on Tuesday</h3>
                                <p className="mg-bt-42">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                    ipsam voluptatem quia voluptas sit aspernatur aut</p>
                                <div className="author-item">
                                    <div className="avatar">
                                        <img src={avt1} alt="HandshakeBets" />
                                    </div>
                                    <div className="infor">
                                        <div className="create">Created By</div>
                                        <h6><Link to="/authors">Lion</Link> </h6>
                                       
                                    </div>
                                </div>
                                <ul className="list-details-item">
                                    <li><span className="name">Current Bet Value</span><span
                                            className="price">500 Coins</span> </li>
                                    <li> Challengers - 2</li>
                                </ul>
                                <div className="author-bid">
                                    <div className="author-item">
                                        <div className="avatar">
                                            <img src={avt2} alt="HandshakeBets" />
                                        </div>
                                        <div className="infor">
                                            <h6><Link to="/authors">Keith J. Kelley</Link> </h6>
                                            <div className="create">Challenger</div>
                                        </div>
                                    </div>
                                    <div className="author-item">
                                        <div className="avatar">
                                            <img src={avt3} alt="HandshakeBets" />
                                        </div>
                                        <div className="infor">
                                            <h6><Link to="/authors">David Michels</Link> </h6>
                                            <div className="create">Challenger</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="infor-bid">
                                    <div className="content-left">
                                        <h6>Highest Bet</h6>
                                        <div className="price">93 HSBC</div>
                                    </div>
                                    <div className="pagi">1 Of 9</div>
                                </div>
                                <Link to="/connect-wallet"
                                    className="sc-button style letter style-2 style-item-details"><span>Support</span>
                                </Link>
                                
                                <Link to="/connect-wallet"
                                    className="sc-button style letter style-2 style-item-details"><span>Challange</span>
                                </Link>
                                <div className="flat-tabs themesflat-tabs">
                                <Tabs>
                                        <TabList>
                                        <Tab>Challengers</Tab>
                                        <Tab>Supporters</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <ul className="bid-history-list">
                                            {
                                                dataHistory.map((item, index) => (
                                                    <li key={index}>
                                                        <div className="content">
                                                            <div className="author-item">
                                                                <div className="avatar">
                                                                    <img src={item.img} alt="HandshakeBets" />
                                                                </div>
                                                                <div className="infor">
                                                                    <p>Challenge listed for <span className="status">{item.price}</span> 
                                                                    {item.time}
                                                                        by <span className="creator">{item.name}</span> </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                            </ul>
                                        </TabPanel>
                                        <TabPanel>
                                            <ul className="bid-history-list">
                                                <li>
                                                    <div className="content">
                                                        <div className="author-item">
                                                            <div className="avatar">
                                                                <img src={img1} alt="HandshakeBets" />
                                                            </div>
                                                            <div className="infor">
                                                                <p>Supoort listed for <span className="status">25 HSBC 8</span>
                                                                    hours ago
                                                                    by <span className="creator">@Johnson</span> </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </TabPanel>
                                    </Tabs>
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

export default ItemDetails;
