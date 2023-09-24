import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Notice from '@/components/Notice/Notice';
import { getPage } from '@/shared/apis/appApi';
import { Pagination } from '@/components/Pagination/Pagination';
import queryClient from '@/shared/configs/queryClient';

const CustomerNoticePage: NextPage = (): React.ReactElement => {
  const router = useRouter();
  const { page = '1' } = router.query;
  const queryData = useQuery(['notice', page], () => getPage({ table: 'notice', page: Number(page) }));
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_customer.webp" title={'고객지원'}>
        <>
          <Notice {...queryData}/>
          {queryData.isLoading ? <>isLoading...</> :
          <Pagination
            currentPage={Number(page)}
            limit={10}
            totalCount={queryData.data.data.total}
            onPageChange={(page)=> router.push({ pathname: router.pathname, query: { page } })}
          />}
        </>
      </ContentsLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  await queryClient.prefetchQuery(['notice', '1'], () => getPage({ table: 'notice', page: 1 }));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default CustomerNoticePage;
