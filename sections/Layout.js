import React from 'react';

import Head from 'next/head';

import HeaderBar from './HeaderBar';

import Footer from './Footer';

import styles from '../styles/Layout.module.css';

const Layout = ({ children, pageMeta }) => {

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Righteous&display=swap" rel="stylesheet" />

      </Head>

      <HeaderBar />

      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>

      <Footer />

    </React.Fragment>
  );
};

export default Layout;