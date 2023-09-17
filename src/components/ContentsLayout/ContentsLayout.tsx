import React from 'react';
import Image from 'next/image';
import {
  ContentsLayoutContainer,
  ContentsLayoutItemLeft,
  ContentsLayoutItemRight,
  ContentsLayoutTopImageWrapper,
  ContentsLayoutWrapper,
} from 'src/components/ContentsLayout/ContentsLayout.styles';
import Aside from '../Aside/Aside';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import { IContentLayout } from './ContentsLayout.types';

const ContentsLayout = ({ topImgSrc, children }: IContentLayout): React.ReactElement => {
  return (
    <ContentsLayoutContainer>
      {topImgSrc && (
        <ContentsLayoutTopImageWrapper>
          <Image src={topImgSrc} layout="fill" objectFit="contain" alt="상단 이미지 영역" />
        </ContentsLayoutTopImageWrapper>
      )}
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
