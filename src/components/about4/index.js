import React from "react";
import { Link } from 'react-router-dom'
import maakResidence1 from '../../images/projects/maak-residence-1.jpg';
import maakResidence2 from '../../images/projects/maak-residence-2.jpg';

const About4 = () => {
    return (
        <section className="about-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="about-content">
                            <div className="section-title">
                                <span>About Us</span>
                                <h2>Innovation Meets Tradition</h2>
                            </div>
                            <div className="about-img">
                                <img src={maakResidence1} alt=""/>
                            </div>
                            <p>We combine cutting-edge technology with time-tested construction methods to create buildings that stand the test of time while meeting modern needs.</p>
                            <div className="about-img">
                                <img src={maakResidence2} alt=""/>
                            </div>
                            <p>Our approach integrates sustainable practices with luxury design, ensuring that every project contributes positively to the environment and community.</p>
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

export default About4;