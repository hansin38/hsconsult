import React from 'react';
import styled from '@emotion/styled';

export const OverviewContainer = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  gap: 24px;
  margin-top: 34px;
  flex-wrap: wrap;
`;

export const OverviewItemCard = styled.div<React.CSSProperties>`
  width: 338px;
  border-radius: 4px;
  border: 1px solid #efefef;
  background: #fff;
  padding: 60px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > h3 {
    margin-top: 32px;
    color: #000;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
  & > h5 {
    margin-top: 12px;
    color: #525252;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;
