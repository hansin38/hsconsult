import React from 'react';
import styled from '@emotion/styled';

export const ContentsLayoutContainer = styled.div<React.CSSProperties>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 68px;
`;
export const ContentsLayoutTopImageWrapper = styled.div<{image: string}>`
  position: relative;
  width: 100%;
  height: 240px;
  background-image: url("${props => props.image}");
  background-position: center;
  background-size: cover;
  color: #FFFFFF;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentsLayoutWrapper = styled.div<React.CSSProperties>`
  display: flex;
  width: 100%;
  max-width: 1280px;
  height: auto;
  gap: 24px;
  margin: 0 auto;
`;

export const ContentsLayoutItemLeft = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 193px;
  height: auto;
`;

export const ContentsLayoutItemRight = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: calc(100% - 193px);
  height: auto;
`;
