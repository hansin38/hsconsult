import React from 'react';
import styled from '@emotion/styled';
import { ContentsLayoutTopImageWrapper } from '@/components/ContentsLayout/ContentsLayout.styles';

export const ContactDirectionsImageWrapper = styled(ContentsLayoutTopImageWrapper)<React.CSSProperties>`
`;
export const ContactDirectionsContainer = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 24px;
  gap: 12px;
  width: 100%;₩
  margin-bottom: 36px;
  max-width: 1280px;
`;

export const ContactDirectionsTextWrpper = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
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

export const ContactDirectionsSection = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  margin-bottom: 64px;
`;

export const SectionContents = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  gap: 32px;
  & > div:first-of-type {
    width: 628px;
    height: 353px;
    position: relative;
  }
  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    padding: 24px;
    & > div {
      display: flex;
      & > div:first-of-type {
        color: #000;
        width: 84px;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      }
      & > div:last-of-type {
        color: #545454;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
`;

export const SectionTitle = styled.div<React.CSSProperties>`
  border-left: 4px solid #0031b0;
  padding-left: 20px;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;
