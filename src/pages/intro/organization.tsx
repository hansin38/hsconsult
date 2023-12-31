import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Organization from '@/components/Organization/Organization';

const IntroOrganizationPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_overview.webp" title={'조직도'}>
        <Organization />
      </ContentsLayout>
    </Layout>
  );
};

export default IntroOrganizationPage;
