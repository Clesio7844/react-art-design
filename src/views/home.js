import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import Appfeature from '../components/home/feature';
import Appworks from '../components/home/works';
import AppFaq from '../components/home/faq';

function AppHome() {
  return (
    <div className='main'>
      <AppHero />
      <AppAbout />
      <Appfeature />
      <Appworks />
      <AppFaq />
    </div>
  );
}

export default AppHome;
