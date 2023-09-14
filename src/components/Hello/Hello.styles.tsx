import React from 'react';
import styled from '@emotion/styled';

export const HelloContainer = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
`;
export const HelloTextWrpper = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 740px;
  margin-top: 32px;
  gap: 24px;
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

export const HelloImageWrapper = styled.div<React.CSSProperties>`
  position: relative;
  width: 100%;
  height: 200px;
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
