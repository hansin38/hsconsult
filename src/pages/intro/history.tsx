import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import History from '@/components/History/History';

const IntroHistoryPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_overview.webp" title={'회사연혁'}>
        <History />
      </ContentsLayout>
    </Layout>
  );
};

export default IntroHistoryPage;
