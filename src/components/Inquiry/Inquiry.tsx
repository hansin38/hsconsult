import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createArticle } from '@/shared/apis/appApi';
import { InquiryButtonWrapper, InquiryContainer, InquiryForm, InquiryLabel, InquiryTextWrpper } from './Inquiry.styles';


const Inquiry = (): React.ReactElement => {
  const createInquiry = (data) => createArticle({ table: 'inquiry', ...data });
  const InquiryResolverScheme = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required().test('onlynumber', '올바른 형식으로 입력해주세요.', (value) => {
      return value ? /^[0-9-]+$/.test(value) : true;
    }),
    email: yup.string().required().test('email', '이메일 형식이 올바르지 않습니다.', (value) => {
      return value ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) : true;
    }),
    content: yup.string().required(),
  });

  const methods = useForm({
      mode: 'onChange',
      resolver: yupResolver(InquiryResolverScheme),
      defaultValues: {
        name: '',
        phone: '',
        email: '',
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
      alert('문의가 접수되었습니다.');
      reset();
    }))();
  };

  return (
    <InquiryContainer>
      <InquiryTextWrpper>
        <h3>1:1 문의</h3>
        <h5>문의할 사항을 남겨주시면 가능한 빠르게 답변 드리도록 하겠습니다.</h5>
      </InquiryTextWrpper>
      <InquiryForm>
        <InquiryLabel htmlFor={'name'}>이름</InquiryLabel>
        <input type='text' id='name' {...register('name')} className={errors.name ? 'error' : ''}/>
        <InquiryLabel htmlFor={'phone'}>연락처</InquiryLabel>
        <input type='text' id='phone' {...register('phone')} className={errors.phone ? 'error' : ''}/>
        <InquiryLabel htmlFor={'email'}>이메일</InquiryLabel>
        <input type='email' id='email' {...register('email')} className={errors.email ? 'error' : ''}/>
        <InquiryLabel htmlFor={'content'}>문의내용</InquiryLabel>
        <textarea id='content' {...register('content')} className={errors.content ? 'error' : ''}/>
        <InquiryButtonWrapper>
          <button type={'button'} onClick={()=>reset()}>취소하기</button>
          <button type={'submit'} onClick={onSubmit}>문의하기</button>
        </InquiryButtonWrapper>
      </InquiryForm>
    </InquiryContainer>
  );
};

export default Inquiry;
