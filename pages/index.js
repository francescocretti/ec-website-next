import { useState } from 'react';

import EcLogo from '../components/EcLogo';

import { useMountEffect } from '../hooks/toolkit';

import Container from '../components/Container';

import image from '../assets/home-min.png';

const LOGO_SIZE = 150;

const Home = () => {

  return (
    <>
      <Container bgImage={image.src} />

      <div className='absolute'>
        {<EcLogo
          className="cursor-pointer"
          width={LOGO_SIZE} height={LOGO_SIZE} color="#000"
        />}
      </div>
    </>
  );
};

export default Home;