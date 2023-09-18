import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Hello from '@/components/Hello/Hello';

const IntroHelloPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_overview.webp" title={'회사소개'}>
        <Hello />
      </ContentsLayout>
    </Layout>
  );
};

export default IntroHelloPage;
