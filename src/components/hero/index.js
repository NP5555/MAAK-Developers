import React from "react";
import { Link } from 'react-router-dom'
import maakResidence1 from '../../images/projects/maak-residence-1.jpg';

const Hero =() => {
    return (
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-7 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div data-swiper-parallax="200" className="slide-visible-text">
                                        <h2>MAAK</h2>
                                    </div>
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>Building Your Dream Home With <span>Excellence</span></h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-btn">
                                        <Link className="theme-btn" to="/project">Discover Properties</Link>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <img 
                            src={maakResidence1} 
                            alt="Maak Residence Phase 2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;