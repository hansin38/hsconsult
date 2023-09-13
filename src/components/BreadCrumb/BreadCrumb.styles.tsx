import React from 'react';
import styled from '@emotion/styled';
import { IBreadCrumbItemProps } from './BreadCrumb.types';

export const BreadCrumbItem = styled.div<IBreadCrumbItemProps>`
  font-size: 14px;
  font-weight: ${(props) => (props.active ? 'bold' : 400)};
  line-height: 22px;
  color: #7c7c7c;
`;

export const BreadCrumbContainer = styled.div<React.CSSProperties>`
  display: flex;
  & > ${BreadCrumbItem} {
    &:not(:last-child):after {
      content: ' > ';
      padding: 0 5px;
    }
  }
`;
