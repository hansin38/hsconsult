import React from 'react';
import styled from '@emotion/styled';

export const ContentsLayoutContainer = styled.div<React.CSSProperties>`
  display: flex;
  background-color: white;
  width: 100%;
  max-width: 1280px;
  height: auto;
  gap: 24px;
`;

export const ContentsLayoutItemLeft = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 193px;
  height: auto;
  gap: 12px;
`;

export const ContentsLayoutItemRight = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
