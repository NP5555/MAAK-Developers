import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo-2.svg'
import Projects from '../../api/project'



const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className={`wpo-site-footer ${props.ftClass}`}>
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Link onClick={ClickHandler} className="logo" to="/"><img src={Logo} alt=""/></Link>
                            </div>
                            <p>MAAK Developer is a premier architectural and interior design firm in Dubai, specializing in creating innovative spaces that blend functionality with aesthetic excellence. We transform visions into reality with precision and creativity.</p>
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Our Services</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/service-single">Perfect Planning</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single">Profesional Design</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single">Best Interior</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single">Modern Furniture</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single">Complete Decoration</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-location"></i>King Abdul Wahed Ahmed Rashid bin Shabib, Al Fawz 3rd - Office M205, Dubai, UAE</li>
                                    <li><i className="fi flaticon-telephone"></i>04 5546928 | 055 8690761</li>
                                    <li><i className="fi flaticon-email"></i>info@maakdream.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Our Gallery</h3>
                            </div>
                            <ul className="d-flex">
                                {Projects.slice(0, 6).map((project, pot) => (
                                    <li key={pot}><Link onClick={ClickHandler} to={`/project-single/${project.Id}`}><img src={project.pImg} alt="" /></Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <ul>
                            <li>&copy; 2024 MAAK Developer. All Rights Reserved.</li>
                            <li><Link onClick={ClickHandler} to="/">Terms of use |</Link> <Link onClick={ClickHandler} to="/">Privacy Environmental Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;