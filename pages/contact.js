import { useState } from 'react';

import Container from '../components/Container';

import { useMountEffect } from '../hooks/toolkit';

import image from '../assets/contact-min.png';

const Contact = () => {
  return (
    <>
      <Container bgImage={image.src} />
    </>
  );
};

export default Contact;