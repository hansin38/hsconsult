import React from 'react';
import styled from '@emotion/styled';
import { IAsideItemProps } from './Aside.types';
export const AsideItem = styled.div<IAsideItemProps>`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  border-left: 4px solid ${(props) => (props.active ? '#0031B0' : 'transparent')};
  background: ${(props) => (props.active ? '#F9F9F9' : 'transparent')};
  color: ${(props) => (props.active ? '#0031B0' : '#000')};
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const AsideTabItem = styled.div<IAsideItemProps>`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  color: ${(props) => (props.active ? '#000' : '#7c7c7c')};
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;
export const AsideContainer = styled.div<React.CSSProperties>`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid #efefef;
`;
