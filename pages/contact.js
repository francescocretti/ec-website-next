import { useState } from 'react';

import AnimatedBackground from '../components/AnimatedBackground';

import { useMountEffect } from '../hooks/toolkit';

import zombie from '../assets/zombie.png';

const Contact = () => {

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
        src={zombie.src}
        opacity={.6}
      />
    </div>
  );
};

export default Contact;