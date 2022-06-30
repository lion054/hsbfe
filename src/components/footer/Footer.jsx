import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/post/post-recent-new-4.jpg'

import logo from '../../assets/images/logo/logo_dark.png'
import logo2x from '../../assets/images/logo/logo_dark@2x.png'

const Footer = () => {
    const [dataSocial] = useState([
        {
            icon: 'fab fa-facebook-f'
        },
        {
            icon: 'fab fa-twitter'
        },
        {
            icon: 'fab fa-linkedin-in'
        },
        {
            icon: 'fab fa-youtube'
        },
    ])

    const [dataLinkMarket] = useState([
        {
            title: 'Betting',
            link: '/item'
        },
        {
            title: 'Marketplace',
            link: '/item'
        },
        {
            title: 'Arcade',
            link: '/item'
        },
    ])

    const [dataSupport] = useState([
        {
            title: 'Privacy Policy',
            link: '/contact'
        },
        {
            title: 'Help & Support',
            link: '/contact'
        },
        {
            title: 'Ts & Cs',
            link: '/item'
        },
    ])

    const [dataRecent] = useState([
        {
            img: img1,
            title: 'McDonalds MeetUp',
            time: '25 AUG 2022',
        },
    ])

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  return (
      <div>
            <footer id="footer" className="clearfix bg-style">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="widget widget-logo">
                                <div className="logo-footer" id="logo-footer">
                                    <Link to="/">
                                        <img id="logo_footer" src={logo} alt="handshakebets"
                                            srcSet={logo2x} />
                                    </Link>
                                </div>
                               
                                <div className="widget-social">
                                    <ul>
                                        {
                                            dataSocial.map((item,index)=> (
                                                <li key={index}><Link to="#"><i className={item.icon}></i></Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                            <div className="widget widget-menu menu-marketplace">
                                <h5 className="title-widget">HSB</h5>
                                <ul>
                                    {
                                        dataLinkMarket.map((item,index)=> (
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="widget widget-menu menu-supports">
                                <h5 className="title-widget">Support</h5>
                                <ul>
                                    {
                                        dataSupport.map((item,index)=> (
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget widget-post">
                                <h5 className="title-widget">Upcoming Event</h5>
                                <ul className="post-new">
                                    {
                                        dataRecent.map((item,index)=> (
                                            <li key={index}>
                                                <div className="post-img">
                                                    <img src={item.img} alt="Post New" />
                                                </div>
                                                <div className="post-content">
                                                    <h6 className="title"><Link to="/blog-details">{item.title}</Link></h6>
                                                    <Link to="/blog-details" className="post-date"><i
                                                            className="far fa-calendar-week"></i> {item.time}</Link>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom">
                <div className="container">
                    <div className="bottom-inner">
                        Copyright © 2022 Handshake Bets
                    </div>
                </div>
            </div>
            {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
      </div>
  );
};

export default Footer;
