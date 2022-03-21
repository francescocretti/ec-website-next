import { useState } from 'react';

import { useMountEffect } from '../hooks/toolkit';

import AnimatedBackground from './AnimatedBackground';

const Container = ({ children, bgImage, bgOpacity }) => {

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
        opacity={bgOpacity || .8}
      />

      <div className='fixed w-screen h-screen container-content top-0 right-0 bottom-0 left-0'      >
        {children}
      </div>

    </div>
  );
};

export default Container;