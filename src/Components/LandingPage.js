import React from 'react';
import NavBar from './NavBar';
import './LandingPage.css'
import HeroContent from './HeroContent';
import Introduction from './Introduction';
import ChooseUs from './ChooseUs';
import AreaOfPractices from './AreaOfPractices';
import Clients from './Clients';
import Team from './Team';
import Faq from './Faq';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className='main'>
        <div className='hero-header'> 
        <NavBar />
        <HeroContent />
        </div>
        <div className='background-content'>
          <div className='body-wrapper'>
           <Introduction />
           <ChooseUs />
           <AreaOfPractices />
           <Clients />
           <Team />
           <Faq />
           <NewsLetter />
          </div>
          <Footer />
        </div>
    </div>
  )
}

export default LandingPage
