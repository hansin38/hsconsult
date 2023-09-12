import React from 'react';
import styled from '@emotion/styled';

export const CommonContainer = styled.main<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const getExampleState = (store) => store.example;
export const setExampleState = (store) => store.setExample;
