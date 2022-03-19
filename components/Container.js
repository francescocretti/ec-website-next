import { useState } from 'react';

import { useMountEffect } from '../hooks/toolkit';

import AnimatedBackground from './AnimatedBackground';

const Container = ({ children, bgImage }) => {

  const [start, setStart] = useState(false);

  useMountEffect(() => {
    setTimeout(() => {
      setStart(true)
    }, 100)
  });

  return (
    <div className='relative w-screen h-screen container-bg'>
      <AnimatedBackground
        toggle={start}
        src={bgImage}
        opacity={1}
      >
        {children}
      </AnimatedBackground>
    </div>
  );
};

export default Container;