import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Inquiry from '@/components/Inquiry/Inquiry';

const CustomerQnaPage: NextPage = (): React.ReactElement => {
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_customer.webp" title={'고객지원'}>
        <Inquiry />
      </ContentsLayout>
    </Layout>
  );
};

export default CustomerQnaPage;
