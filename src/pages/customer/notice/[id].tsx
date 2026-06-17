import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, useQuery } from 'react-query';
import { css } from '@emotion/react';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import { getArticle, removeArticle } from '@/shared/apis/appApi';
import ArticleDetail from '@/components/ArticleDetail/ArticleDetail';
import { NoticeTextWrpper } from '@/components/Notice/Notice.styles';
import { InquiryButtonWrapper } from '@/components/Inquiry/Inquiry.styles';
import queryClient from '@/shared/configs/queryClient';
import { useAdmin } from '@/shared/useAdmin';

const CustomerNoticeDetailPage: NextPage = (): React.ReactElement => {
  const router = useRouter();
  const { isAdmin, isClient } = useAdmin();
  const { id } = router.query;
  const queryData = useQuery(['notice-detail', id], () => getArticle({ table: 'notice', id: Number(id) }), { enabled: Boolean(id) });
  const del = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      removeArticle({ table: 'notice', id: Number(id) }).then(() => {
        alert('삭제 완료');
        router.push('/customer/notice');
      });
    }
  };
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
            {isAdmin && isClient ? <>
              <button type={'button'} className={'green'} onClick={()=> router.push('/_admin/notice/' + id)}>수정하기</button>
              <button type={'button'} className={'orange'} onClick={()=> del()}>삭제하기</button>
            </> : null}
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
