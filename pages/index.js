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

          <h1 className='font-righteous text-3xl text-ec-grayred-500 text-center mb-10'>
            Psychedelic grooves
            <br />
            from the world
          </h1>

          <EcLogo
            className="cursor-pointer"
            width={LOGO_SIZE} height={LOGO_SIZE} color="#26161E"
          />

          <div className="mt-10">
            <SocialLinks />
          </div>

        </div>
      </Container>
    </>
  );
};

export default Home;