import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Section = styled.section<{multi?: boolean}>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 80px;
  max-width: 1440px;
  &::before {
    content: '';
    display: block;
    top: 0;
    left: -50%;
    right: -50%;
    bottom: 0;
    position: absolute;
    z-index: -1;
  }
  ${props => props.multi ? css`
    display: flex;
    gap: 24px;
    & > section {
      flex: 0.5!important;
      width: auto!important;
      padding: 0!important;
      max-width: unset!important;
      &::before {
        display: none!important;
        content: unset!important;
      }
    }
  ` : ''}
  
`;

export const CarouselSection = styled(Section)`
  &::before {
    background-color: #000000;
  }
  height: 590px;
`;

export const BusinessSection = styled(Section)`
  
`;
export const ActionSection = styled(Section)`
  &::before {
    background-color: #0D1E4B;
  }
  color: #ffffff;
`;
export const LocationSection = styled(Section)`
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: block;
`;

export const SectionTitle = styled.h2<{largeGap?: boolean}>`
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: ${props => props.largeGap ? '24' : '12'}px;
`;

export const SectionDescription = styled.div<{ color?: string }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
  ${({ color }) => color ? `color: ${color};` : ''}
`;
