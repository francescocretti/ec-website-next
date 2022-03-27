import { useState } from 'react';

import EcLogo from '../components/EcLogo';

import { useMountEffect } from '../hooks/toolkit';

import Container from '../components/Container';

import image from '../assets/home-min.png';

import SocialLinks from '../components/SocialLinks';

const LOGO_SIZE = 150;

const Home = () => {

  return (
    <>
      <Container bgImage={image} >
        <div className='flex flex-col justify-center items-center w-full h-full'>

          <a href="https://youtu.be/k7wUWpOObU0"          >
            <EcLogo
              className="cursor-pointer"
              width={LOGO_SIZE} height={LOGO_SIZE} color="#26161E"
            />
          </a>

          <h1 className='font-inknut font-bold text-3xl md:text-3xl text-ec-grayred-500 text-center mt-10'>
            Psychedelic grooves from the world
          </h1>

          <div className="mt-10">
            <SocialLinks />
          </div>

        </div>
      </Container>
    </>
  );
};

export default Home;