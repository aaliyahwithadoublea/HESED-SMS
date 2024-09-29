import React from 'react';
import AboutUsHero from '../components/AboutUsHero';
import Vision from '../components/Vision';
import Team from '../components/Team';
import Location from '../components/Location';
import Questions from '../components/Questions';

const AboutUs = () => {
  return (
    <div>
      <AboutUsHero />
      <Vision />
      <Team />
      <Location />
      <Questions />
    </div>
  );
};

export default AboutUs;
