import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Architecture from '@/components/Architecture/Architecture';

const FieldConstructionPage: NextPage = (): React.ReactElement => {
  return (
    <Layout transparentHeader>
      <ContentsLayout topImgSrc="/images/field-top-image.jpg">
        <Architecture />
      </ContentsLayout>
    </Layout>
  );
};

export default FieldConstructionPage;
