import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import History from '@/components/History/History';

const IntroHistoryPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/overview.jpg">
        <History />
      </ContentsLayout>
    </Layout>
  );
};

export default IntroHistoryPage;
