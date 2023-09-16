import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Overview from '@/components/Overview/Overview';

const IntroOverviewPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/history.jpg">
        <Overview />
      </ContentsLayout>
    </Layout>
  );
};

export default IntroOverviewPage;
