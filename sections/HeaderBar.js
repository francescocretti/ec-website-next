
import HeaderMenuLink from './HeaderMenuLink';

import { HiMenuAlt1 } from 'react-icons/hi'

import React from 'react';

const DesktopHeader = () => {
  return (
    <div className='absolute top-0 right-0 py-20 pr-20 z-[99] hidden md:block'>
      <ul className='font-lato text-2xl font-bold text-right'>
        <HeaderMenuLink
          text="HOME"
          href="/"
        />
        <HeaderMenuLink
          text="EC + SAHEL ROOTS"
          href="/on-est-ensemble"
        />
        <HeaderMenuLink
          text="MUSIC"
          href="/music"
        />
        <HeaderMenuLink
          text="SOUNDTRACK"
          href="/soundtrack"
        />
        {/* <HeaderMenuLink
          text="ABOUT"
          href="/about"
        /> */}
        <HeaderMenuLink
          text="CONTACT"
          href="/contact"
        />
      </ul>
    </div>
  );
};

const MobileHeader = ({ setSidebarOpen }) => {
  return (
    <div className='md:hidden absolute top-8 right-8 z-[99] text-ec-grayred'>
      <HiMenuAlt1
        className='text-4xl'
        onClick={() => setSidebarOpen(true)}
      />
    </div>
  )
}

const HeaderBar = ({ sideBarOpen, setSidebarOpen }) => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderBar;