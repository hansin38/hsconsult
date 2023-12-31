import React from 'react';
import styled from '@emotion/styled';
import { IBreadCrumbItemProps } from './BreadCrumb.types';

export const BreadCrumbItem = styled.div<IBreadCrumbItemProps>`
  font-size: 14px;
  font-weight: ${(props) => (props.active ? 'bold' : 400)};
  line-height: 22px;
  color: #7c7c7c;
  white-space: pre;
  letter-spacing: -1px;
`;

export const BreadCrumbContainer = styled.div<React.CSSProperties>`
  display: flex;
  margin-bottom: 12px;
  & > ${BreadCrumbItem} {
    &:not(:last-child):after {
      content: ' > ';
      padding: 0 5px;
    }
  }
`;
