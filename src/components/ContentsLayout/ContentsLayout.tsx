import React from 'react';
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

const ContentsLayout = ({ topImgSrc, title, children }: IContentLayout): React.ReactElement => {
    return (
        <ContentsLayoutContainer>
            {topImgSrc && <ContentsLayoutTopImageWrapper image={topImgSrc}>{title}</ContentsLayoutTopImageWrapper>}
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
