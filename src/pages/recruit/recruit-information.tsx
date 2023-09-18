import React from 'react';
import type { NextPage } from 'next';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Layout from '@/components/layout/Layout';
import RecruitInformation from '@/components/RecruitInformation/RecruitInformation';

const RecruitInformationPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/field-top-image.jpg">
        <RecruitInformation />
      </ContentsLayout>
    </Layout>
  );
};

export default RecruitInformationPage;
