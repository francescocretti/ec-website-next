import React from 'react';

import Image from 'next/image';

import AnimatedArrow from './AnimatedArrow';

import Link from 'next/link';

const NewVideo = ({ videoUrl, image, claim }) => {
  return (
    <div className='relative flex flex-col justify-center text-center'>

      <div className='hidden md:block absolute -left-[240px] top-[160px]'>
        <AnimatedArrow />
      </div>

      <div className='block md:hidden absolute -left-[80px] top-[0px] rotate-45'>
        <AnimatedArrow width={100} height={50} />
      </div>

      <div className='absolute -left-[260px] top-[190px]'>
        <span className='inline-block font-bold text-black bg-gray-300 text-xl -rotate-[23deg]'>NEW VIDEO!</span>
      </div>

      <div className='relative w-[250px] h-[250px] cursor-pointer transition-transform duration-700 hover:scale-110'>
        <Link href={videoUrl}>
          <a>
            <Image
              src={image.src}
              blurDataURL={image.blurDataURL}
              layout="fill"
              objectFit="cover"
              quality={100}
              placeholder="blur"
              priority
            />
          </a>
        </Link>

      </div>
      <p className='font-bold mt-4 text-xl'>{claim || 'CLICK HERE!'}</p>
    </div>

  )
}

export default NewVideo