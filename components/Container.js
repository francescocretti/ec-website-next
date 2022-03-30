import { useState } from 'react';

import { useMountEffect } from '../hooks/toolkit';

import AnimatedBackground from './AnimatedBackground';

import Divider from './Divider';

const Container = ({
  children,
  bgImage,
  bgOpacity,
  title,
  subtitle
}) => {

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
        src={bgImage.src}
        blurDataURL={bgImage.blurDataURL}
        opacity={bgOpacity || .8}
      />

      <div
        className='fixed w-screen h-screen container-content top-0 right-0 bottom-0 left-0 overflow-x-hidden px-8 py-20 xl:px-24 xl:py-20'
      >
        {title && (
          <h1 className='font-inknut inline-block font-bold uppercase text-xl md:text-4xl text-ec-grayred-500 text-center mb-4'>
            {title}
          </h1>
        )}

        {subtitle && (
          <>
            <p
              className="font-inknut text-ec-grayred-500 leading-tight text-lg md:text-2xl"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
            <Divider />
          </>
        )}

        {children}
      </div>

    </div>
  );
};

export default Container;