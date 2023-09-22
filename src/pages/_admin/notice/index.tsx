import React from 'react';
import type { NextPage } from 'next';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Layout from '@/components/layout/Layout';
import ContentsLayout from '@/components/ContentsLayout/ContentsLayout';
import Inquiry from '@/components/Inquiry/Inquiry';
import { createArticle } from '@/shared/apis/appApi';
import { InquiryButtonWrapper, InquiryContainer, InquiryForm, InquiryLabel, InquiryTextWrpper } from '@/components/Inquiry/Inquiry.styles';

const AdminCustomerQnaPage: NextPage = (): React.ReactElement => {

  const createInquiry = (data) => createArticle({ table: 'notice', ...data });
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
    formState: { errors },
  } = methods;


  const onSubmit = (e) => {
    e.preventDefault();
    return handleSubmit((data)=> createInquiry(data).then(() => {
      alert('작성 완료');
      reset();
    }))();
  };

  return (
    <Layout>
      <ContentsLayout topImgSrc="/images/cover_customer.webp" title={'고객지원'}>
          <InquiryForm>
            <InquiryLabel htmlFor={'title'}>제목</InquiryLabel>
            <input type='text' id='title' {...register('title')} className={errors.title ? 'error' : ''}/>
            <InquiryLabel htmlFor={'content'}>문의내용</InquiryLabel>
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

export default AdminCustomerQnaPage;
