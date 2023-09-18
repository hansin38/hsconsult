import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Architecture from '@/components/Architecture/Architecture';

const FieldArchitecturePage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/field-top-image.jpg">
        <Architecture />
      </ContentsLayout>
    </Layout>
  );
};

export default FieldArchitecturePage;
