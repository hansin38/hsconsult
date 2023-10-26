import React from 'react';
import styled from '@emotion/styled';

export const HelloContainer = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  & > svg {
    margin: 24px 0;
  }
`;
export const HelloTextWrpper = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  //max-width: 740px;
  gap: 24px;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  word-break: keep-all;
  margin-top: 24px;
`;

export const HelloImageWrapper = styled.div<React.CSSProperties>`
  position: relative;
  width: 100%;
  height: 283px;
  margin-bottom: 24px;
`;

export const ProfileImageWrapper = styled.div<React.CSSProperties>`
  position: absolute;
  right: 24px;
  top: 150px;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  & > p {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;


export const HelloTitle = styled.div<React.CSSProperties>`
  border-left: 4px solid #0031b0;
  padding-left: 20px;
  color: #000;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 24px;
`;
