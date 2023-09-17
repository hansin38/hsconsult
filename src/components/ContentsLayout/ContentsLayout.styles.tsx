import React from 'react';
import styled from '@emotion/styled';

export const ContentsLayoutContainer = styled.div<React.CSSProperties>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 68px;
`;
export const ContentsLayoutTopImageWrapper = styled.div<React.CSSProperties>`
  position: relative;
  width: 100%;
  background: #070c14;
  height: 240px;
  &::before {
    z-index: 1;
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    width: 25%;
    background-image: linear-gradient(to left, transparent 0, black 50%);
  }
  &::after {
    z-index: 1;
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    width: 25%;
    background-image: linear-gradient(to right, transparent 0, black 50%);
  }
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
