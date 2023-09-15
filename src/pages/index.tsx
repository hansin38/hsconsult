import React from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import Layout from '@/components/layout/Layout';


const Home: NextPage = (): React.ReactElement => {
  return (<Layout transparentHeader>
    <div css={css`width: 100%;height: 100vh;background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,114,121,1) 21%, rgba(0,212,255,1) 41%, rgba(37,120,27,1) 69%, rgba(120,35,27,1) 87%);`}></div>
    </Layout>);
};

export default Home;
