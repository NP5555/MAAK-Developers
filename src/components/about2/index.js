import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'

const About2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-about-area-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <div className="wpo-about-img-left">
                                <img src="/projects/WhatsApp Image 2025-08-08 at 12.10.45 PM.jpeg" alt=""/>
                                    <div className="wpo-about-img-text">
                                        <h2>25+</h2>
                                        <p>Years of Experience</p>
                                    </div>
                            </div>
                            <div className="wpo-about-img-right">
                                <img src="/projects/WhatsApp Image 2025-08-08 at 12.10.44 PM.jpeg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>About Us</span>
                                <h2>We Offer You Professional Property Development</h2>
                            </div>
                            <p>MAAK Developer is a premier property development company based in Dubai, UAE. We specialize in creating exceptional residential and commercial properties that combine modern design with sustainable practices.</p>
                            <ul className="ab-list">
                                <li>We provide comprehensive property development services.</li>
                                <li>We have a professional team of architects and designers.</li>
                                <li>We work with sustainable building practices and materials.</li>
                            </ul>
                            <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About2;