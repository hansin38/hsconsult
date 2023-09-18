import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Talent from '@/components/Talent/Talent';

const RecruitTalentPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/field-top-image.jpg">
        <Talent />
      </ContentsLayout>
    </Layout>
  );
};

export default RecruitTalentPage;
