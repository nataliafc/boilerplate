import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut-icon" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name='theme-color' content="#06092b" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS e Styled Components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
