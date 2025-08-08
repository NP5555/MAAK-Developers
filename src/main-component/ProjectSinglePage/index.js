import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import Projects from '../../api/project'
import RelatedProject from './related';
import Discuss from './discuss';
import Logo from '../../images/logo.svg'
import Footer from '../../components/footer';


const ProjectSinglePage = (props) => {
    const { id } = useParams()

    const projectDetails = Projects.find(item => item.Id === id)

    return (
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={projectDetails.title} pagesub={'Project'} />
            <div className="wpo-project-single-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="wpo-project-single-title">
                                                <h3>{projectDetails.title} Project</h3>
                                            </div>
                                            <p>{projectDetails.description}</p>
                                            <p>Our team of experienced professionals has been working diligently to deliver exceptional results that exceed client expectations. We combine innovative design solutions with sustainable building practices to create spaces that are both functional and aesthetically pleasing.</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="wpo-project-single-content-des-right">
                                                <ul>
                                                    <li>Location :<span>{projectDetails.location}</span></li>
                                                    <li>Category :<span>{projectDetails.category}</span></li>
                                                    <li>Area :<span>{projectDetails.area}</span></li>
                                                    <li>Status :<span>{projectDetails.status}</span></li>
                                                    <li>Project Type :<span>{projectDetails.subTitle}</span></li>
                                                    <li>Services :<span>Architecture, Interior Design, Construction</span></li>
                                                    <li>Share :<span>{projectDetails.category}, {projectDetails.subTitle}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-project-single-main-img">
                                        <img src={projectDetails.ps1img} alt=""/>
                                    </div>
                                    <div className="wpo-project-single-item list-widget">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-title">
                                                    <h3>Our Strategies</h3>
                                                </div>
                                                <p>Our comprehensive approach to {projectDetails.title} involves careful planning, innovative design, and meticulous execution to ensure the highest quality results.</p>
                                                <ul>
                                                    <li>Comprehensive site analysis and feasibility studies</li>
                                                    <li>Innovative design solutions tailored to client needs</li>
                                                    <li>Sustainable building practices and materials</li>
                                                    <li>Quality control throughout the construction process</li>
                                                    <li>Timely project delivery and client satisfaction</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-item-quote">
                                                    <p>"The team delivered exceptional results for our {projectDetails.title} project. Their attention to detail and commitment to quality exceeded our expectations. Highly recommended for any construction or design project."</p>
                                                    <span>Client - <span>{projectDetails.title}</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-project-single-item">
                                        <div className="wpo-project-single-title">
                                            <h3>Our approach</h3>
                                        </div>
                                        <p>Our approach to the {projectDetails.title} project focuses on creating sustainable, functional, and aesthetically pleasing spaces. We begin with thorough site analysis and client consultation to understand specific requirements. Our design process incorporates the latest technologies and sustainable practices, ensuring that each project not only meets current needs but also adapts to future requirements. We maintain open communication throughout the project lifecycle, ensuring transparency and client satisfaction at every stage.</p>
                                    </div>
                                    <div className="wpo-project-single-gallery">
                                        <div className="row mt-4">
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <div className="wpo-p-details-img">
                                                    <img src={projectDetails.psub1img1} alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <div className="wpo-p-details-img">
                                                    <img src={projectDetails.psub1img2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-project-single-item list-widget">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-title">
                                                    <h3>Achieved Goals</h3>
                                                </div>
                                                <ul>
                                                    <li>Successfully completed {projectDetails.title} within budget and timeline</li>
                                                    <li>Implemented sustainable design and construction practices</li>
                                                    <li>Delivered high-quality finishes and materials</li>
                                                    <li>Achieved client satisfaction and exceeded expectations</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 list-widget-s">
                                                <div className="wpo-project-single-title">
                                                    <h3>Results</h3>
                                                </div>
                                                <ul>
                                                    <li>Enhanced property value and market appeal</li>
                                                    <li>Improved functionality and user experience</li>
                                                    <li>Reduced environmental impact through sustainable design</li>
                                                    <li>Increased operational efficiency and cost savings</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <RelatedProject/>
                                    <Discuss/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;
