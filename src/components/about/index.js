import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'


const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-about-area section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={props.abimg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>About MAAK Developer</span>
                                <h2>Building Excellence in Property Development</h2>
                            </div>
                        <h5>Leading Dubai's real estate market with innovative residential and commercial developments since 2010</h5>
                        <p>MAAK Developer is a premier property development company based in Dubai, UAE. We specialize in creating exceptional residential and commercial properties that combine modern design with sustainable practices. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in Dubai's real estate sector.</p>
                            <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">View Our Projects</Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                         Watch Our Story
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

export default About;