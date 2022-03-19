import { useState } from 'react';

import AnimatedBackground from '../components/AnimatedBackground';

import { useMountEffect } from '../hooks/toolkit';

import live from '../assets/ec_live_cantiere.jpeg';

const Music = () => {

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
        src={live.src}
        opacity={.6}
      />
    </div>
  );
};

export default Music;