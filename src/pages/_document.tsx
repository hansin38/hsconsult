/* eslint-disable @next/next/no-title-in-document-head */
import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <title>한신콘설탄트</title>
        <meta name="description" content="한신콘설탄트" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="한신콘설탄트" />
        <meta name="author" content="sanguneo, juno" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
