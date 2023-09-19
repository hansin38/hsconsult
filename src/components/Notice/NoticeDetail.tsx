import React from 'react';
import { UseQueryResult } from 'react-query';
import { IGetArticleReturn, IGetPageReturn } from '@/shared/types/api.types';
import { NoticeContainer, NoticeTextWrpper } from './Notice.styles';


const NoticeDetail = ({ data: res, isLoading, error }: UseQueryResult<IGetArticleReturn, unknown>): React.ReactElement => {
  return (
    <NoticeContainer>
      <NoticeTextWrpper>
        <h3>공지사항</h3>
        <h5>한신콘설탄트의 소식에 대해 알려드립니다.</h5>
      </NoticeTextWrpper>
      <pre>{JSON.stringify(res)}</pre>
    </NoticeContainer>
  );
};

export default NoticeDetail;
