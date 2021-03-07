import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import Appfeature from '../components/home/feature';

function AppHome() {
  return (
    <div className='main'>
      <AppHero />
      <AppAbout />
      <Appfeature />
    </div>
  );
}

export default AppHome;
