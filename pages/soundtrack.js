import { useState } from 'react';

import Container from '../components/Container';

import image from '../assets/soundtrack-min.png';

import contrecourant from '../assets/contrecourant.jpg';

import Image from 'next/image';
import Link from 'next/link';

const Music = () => {
  return (
    <Container bgImage={image}
      title="MUSIC FOR IMAGES"
      subtitle="Soundtracks are kind of a natural consequence <br /> for the musical environments we design 🎥"
    >

      <div className='relative mt-16 flex flex-col'>

        <h4 className='text-ec-grayred text-xl font-medium mb-8 uppercase'>
          Our last work as soundtrack composers:
        </h4>

        <div
          className='relative w-[350px] h-[350px] cursor-pointer transition-transform duration-700 hover:scale-105'
          style={{
            boxShadow: '10px 10px #C5AC86, -10px -10px #c0b7bc'
          }}
        >
          <Link href="https://open.spotify.com/album/65H7I5Q53Tb6VD1ktkvLeB?si=Wv85S5TvSvW7yGQBCI3oeg">
            <Image
              src={contrecourant.src}
              layout="fill"
            />
          </Link>
        </div>

      </div>
    </Container>
  );
};

export default Music;