import React from 'react';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import { css } from '@emotion/react';
import { TArticle, TTable } from '@/shared/types/api.types';
import { ArticleListTable, ArticleListTableHeader, ArticleListTableRow } from './ArticleList.styles';


const ArticleList = ({ list, table, useContent }: {list: Array<TArticle>; table: TTable; useContent?: boolean}): React.ReactElement => {
  const router = useRouter();
  const today = dayjs();
  return (
    <ArticleListTable>
      <ArticleListTableHeader>
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
      </ArticleListTableHeader>
      {list.map( ({ id, title, content, timestamp } ) =><ArticleListTableRow key={id} onClick={()=> router.push(`./${table}/` + id)}>
        <div>{id}</div>
        <div css={css`overflow: hidden; text-overflow: ellipsis;white-space: pre;`}>{useContent ? content : title}</div>
        <div>{dayjs(timestamp * 1000).format(dayjs(timestamp * 1000).isSame(today, 'date') ? 'HH:mm' : 'YYYY-MM-DD')}</div>
      </ArticleListTableRow>)}
    </ArticleListTable>
  );
};

export default ArticleList;
