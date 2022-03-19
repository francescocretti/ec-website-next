import { useState } from 'react';

import EcLogo from '../components/EcLogo';

import AnimatedBackground from '../components/AnimatedBackground';

import { useMountEffect } from '../hooks/toolkit';

import docks from '../assets/ec_docks_2.jpg';

const LOGO_SIZE = 150;

const Home = () => {

  const [sohwBg, setShohwBg] = useState(false);

  useMountEffect(() => {
    setTimeout(() => {
      setShohwBg(true)
    }, 500)
  });

  return (
    <>
      <div className='relative w-screen h-screen wewe'>
        <AnimatedBackground
          toggle={sohwBg}
          src={docks.src}
          opacity={1}
        />
      </div>
      <div className='absolute'>
        <EcLogo
          className="cursor-pointer"
          width={LOGO_SIZE} height={LOGO_SIZE} color="#000" />
      </div>
    </>
  );
};

export default Home;