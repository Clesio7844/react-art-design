import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import Appfeature from '../components/home/feature';
import Appworks from '../components/home/works';
import AppFaq from '../components/home/faq';
import Appricing from '../components/home/pricing';
import AppContact from '../components/home/contact';

function AppHome() {
  return (
    <div className='main'>
      <AppHero />
      <AppAbout />
      <Appfeature />
      <Appworks />
      <AppFaq />
      <Appricing />
      <AppContact />
    </div>
  );
}

export default AppHome;
