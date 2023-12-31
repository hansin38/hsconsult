import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Talent from '@/components/Talent/Talent';

const RecruitTalentPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_recruit.webp" title={'채용정보'}>
        <Talent />
      </ContentsLayout>
    </Layout>
  );
};

export default RecruitTalentPage;
