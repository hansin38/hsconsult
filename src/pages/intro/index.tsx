import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Hello from '@/components/Hello/Hello';

const IntroHelloPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/aboutus.jpg">
        <Hello />
      </ContentsLayout>
    </Layout>
  );
};

export default IntroHelloPage;
