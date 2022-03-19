import { useState } from 'react';

import AnimatedBackground from '../components/AnimatedBackground';

import { useMountEffect } from '../hooks/toolkit';

import mali from '../assets/mali.png';

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
        src={mali.src}
        opacity={1}
      />
    </div>
  );
};

export default Music;