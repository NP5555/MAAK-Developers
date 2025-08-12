import React from 'react'
import SectionTitle from '../SectionTitle'

const Testimonial = (props) => {
    return (
        <div className={`wpo-service-area section-padding ${props.tClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Why Dubai?'} MainTitle={'The Smart Investment Choice'}/>
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <i className="fi flaticon-planning"></i>
                            <h2>High Rental Yields</h2>
                            <p>Up to 8–10% annual returns higher than London, New York, and Singapore.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <i className="fi flaticon-blueprint"></i>
                            <h2>Zero Property Tax</h2>
                            <p>0% on the rental income and capital gains for property investors.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <i className="fi flaticon-double-bed"></i>
                            <h2>Global Connectivity</h2>
                            <p>Home to the world's busiest airport, Dubai connects you to 200+ cities.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <i className="fi flaticon-armchair"></i>
                            <h2>World-Class Safety</h2>
                            <p>Among the safest cities globally ideal for families and long-term living.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <i className="fi flaticon-furniture"></i>
                            <h2>Smart Infrastructure</h2>
                            <p>Clean, efficient roads, metros, ports, and digitally managed utilities.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <i className="fi flaticon-interior-design"></i>
                            <h2>Business-Friendly</h2>
                            <p>100% foreign ownership, streamlined property registration, and no currency restrictions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;