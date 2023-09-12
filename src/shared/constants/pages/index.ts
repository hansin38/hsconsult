import React from 'react';
import styled from '@emotion/styled';

export const CommonContainer = styled.main<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const getExampleState = (store) => store.example;
export const setExampleState = (store) => store.setExample;
