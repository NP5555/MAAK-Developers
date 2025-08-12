import React from 'react'
import { Link } from 'react-router-dom'
import LocalVideoModal from '../../components/LocalVideoModal'


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
                                <span>About MAAKDREAM</span>
                                <h2>A Legacy Continues from Pakistan to Dubai</h2>
                            </div>
                        <h5>Founded in 1951, MAAKSONS has grown into one of Pakistan's most trusted construction powerhouses, now expanding internationally through MAAKDREAM in Dubai.</h5>
                        <p>MAAKDREAM is the real estate brand of the future, born from the legacy of MAAKSONS Engineering Corporation Ltd. With over 70 years of experience in delivering national megaprojects, MAAKDREAM brings the same discipline, quality, and visionary planning to the world of lifestyle development.</p>
                        
                        <div className="company-highlights">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="highlight-item">
                                        <h6><i className="fi flaticon-planning"></i> Over 7 Decades</h6>
                                        <p>Continuous operations in engineering, construction, and urban development</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="highlight-item">
                                        <h6><i className="fi flaticon-blueprint"></i> Specialized Expertise</h6>
                                        <p>Roads, bridges, embassies, tunnels, flyovers, and commercial towers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="btns">
                            <Link to="/project" onClick={ClickHandler} className="theme-btn">View Our Projects</Link>
                            <ul>
                                <li className="video-holder">
                                    <LocalVideoModal/>
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