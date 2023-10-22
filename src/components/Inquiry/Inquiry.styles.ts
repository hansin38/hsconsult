import styled from '@emotion/styled';
import React from 'react';

export const InquiryContainer = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  gap: 32px;
`;

export const InquiryTextWrpper = styled.div<React.CSSProperties>`
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

export const InquiryLabel = styled.label`
  display: block;
  margin-top: 12px;
  margin-bottom: 9px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  &:first-of-type, &:first-child {
    margin-top: 0;
  }
`;

export const InquiryForm = styled.form`
  display: flex;
  flex-direction: column;
  input, textarea {
    width: 100%;
    padding: 16px 14px;
    border-radius: 4px;
    border: 1px solid #EFEFEF;
    overflow: hidden;
    color: #7C7C7C;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  textarea {
    font-family: inherit;
    box-sizing: border-box;
    height: 144px;
    resize: none;
  }
  span {
    font-size: 12px;
    margin-top: 12px;
    display: block;
  }
`;

export const InquiryButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 32px;

  & > button {
    display: flex;
    width: 120px;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;

    &[type="button"] {
      border: 1px solid #EFEFEF;
      background-color: #FFF;
      color: #7C7C7C;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;

      &.green {
        background-color: #00b03b;
        color: #ffffff;
      }

      &.orange {
        background-color: #b04900;
        color: #ffffff;
      }
    }

    &[type="submit"], &:last-child, &:last-of-type {
      background-color: #0031B0;
      color: #ffffff;
    }
  }
`;
