import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';

const FieldSupervisionPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/aboutus.jpg">
        <></>
      </ContentsLayout>
    </Layout>
  );
};

export default FieldSupervisionPage;
