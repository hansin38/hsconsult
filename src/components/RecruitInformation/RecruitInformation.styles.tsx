import React from 'react';
import styled from '@emotion/styled';

export const RecruitInformationContainer = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  gap: 32px;
  font-variant-numeric: tabular-nums;
`;

export const RecruitInformationTextWrpper = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  & > h3 {
    color: #000;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    & > span {
      color: #0031b0;
      /* H4 */
      font-size: 32px;
      font-weight: 700;
      line-height: 36px;
    }
  }
  & > h5 {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    word-break: keep-all;
  }
`;
