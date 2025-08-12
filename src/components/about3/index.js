import React from "react";
import { Link } from 'react-router-dom'
import maakResidence1 from '../../images/projects/maak-residence-1.jpg';
import maakResidence2 from '../../images/projects/maak-residence-2.jpg';

const About3 = () => {
    return (
        <section className="about-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="about-content">
                            <div className="section-title">
                                <span>About Us</span>
                                <h2>Excellence in Every Project</h2>
                            </div>
                            <div className="about-img">
                                <img src={maakResidence1} alt=""/>
                            </div>
                            <p>Our team of experienced professionals is dedicated to delivering exceptional quality in every project we undertake. We believe in creating spaces that inspire and endure.</p>
                            <div className="about-img">
                                <img src={maakResidence2} alt=""/>
                            </div>
                            <p>From concept to completion, we ensure that every detail meets our high standards of excellence. Our portfolio includes some of the most prestigious developments in the region.</p>
                            <div className="btn-wrap">
                                <Link to="/about" className="theme-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="about-img-wrap">
                            <div className="about-img">
                                <img src={maakResidence2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About3;