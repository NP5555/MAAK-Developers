import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import About from '../../components/about';
import ServiceSection from '../../components/Services';
import FunFact from '../../components/FunFact';
import TeamSection from '../../components/TeamSection';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'
import maakResidence2 from '../../images/projects/maak-residence-2.jpg';

const AboutPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'header-style-1'}/>
            <About abimg={maakResidence2}/>
            <ServiceSection/>
            <FunFact/>
            <TeamSection/>
            <Testimonial/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
