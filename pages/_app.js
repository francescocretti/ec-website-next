import React, { useEffect } from 'react';

import '../styles/globals.css'

import Layout from '../sections/Layout';

// workaround for "useLayoutEffect does nothing on the server" warning
if (typeof document === 'undefined') {
  React.useLayoutEffect = useEffect;
}

const App = ({ Component, pageProps }) => {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
