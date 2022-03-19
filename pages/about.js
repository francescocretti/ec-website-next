import { useState } from 'react';

import AnimatedBackground from '../components/AnimatedBackground';

import { useMountEffect } from '../hooks/toolkit';

import docks from '../assets/ec_docks_1.jpg';

const About = () => {

  const [sohwBg, setShohwBg] = useState(false);

  useMountEffect(() => {
    setTimeout(() => {
      setShohwBg(true)
    }, 500)
  });

  return (
    <div className='relative w-screen h-screen'>
      <AnimatedBackground
        toggle={sohwBg}
        src={docks.src}
        opacity={.6}
      />
    </div>
  );
};

export default About;