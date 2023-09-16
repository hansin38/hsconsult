import React from 'react';
import {} from './MainNotice.constants';
import { IMainNotice } from './MainNotice.types';
import { MainNoticeTable, MainNoticeTableHeader, MainNoticeTableRow } from './MainNotice.styles';


const MainNotice = (props: IMainNotice): React.ReactElement => {
  return (
    <MainNoticeTable>
      <MainNoticeTableHeader>
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
      </MainNoticeTableHeader>
      <MainNoticeTableRow>
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
      </MainNoticeTableRow>
      <MainNoticeTableRow>
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
      </MainNoticeTableRow>
      <MainNoticeTableRow>
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
      </MainNoticeTableRow>
      <MainNoticeTableRow>
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
      </MainNoticeTableRow>
      <MainNoticeTableRow>
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
      </MainNoticeTableRow>
    </MainNoticeTable>
  );
};

export default MainNotice;
