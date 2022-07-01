import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Countdown from "react-countdown";

const LiveBets = props => {
    const data = props.data;
  return (
    <section className="tf-live-auctions tf-section bg-color-1">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="sc-heading style-2 has-icon">
                    <div className="content-left">

                        <div className="inner">
                            <div className="group">
                                <div className="icon"><i className="ripple"></i></div>
                                <h3>Trending Bets</h3>
                            </div>
                            <p className="desc">Get Matched With The Right Bet proposals In Minutes to shake on. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
            <div className="swiper-container">
                <div className="swiper-wrapper live-auc">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}

                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                },
                            767: {
                                slidesPerView: 2,
                            },
                            991: {
                                slidesPerView: 3,
                            },
                            1300: {
                                slidesPerView: 4,
                                },
                            }}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        >
                        {
                            data.map((item,index) => (
                                <SwiperSlide key={index}>
                                    <LiveBetsItem item={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
                
            </div>
        </div>
    </div>
</section>
  );
};

const LiveBetsItem = props => (

    <div className="swiper-slide">
        <div className="slider-item">
            <div className="sc-product-item">
                <div className="product-img">
                    <img src={props.item.img} alt="HandshakeBets" />
                    <div className="countdown">
                    <Countdown date={Date.now() + 500000000}>
                        <span>You are good to go!</span>
                    </Countdown>
                    </div>
                    <Link to="/connect-wallet"
                        className="sc-button style letter"><span>Place Bet</span></Link>
                    <label>{props.item.tags}</label>
                </div>
                <div className="product-content">
                    <h5 className="title"><Link to="/item-details">"{props.item.title}"</Link> </h5>
                    <div className="product-author flex">
                        <div className="avatar">
                            <img src={props.item.imgAuthor} alt="HandshakeBets" />
                        </div>
                        <div className="infor">
                            <div className="author-name"><Link to="/authors">{props.item.name}</Link></div>
                            <span>Creator</span>
                        </div>
                    </div>
                    <div className="product-price">
                        <div className="title">Bet Value</div>
                        <div className="price">
                            <span>{props.item.price}</span>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default LiveBets;
