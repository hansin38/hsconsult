import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Notice from '@/components/Notice/Notice';
import { getPage } from '@/shared/apis/appApi';
import { TArticle } from '@/shared/types/api.types';
import ArticleList from '@/components/ArticleList/ArticleList';

const AdminCustomerNoticePage: NextPage = (): React.ReactElement => {
  const router = useRouter();
  const { page = '1' } = router.query;
  const queryData = useQuery(['inquiry', page], () => getPage({ table: 'inquiry', page: Number(page) }));
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_customer.webp" title={'고객지원'}>
        <ArticleList list={queryData?.data?.data?.list as TArticle[] || []} useContent table={'inquiry'}/>
      </ContentsLayout>
    </Layout>
  );
};

export default AdminCustomerNoticePage;
