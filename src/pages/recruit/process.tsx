import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Process from '@/components/Process/Process';

const RecruitProcessPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_recruit.webp" title={'채용정보'}>
        <Process />
      </ContentsLayout>
    </Layout>
  );
};

export default RecruitProcessPage;
