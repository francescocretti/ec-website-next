import React from 'react'

import { FaSpotify, FaBandcamp } from "react-icons/fa";

import image from '../assets/sr.jpg';

import cover from '../assets/OnEstEnsemble_front.png';

import Container from '../components/Container';

import DiscoLink from '../components/DiscoLink';

import Image from 'next/image';

import { useWindowDimensions } from '../hooks/toolkit';

const OnEsteEnsemble = () => {

  const { width } = useWindowDimensions();

  return (
    <Container
      bgImage={image}
      bgOpacity={.8}
    >
      <h1
        className='bg-ec-yellow-200 bg-opacity-70 font-inknut inline-block font-bold uppercase text-xl md:text-4xl text-ec-grayred-500 text-center mb-4'
      >
        Electric Circus & Sahel Roots
      </h1>

      <div className='w-full lg:w-2/5'>

        <p
          className='text-ec-grayred-500 bg-ec-yellow-200 bg-opacity-70 px-2'>
          <strong>On est Ensemble</strong> is an EP born from the meeting with Sahel Roots, a duo from the north of Mali, published in 2023 for Mieruba ML label.
          It all took place remotely: Sahel Roots recorded in Bamako (Mali), while the Electric Circus in Turin (Italy).
          The result are <strong>four tracks</strong> with a mixed sound between malian traditional music, afrobeat, funk and psycheledia.
        </p>

        <div
          className='relative mt-10 w-[300px] h-[300px] cursor-pointer transition-transform duration-700 hover:scale-110'
          style={{
            boxShadow: '10px 10px #C5AC86, -10px -10px #c0b7bc'
          }}
        >
          <a
            href="https://www.mieruba.com/en/electric-circussahel-roots_epk"
            target="_blank"
            rel="noopener noreferrer"
          >

            <Image
              src={cover.src}
              blurDataURL={cover.blurDataURL}
              layout="fill"
              objectFit="cover"
              quality={100}
              placeholder="blur"
              priority
            />

          </a>
        </div>
      </div>

      <div className='w-full mt-10 lg:w-10/5 flex gap-5'>

        <DiscoLink
          href="https://distrokid.com/hyperfollow/electriccircussahelroots/on-est-ensemble-2" border
          color={width <= 600 ? 'light' : 'dark'}
        >
          <FaSpotify />
        </DiscoLink>

        <DiscoLink
          href="https://sahelroots.bandcamp.com/album/on-est-ensemble-2"
          color={width <= 600 ? 'light' : 'dark'}
        >
          <FaBandcamp />
        </DiscoLink>

      </div>

    </Container>
  );
};

export default OnEsteEnsemble;