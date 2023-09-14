import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';

const FieldArchitecturePage: NextPage = (): React.ReactElement => {
  return (
    <Layout transparentHeader>
      <ContentsLayout topImgSrc="/images/aboutus.jpg">
        <></>
      </ContentsLayout>
    </Layout>
  );
};

export default FieldArchitecturePage;
