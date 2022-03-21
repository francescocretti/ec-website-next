import Link from 'next/link';

import { useRouter } from 'next/router';

import React from 'react';

const HeaderMenuLink = ({ text, href, external }) => {

  const { pathname } = useRouter();

  const linkStyle = pathname === href ?
    'opacity-100 text-ec-grayred' :
    'opacity-50 text-ec-grayred';

  return (
    <li className={`mb-4 text-right ${linkStyle} transition-opacity hover:opacity-100`}>
      <Link href={href}>
        <a
          className="tracking-[.5em]"
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : ""}
        >
          {text}</a>
      </Link>
    </li>
  )
}

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