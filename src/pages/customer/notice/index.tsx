import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Notice from '@/components/Notice/Notice';
import { getPage } from '@/shared/apis/appApi';

const CustomerNoticePage: NextPage = (): React.ReactElement => {
  const router = useRouter();
  const { page = '1' } = router.query;
  const queryData = useQuery(['notice', page], () => getPage({ table: 'notice', page: Number(page) }));
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_customer.webp" title={'고객지원'}>
        <Notice {...queryData}/>
      </ContentsLayout>
    </Layout>
  );
};

export default CustomerNoticePage;
