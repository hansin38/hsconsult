import React from 'react';
import { NoticeContainer, NoticeTextWrpper } from './Notice.styles';


const Notice = (): React.ReactElement => {
  return (
    <NoticeContainer>
      <NoticeTextWrpper>
        <h3>공지사항</h3>
        <h5>한신콘설탄트의 소식에 대해 알려드립니다.</h5>
      </NoticeTextWrpper>
    </NoticeContainer>
  );
};

export default Notice;
