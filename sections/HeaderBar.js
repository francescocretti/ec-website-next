import Link from 'next/link';

import React from 'react';

const HeaderMenuLink = ({ text, href, external }) => (
  <li className='mb-4 text-right'>
    <Link href={href}>
      <a
        className='tracking-[.5em]'
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : ""}
      >
        {text}
      </a>
    </Link>
  </li>
)

const HeaderBar = () => {
  return (
    <div className='absolute top-0 right-0 py-20 pr-20 z-[99]'>
      <ul className='font-lato text-2xl font-bold'>
        <HeaderMenuLink
          text="HOME"
          href="/"
        />
        <HeaderMenuLink
          text="MUSIC"
          href="/music"
        />
        <HeaderMenuLink
          text="SOUNTRACK"
          href="/soundtrack"
        />
        <HeaderMenuLink
          text="ABOUT"
          href="/about"
        />
        <HeaderMenuLink
          text="CONTACT"
          href="/contact"
        />
      </ul>
    </div>
  );
};

export default HeaderBar;