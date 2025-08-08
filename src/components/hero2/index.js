import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Hero2 extends Component {
    render() {

        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="wpo-box-style">
                <div className={`wpo-hero-slider wpo-hero-style-2 ${this.props.heroClass}`}>
                    
                        <div className="hero-wrapper">
                            <Slider {...settings}>
                                <div className="hero-slide">
                                    <div className="slide-inner" style={{ 
                                        backgroundImage: `url(/projects/WhatsApp Image 2025-08-08 at 12.10.43 PM.jpeg)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div className="slide-title">
                                                    <h2>Maak Residence - Phase 2</h2>
                                                </div>
                                                <div className="slide-title-sub">
                                                    <p>Residential Complex Extension - Expanding the luxury residential complex with modern design and sustainable practices.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="slide-btns">
                                                    <Link to="/project" className="theme-btn">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="hero-slide">
                                    <div className="slide-inner" style={{ 
                                        backgroundImage: `url(/projects/WhatsApp Image 2025-08-08 at 12.10.45 PM.jpeg)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div className="slide-title">
                                                    <h2>Maak Residence Dubai South</h2>
                                                </div>
                                                <div className="slide-title-sub">
                                                    <p>Luxury residential development featuring modern architecture and sustainable design practices.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="slide-btns">
                                                    <Link to="/about" className="theme-btn">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="hero-slide">
                                    <div className="slide-inner" style={{ 
                                        backgroundImage: `url(/projects/WhatsApp Image 2025-08-08 at 12.05.09 PM (1).jpeg)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div className="slide-title">
                                                    <h2>Aizel Tower Warsan</h2>
                                                </div>
                                                <div className="slide-title-sub">
                                                    <p>State-of-the-art commercial tower featuring contemporary design and sustainable building practices.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="slide-btns">
                                                    <Link to="/about" className="theme-btn">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                </div>
            </section>
        )
    }
}

export default Hero2;