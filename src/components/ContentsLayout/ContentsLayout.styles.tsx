import React from 'react';
import styled from '@emotion/styled';

export const ContentsLayoutContainer = styled.div<React.CSSProperties>`
  width: 100%;
  background-color: white;
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
  flex-basis: 193px;
  flex-direction: column;
  width: 100%;
  background: orange;
  height: auto;
`;

export const ContentsLayoutItemRight = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: purple;
  height: auto;
`;
