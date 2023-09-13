import React from 'react';
import { ContentsLayoutContainer, ContentsLayoutWrapper } from 'src/components/ContentsLayout/ContentsLayout.styles';
import Aside from '../Aside/Aside';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import { ContentsLayoutItemLeft, ContentsLayoutItemRight } from './ContentsLayout.constants';

const ContentsLayout = ({ children }): React.ReactElement => {
  return (
    <ContentsLayoutContainer>
      <ContentsLayoutWrapper>
        <ContentsLayoutItemLeft>
          <BreadCrumb />
          <Aside />
        </ContentsLayoutItemLeft>
        <ContentsLayoutItemRight>{children}</ContentsLayoutItemRight>
      </ContentsLayoutWrapper>
    </ContentsLayoutContainer>
  );
};

export default ContentsLayout;
