import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import NoticeDetail from '@/components/Notice/NoticeDetail';
import { getArticle } from '@/shared/apis/appApi';

const CustomerNoticeDetailPage: NextPage = (): React.ReactElement => {
  const router = useRouter();
  const { id = '1' } = router.query;
  const queryData = useQuery(['notice-detail', id], () => getArticle({ table: 'notice', id: Number(id) }));
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_customer.webp" title={'고객지원'}>
        <NoticeDetail {...queryData}/>
      </ContentsLayout>
    </Layout>
  );
};

export default CustomerNoticeDetailPage;
