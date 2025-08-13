import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero';
import About from '../../components/about';
import ProjectSection from '../../components/Projects';
import ServiceSection from '../../components/Services';
import FunFact from '../../components/FunFact';
import TeamSection from '../../components/TeamSection';
import Testimonial from '../../components/Testimonial';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'
import maakResidence1 from '../../images/projects/maak-residence-1.jpg';

const HomePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'header-style-1'}/>
            <Hero/>
            <About abimg={maakResidence1}/>
            <ProjectSection/>
            {/* <ServiceSection/> */}
            <FunFact/>
            {/* <TeamSection/> */}
            <Testimonial/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;