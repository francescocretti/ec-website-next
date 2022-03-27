import React, { useState, useEffect } from 'react';

import Head from 'next/head';

import { useRouter } from 'next/router';

import HeaderBar from './HeaderBar';

import Backdrop from './Backdrop';

import SideBar from './Sidebar';

import styles from '../styles/Layout.module.css';

const Layout = ({ children, pageMeta }) => {

  const router = useRouter();

  const [sideBarOpen, setSidebarOpen] = useState(false);

  // close sidebar when loading a new page
  useEffect(() => {
    const closeSidebar = () => setSidebarOpen(false);
    router.events.on('routeChangeComplete', closeSidebar);
    router.events.on('routeChangeError', closeSidebar);
    return () => {
      router.events.off('routeChangeComplete', closeSidebar);
      router.events.off('routeChangeError', closeSidebar);
    }
  }, [router.events]);

  // manage scroll when sidebar is open
  useEffect(() => {
    if (sideBarOpen) {
      // go to top
      window.scrollTo({ top: 0 });
      // disable scrolling
      document.body.classList.add('no-scroll-y')
    } else {
      // enable scrolling
      document.body.classList.remove('no-scroll-y')
    }
  }, [sideBarOpen]);

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
      </Head>

      <Backdrop sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />

      {/* <HeaderBar sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} /> */}

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