import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'

const About3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-about-area-s3 section-padding">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src="/projects/WhatsApp Image 2025-08-08 at 12.10.43 PM.jpeg" alt=""/>
                            <div className="wpo-about-img-text">
                                <h2>25+</h2>
                                <p>Years of Experience</p>
                                <div className="about-shape">
                                    <img src="/projects/WhatsApp Image 2025-08-08 at 12.10.42 PM.jpeg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>About MAAK Developer</span>
                                <h2>Building Excellence in Property Development</h2>
                            </div>
                            <h5>Leading Dubai's real estate market with innovative residential and commercial developments since 2010</h5>
                            <p>MAAK Developer is a premier property development company based in Dubai, UAE. We specialize in creating exceptional residential and commercial properties that combine modern design with sustainable practices. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in Dubai's real estate sector.</p>
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

export default About3;