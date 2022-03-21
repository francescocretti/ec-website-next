import React, { useState } from 'react';

import Head from 'next/head';

import HeaderBar from './HeaderBar';

import Backdrop from './Backdrop';

import SideBar from './Sidebar';

import styles from '../styles/Layout.module.css';

const Layout = ({ children, pageMeta }) => {

  const [sideBarOpen, setSidebarOpen] = useState(false);

  const meta = {
    title: 'Electric Circus',
    description: '🎷 Away from the frenzy of everyday life, Electric Circus plays psychedelic, toe-tapping grooves from the world 🌎',
    ...pageMeta
  };

  return (
    <React.Fragment>

      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.png" />

        {/* Lato + Righteous from Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Inknut+Antiqua:wght@300&display=swap" rel="stylesheet" />

      </Head>

      <Backdrop sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />

      <HeaderBar sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />

      <SideBar open={sideBarOpen} setOpen={setSidebarOpen} />

      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>

      {/* <Footer /> */}

    </React.Fragment>
  );
};

export default Layout;