import React from "react";
import { Link } from 'react-router-dom'
import maakResidence1 from '../../images/projects/maak-residence-1.jpg';
import maakResidence2 from '../../images/projects/maak-residence-2.jpg';

const About2 = () => {
    return (
        <section className="about-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="about-content">
                            <div className="section-title">
                                <span>About Us</span>
                                <h2>Building Excellence Since 2010</h2>
                            </div>
                            <div className="about-img">
                                <img src={maakResidence1} alt=""/>
                            </div>
                            <p>We are a leading construction company specializing in luxury residential and commercial developments across the UAE. Our commitment to quality and innovation has made us a trusted name in the industry.</p>
                            <div className="about-img">
                                <img src={maakResidence2} alt=""/>
                            </div>
                            <p>With over a decade of experience, we have successfully delivered numerous landmark projects, including the prestigious Maak Residence in Dubai South and the iconic Aizel Tower in Warsan.</p>
                            <div className="btn-wrap">
                                <Link to="/about" className="theme-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="about-img-wrap">
                            <div className="about-img">
                                <img src={maakResidence1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;