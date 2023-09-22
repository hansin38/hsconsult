import React from 'react';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import { UseQueryResult } from 'react-query';
import { IGetArticleReturn, IGetPageReturn, TArticle } from '@/shared/types/api.types';
import { ArticleDetailContent, ArticleDetailTable } from './ArticleDetail.styles';


const ArticleDetail = ({ data: res, isLoading }: UseQueryResult<IGetArticleReturn, unknown>): React.ReactElement => {
  const router = useRouter();
  const today = dayjs();
  if (isLoading) return (<div>loading...</div>);
  return (
    <ArticleDetailTable>
      <div>{res.data.id}</div><div>{res.data.title}</div><div>{dayjs(res.data.timestamp * 1000).format(dayjs(res.data.timestamp * 1000).isSame(today, 'date') ? 'HH:mm' : 'YYYY-MM-DD')}</div>
      <ArticleDetailContent>{res.data.content}</ArticleDetailContent>
    </ArticleDetailTable>
  );
};

export default ArticleDetail;
