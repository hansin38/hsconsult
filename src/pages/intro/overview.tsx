import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Overview from '@/components/Overview/Overview';

const IntroOverviewPage: NextPage = (): React.ReactElement => {
  return (
    <Layout transparentHeader>
      <ContentsLayout topImgSrc="/images/overview.jpg">
        <Overview />
      </ContentsLayout>
    </Layout>
  );
};

export default IntroOverviewPage;
