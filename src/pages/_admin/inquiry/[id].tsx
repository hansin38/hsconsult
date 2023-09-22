import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import NoticeDetail from '@/components/Notice/NoticeDetail';
import { getArticle } from '@/shared/apis/appApi';
import ArticleDetail from '@/components/ArticleDetail/ArticleDetail';
import { InquiryButtonWrapper } from '@/components/Inquiry/Inquiry.styles';

const AdminCustomerNoticeDetailPage: NextPage = (): React.ReactElement => {
  const router = useRouter();
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

export default AdminCustomerNoticeDetailPage;
