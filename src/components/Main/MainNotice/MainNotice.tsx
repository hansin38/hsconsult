import React from 'react';
import { useRouter } from 'next/router';
import { TArticle } from '@/shared/types/api.types';
import { MainNoticeTable, MainNoticeTableHeader, MainNoticeTableRow } from './MainNotice.styles';


const MainNotice = ({ list }: {list: Array<TArticle>}): React.ReactElement => {
  const router = useRouter();
  return (
    <MainNoticeTable>
      <MainNoticeTableHeader>
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
      </MainNoticeTableHeader>
      {list.map( (value, i) =><MainNoticeTableRow key={i} onClick={()=> router.push('/customer/notice/' + i)}>
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
      </MainNoticeTableRow>)}
    </MainNoticeTable>
  );
};

export default MainNotice;
