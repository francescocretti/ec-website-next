import Link from 'next/link';
import React from 'react'

import {
  FaSpotify,
  FaBandcamp,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className='flex justify-between text-3xl'>
      <Link href="https://spoti.fi/2zwMTOP" >
        <a
          className='inline-block mx-4 hover:opacity-50'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify />
        </a>
      </Link>

      <Link href="https://electriccircus3.bandcamp.com/" >
        <a
          className='inline-block mx-4 hover:opacity-50'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBandcamp />
        </a>
      </Link>

      <Link href="https://www.facebook.com/electriccircus3" >
        <a
          className='inline-block mx-4 hover:opacity-50'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </Link>

      <Link href="https://www.instagram.com/electriccircus3/" >
        <a
          className='inline-block mx-4 hover:opacity-50'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </Link>

      {/* <Link href="https://www.youtube.com/user/electriccircus3" >
        <a
          className='inline-block mx-4 hover:opacity-50'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </Link> */}
    </div>
  );
};

export default SocialLinks