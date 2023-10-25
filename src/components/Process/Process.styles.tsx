import React from 'react';
import styled from '@emotion/styled';
import { TableFlexRow, TableRow } from '@/components/Table/Table.styles';

export const ProcessContainer = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  gap: 32px;
  ${TableRow}, ${TableFlexRow} {
    font-size: 20px;
  }
`;

export const ProcessTextWrpper = styled.div<React.CSSProperties>`
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
  }
  & > h5 {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    word-break: keep-all;
  }
`;
export const ProcessCardWrapper = styled.div<React.CSSProperties>`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: center;
  padding-block: 100px;
`;

export const ProcessCard = styled.div<{ color?: string}>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  align-items: center;
  text-align: center;
  gap: 8px;
  border-radius: 50%;
  background: #fff;
  border: 8px solid ${(props) => props.color || '#efefef'};
  width: 180px;
  height: 180px;

  color: #222;

  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  
  & > i {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
      width: 64%;
      height: 64%;
    }
  }
`;
