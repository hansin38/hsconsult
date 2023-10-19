import React from 'react';
import styled from '@emotion/styled';
import { IHistoryContainerTabsItem } from './History.types';

export const HistoryContainer = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 34px;
`;

export const HistoryContainerTabs = styled.div<React.CSSProperties>`
  display: flex;
  gap: 12px;
`;

export const HistoryContainerTabsItem = styled.div<IHistoryContainerTabsItem>`
  border: ${(props) => (props.active ? '2px solid #0031b0' : '1px solid #efefef')};
  background: ${(props) => (props.active ? '#F4F7FF' : '#ffffff')};
  color: #000;
  display: flex;
  padding: 12px 20px;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  line-height: 24px; /* 150% */
`;

export const HistoryContent = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const HistoryContentItem = styled.div<React.CSSProperties>`
  display: flex;
  padding: 24px 40px;
  align-items: flex-start;
  gap: 32px;
  border-radius: 4px;
  border: 1px solid #efefef;
  background: #fff;

  & > div {
    color: #000;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }
  & > ul {
    padding-top: 5px;
    list-style: disc;
    padding-left: 24px;
    & > li {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px; /* 150% */
      color: #7c7c7c;
    }
  }
`;

export const HistoryTitle = styled.div<React.CSSProperties>`
  border-left: 4px solid #0031b0;
  padding-left: 20px;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;
