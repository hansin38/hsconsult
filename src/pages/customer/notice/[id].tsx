import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, useQuery } from 'react-query';
import { css } from '@emotion/react';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import { getArticle, getPage } from '@/shared/apis/appApi';
import ArticleDetail from '@/components/ArticleDetail/ArticleDetail';
import { NoticeTextWrpper } from '@/components/Notice/Notice.styles';
import { InquiryButtonWrapper } from '@/components/Inquiry/Inquiry.styles';
import queryClient from '@/shared/configs/queryClient';

const CustomerNoticeDetailPage: NextPage = (): React.ReactElement => {
  const router = useRouter();
  const { id = '1' } = router.query;
  const queryData = useQuery(['notice-detail', id], () => getArticle({ table: 'notice', id: Number(id) }));
  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_customer.webp" title={'고객지원'}>
        <div css={css`display: flex;flex-direction: column;margin-top: 34px;gap: 32px;`}>
          <NoticeTextWrpper>
            <h3>공지사항</h3>
            <h5>한신콘설탄트의 소식에 대해 알려드립니다.</h5>
          </NoticeTextWrpper>
          <ArticleDetail {...queryData}/>
          <InquiryButtonWrapper>
            <button type={'button'} onClick={()=> router.push('./')}>목록보기</button>
          </InquiryButtonWrapper>
        </div>
      </ContentsLayout>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { id } = params;
  await queryClient.prefetchQuery(['notice-detail', id], () => getArticle({ table: 'notice', id: Number(id) }));
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

export default CustomerNoticeDetailPage;
