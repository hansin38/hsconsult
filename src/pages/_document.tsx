/* eslint-disable @next/next/no-title-in-document-head */
import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <meta name="description" content="한신콘설탄트" />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="한신콘설탄트" />
        <meta name="author" content="sanguneo, juno" />
        <style>
          p{order:1px}
          #justify{text-align:justify;}
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
