import styled from '@emotion/styled';
import React from 'react';

export const NoticeContainer = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  gap: 32px;
`;

export const NoticeTextWrpper = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  & > h3 {
    color: #000;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
  & > h5 {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    word-break: keep-all;
  }
`;

export const NoticeHelmet = styled.div<React.CSSProperties>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NoticeHelmetLeft = styled.div<React.CSSProperties>`
  color: #7C7C7C;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  &::before {
    font-weight: 400;
    content: '총 ';
  }
`;


export const NoticeSearch = styled.div<React.CSSProperties>`
  display: flex;
  width: 411px;
  padding: 16px 14px;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #EFEFEF;
  & > input {
    flex: 1;
    border: none;
    outline: none;
    color: #7C7C7C;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const NoticeList = styled.div<React.CSSProperties>`
`;
