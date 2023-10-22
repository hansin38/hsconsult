import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, useQuery } from 'react-query';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import NoticeDetail from '@/components/Notice/NoticeDetail';
import { getArticle } from '@/shared/apis/appApi';
import ArticleDetail from '@/components/ArticleDetail/ArticleDetail';
import { InquiryButtonWrapper } from '@/components/Inquiry/Inquiry.styles';
import queryClient from '@/shared/configs/queryClient';
import { useAdmin } from '@/shared/useAdmin';

const AdminCustomerNoticeDetailPage: NextPage = (): React.ReactElement => {
  const router = useRouter();
  const { isAdmin, isClient } = useAdmin();
  useEffect(() => {
    if (!isClient) return;
    if (!isAdmin) {
      router.push('/_admin');
    }
  }, [isClient]);
  const { id = '1' } = router.query;
  const queryData = useQuery(['inquiry-detail', id], () => getArticle({ table: 'inquiry', id: Number(id) }));
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_customer.webp" title={'고객지원'}>
        <>
          <ArticleDetail {...queryData}/>
          <InquiryButtonWrapper>
            <button type={'button'} onClick={()=> router.push('./')}>목록보기</button>
          </InquiryButtonWrapper>
        </>
      </ContentsLayout>
    </Layout>
  );
};


export async function getStaticProps({ params }) {
  const { id } = params;
  await queryClient.prefetchQuery(['inquiry-detail', id], () => getArticle({ table: 'inquiry', id: Number(id) }));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export function getStaticPaths(){
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default AdminCustomerNoticeDetailPage;
