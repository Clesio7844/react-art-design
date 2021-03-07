import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import Appfeature from '../components/home/feature';
import Appworks from '../components/home/works';

function AppHome() {
  return (
    <div className='main'>
      <AppHero />
      <AppAbout />
      <Appfeature />
      <Appworks />
    </div>
  );
}

export default AppHome;
