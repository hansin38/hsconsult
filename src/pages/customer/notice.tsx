import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import Talent from '@/components/Talent/Talent';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Notice from '@/components/Notice/Notice';

const CustomerNoticePage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_customer.webp" title={'고객지원'}>
        <Notice />
      </ContentsLayout>
    </Layout>
  );
};

export default CustomerNoticePage;
