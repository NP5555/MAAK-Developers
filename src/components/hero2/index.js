import React from "react";
import { Link } from 'react-router-dom'
import maakResidence1 from '../../images/projects/maak-residence-1.jpg';
import maakResidence2 from '../../images/projects/maak-residence-2.jpg';
import aizelWarsan1 from '../../images/projects/aizel-warsan-1.jpg';

const Hero2 = () => {
    return (
        <section className="hero-section">
            <div className="hero-slider">
                <div className="hero-slide" style={{ backgroundImage: `url(${maakResidence1})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="hero-content">
                                    <h1>Maak Residence - Phase 2</h1>
                                    <p>Luxury residential development in Dubai South featuring modern architecture and premium amenities.</p>
                                    <Link to="/project" className="theme-btn">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="hero-slide" style={{ backgroundImage: `url(${maakResidence2})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="hero-content">
                                    <h1>Maak Residence Dubai South</h1>
                                    <p>A premium residential development combining luxury living with sustainable design principles.</p>
                                    <Link to="/project" className="theme-btn">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="hero-slide" style={{ backgroundImage: `url(${aizelWarsan1})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="hero-content">
                                    <h1>Aizel Tower Warsan</h1>
                                    <p>State-of-the-art commercial tower featuring contemporary design and sustainable building practices.</p>
                                    <Link to="/project" className="theme-btn">View Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2;