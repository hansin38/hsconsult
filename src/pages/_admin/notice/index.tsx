import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { dehydrate, useQuery } from 'react-query';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import { createArticle, getArticle, updateArticle } from '@/shared/apis/appApi';
import { InquiryButtonWrapper, InquiryForm, InquiryLabel } from '@/components/Inquiry/Inquiry.styles';
import queryClient from '@/shared/configs/queryClient';
import { useAdmin } from '@/shared/useAdmin';

const AdminCustomerNoticePage: NextPage = (): React.ReactElement => {
  const router = useRouter();
  const { isAdmin, isClient } = useAdmin();
  useEffect(() => {
    if (!isClient) return;
    if (!isAdmin) {
      router.push('/_admin');
    }
  }, [isClient]);
  const { id } = router.query;
  const { data } = useQuery(['notice-detail', id], () => getArticle({ table: 'notice', id: Number(id) }), { enabled: Boolean(id) });
  const createInquiry = (data) => createArticle({ table: 'notice', ...data });
  const updateInquiry = (data) => updateArticle({ table: 'notice', id, ...data });
  const InquiryResolverScheme = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
  });

  const methods = useForm({
      mode: 'onChange',
      resolver: yupResolver(InquiryResolverScheme),
      defaultValues: {
        title: '',
        content: '',
      },
    }
  );


  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;


  useEffect(() => {
    if (!data?.data) return;
    setValue('title', data.data.title);
    setValue('content', data.data.content);
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      return handleSubmit((data) => createInquiry(data).then(() => {
        alert('작성 완료');
        reset();
      }))();
    }
    return handleSubmit((data) => updateInquiry(data).then(() => {
      alert('수정 완료');
      router.back();
      setTimeout(() => {
        location.reload();
      }, 200);
    }))();

  };

  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_customer.webp" title={'고객지원'}>
          <InquiryForm>
            <InquiryLabel htmlFor={'title'}>제목</InquiryLabel>
            <input type='text' id='title' {...register('title')} className={errors.title ? 'error' : ''}/>
            <InquiryLabel htmlFor={'content'}>내용</InquiryLabel>
            <textarea id='content' {...register('content')} className={errors.content ? 'error' : ''}/>
            <InquiryButtonWrapper>
              <button type={'button'}>취소하기</button>
              <button type={'submit'} onClick={onSubmit}>작성하기</button>
            </InquiryButtonWrapper>
          </InquiryForm>
      </ContentsLayout>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { id } = params || {};
  if (id && id !== '') {
    await queryClient.prefetchQuery(['notice-detail', id], () => getArticle({ table: 'notice', id: Number(id) }));
  }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default AdminCustomerNoticePage;
