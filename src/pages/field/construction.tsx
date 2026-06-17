import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Construction from '@/components/Construction/Construction';

const FieldConstructionPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_section.webp" title={'사업분야'}>
        <Construction />
      </ContentsLayout>
    </Layout>
  );
};

export default FieldConstructionPage;
