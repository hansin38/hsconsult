import React from 'react';
import styled from '@emotion/styled';

export const TalentContainer = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  gap: 32px;
`;

export const TalentTextWrpper = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
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
export const TalentCardWrapper = styled.div<React.CSSProperties>`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const TalentCard = styled.div<React.CSSProperties>`
  display: flex;
  padding: 48px 40px;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  border-radius: 4px;
  border: 1px solid #efefef;
  background: #fff;
  width: 519px;
  & > div:first-of-type {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #efefef;
  }
  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    & > h3 {
      color: #000;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      & > span {
        color: #2951ba;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
    & > h5 {
      color: #525252;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;
