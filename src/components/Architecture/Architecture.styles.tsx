import React from 'react';
import styled from '@emotion/styled';
import { IArchitectureContainerTabsItem } from './Architecture.types';

export const ArchitectureContainer = styled.div<React.CSSProperties>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  gap: 32px;
`;
export const ArchitectureTextWrpper = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
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

export const ArchitectureImageWrapper = styled.div<React.CSSProperties>`
  position: relative;
  width: 100%;
  height: 200px;
`;

export const ArchitectureTitle = styled.div<React.CSSProperties>`
  border-left: 4px solid #0031b0;
  padding-left: 20px;
  color: #000;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
`;

export const ArchitectureContainerTabs = styled.div<React.CSSProperties>`
  display: flex;
  gap: 12px;
`;

export const ArchitectureContainerTabsItem = styled.div<IArchitectureContainerTabsItem>`
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
