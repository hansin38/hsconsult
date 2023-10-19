import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Overview from '@/components/Process/Overview';

const RecruitOverviewPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_recruit.webp" title={'채용정보'}>
        <Overview />
      </ContentsLayout>
    </Layout>
  );
};

export default RecruitOverviewPage;
