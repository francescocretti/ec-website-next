import { useState } from 'react';

import Container from '../components/Container';

import { useMountEffect } from '../hooks/toolkit';

import image from '../assets/about-min.png';

const About = () => {
  return (
    <>
      <Container bgImage={image} />
    </>
  );
};

export default About;