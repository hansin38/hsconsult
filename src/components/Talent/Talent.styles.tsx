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
  align-items: center;
  justify-content: center;
`;

export const TalentCard = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  padding: 48px 40px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background: #fff;
  width: 519px;
  & > div:first-of-type {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    //background: #f9f9f9;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    color: #000;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px; /* 150% */

  }
`;
