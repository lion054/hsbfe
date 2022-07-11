import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import TeamItem from '../team-item';
import { Link } from 'react-router-dom';

Team.propTypes = {
    data: PropTypes.array,
};

function Team(props) {

    const {data} = props;

    const [dataBlock] = useState({
        subtitle: 'Our team',
        title: 'Meet our TEAM',
        desc: 'Who we are',
        text: 'The first ever Play-to-Earn, Peer-to-Peer betting game on the Polygon Blockchain. Create custom Handshake Bets on anything, challenge your friends, and submit results with photo/video proof. Climb the leaderboard, earn $SHKS, and upgrade your NFT avatar.  Lets make life more fun together.',
        desc1: 'About Our Squad',
        text1 : 'We are a competitive group of friends who love to challenge each other in everything we do.  We place bets while playing golf, drinking at the bar, making dinner, playing pick-up sports, ripping Mario Kart... you get the point.  We all believe that life is simply more fun with something at stake, so we decided to build a community around that belief.'
    })

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="tf-section tf-team gallery">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="tf-title st2 mb-49" data-aos="fade-up" data-aos-duration="800">
                            <p className="h8 sub-title">{dataBlock.subtitle}</p>
                            <h4 className="title">{dataBlock.title}</h4>
                        </div>
                        <div className="content mobie-30 mb-40" data-aos="fade-up" data-aos-duration="800">
                            <div className="h7 txt-tranf-cap m-b16">
                                {dataBlock.desc}
                            </div>
                            <p>{dataBlock.text}</p>
                        </div>

                        <div className="content mobie-30" data-aos="fade-up" data-aos-duration="800">
                            <div className="h7 txt-tranf-cap m-b16">
                                {dataBlock.desc1}
                            </div>
                            <p>{dataBlock.text1}</p>
                        </div>
                    </div>
                    <div className="col-xl-7  col-md-12">
                        <div className="gallery">
                            <Swiper 
            
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="gallery-slider"
                            >
            
                                {
                                    data.map(item => (
                                        <SwiperSlide key={item.id}>
                                            <div className="team-box">   
                                            <img src={item.img} alt="" />
                                                <div className="content">
                                                    <h5><Link to="/nft-item-details">{item.name}</Link></h5>
                                                    <p>{item.position}</p>

                                                    <div className="h7 txt-tranf-cap m-b16">
                                                    My Favorite Handshake Bet:
                                                     </div>
                                                    <p className="desc">“{item.description}”</p>
                                                    <ul className="social">
                                                        {
                                                            item.listsocial.map(icon => (
                                                                <li key={icon.id}>
                                                                    <Link to={icon.link}><i className={icon.icon}></i></Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <Swiper
                                
                                 onSwiper={setThumbsSwiper}
                                spaceBetween={20}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 5,
                                        },
                                    767: {
                                        slidesPerView: 7,
                                    },
                                    991: {
                                        slidesPerView: 6,
                                    },
                                }}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="gallery-thumbs"
                            >
                                {
                                    data.map(item => (
                                        <SwiperSlide key={item.id}>
                                            <div className="image"><img src={item.img} alt="" /></div>
                                        </SwiperSlide>
                                    ))
                                    
                                }
                            </Swiper> 
                        </div>
                                       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
