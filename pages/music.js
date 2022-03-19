import { useState } from 'react';

import Container from '../components/Container';

import { useMountEffect } from '../hooks/toolkit';

import image from '../assets/music-min.png';

const Music = () => {
  return (
    <>
      <Container bgImage={image.src} />
    </>
  );
};

export default Music;