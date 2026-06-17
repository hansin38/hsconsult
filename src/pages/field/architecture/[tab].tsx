import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Architecture from '@/components/Architecture/Architecture';

const FieldArchitecturePage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_section.webp" title={'사업분야'}>
        <Architecture />
      </ContentsLayout>
    </Layout>
  );
};

export default FieldArchitecturePage;
