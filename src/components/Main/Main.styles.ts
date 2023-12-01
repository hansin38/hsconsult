import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

export const GoDetail = styled(Link)`
  display: flex;
  padding: 0 12px;
  height: 36px;
  align-items: center;
  justify-content: center;
  color: #7c7c7c;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  margin-left: auto;
  gap: 8px;
  &::before {
    color: #7c7c7c;
    content: '자세히 보기';
  }
  &::after {
    display: block;
    width: 16px;
    height: 16px;
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M2.8 8.4H12.288L9.384 11.888C9.10123 12.2282 9.14779 12.7332 9.488 13.016C9.82821 13.2988 10.3332 13.2522 10.616 12.912L14.616 8.112C14.6429 8.07382 14.667 8.03371 14.688 7.992C14.688 7.952 14.728 7.928 14.744 7.888C14.7803 7.79627 14.7992 7.69863 14.8 7.6C14.7992 7.50137 14.7803 7.40373 14.744 7.312C14.744 7.272 14.704 7.248 14.688 7.208C14.667 7.16629 14.6429 7.12618 14.616 7.088L10.616 2.288C10.4637 2.10517 10.2379 1.99962 10 2C9.81308 1.99964 9.63193 2.06474 9.488 2.184C9.32439 2.31964 9.22148 2.5148 9.20197 2.72642C9.18246 2.93805 9.24795 3.14874 9.384 3.312L12.288 6.8H2.8C2.35817 6.8 2 7.15817 2 7.6C2 8.04183 2.35817 8.4 2.8 8.4Z' fill='%237C7C7C'/%3E%3C/svg%3E");
  }
`;
export const SectionTitle = styled.h2<{ largeGap?: boolean }>`
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: ${(props) => (props.largeGap ? '24' : '12')}px;
  display: flex;
`;

export const SectionDescription = styled.div<{ color?: string }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
  text-align: justify;
  ${({ color }) => (color ? `color: ${color};` : '')}
`;

export const SectionBodyItem = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: pointer;
  & > img {
    margin-bottom: 24px;
  }
  & > div:first-of-type {
    margin-bottom: 12px;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
  }
  & > div:last-of-type {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const SectionBody = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;

export const Section = styled.section<{ multi?: boolean }>`
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
  ${(props) =>
    props.multi
      ? css`
          display: flex;
          gap: 24px;
          & > section {
            flex: 0.5 !important;
            width: auto !important;
            padding: 0 !important;
            max-width: unset !important;
            &::before {
              display: none !important;
              content: unset !important;
            }
            & > ${SectionTitle} {
              font-size: 32px;
              line-height: 36px;
            }
          }
        `
      : ''}
`;

export const CarouselSection = styled(Section)`
  &::before {
    background-color: #000000;
  }
  max-width: 100%;
  height: 590px;
  padding: 0;
`;

export const BusinessSection = styled(Section)`
  ${SectionBodyItem} {
    & > img {
      width: 100%;
      aspect-ratio: 411 / 308;
      background-color: dimgray;
    }
  }
`;
export const ActionSection = styled(Section)`
  &::before {
    background-color: #0d1e4b;
  }
  color: #ffffff;
  & > ${SectionDescription} {
    margin-bottom: 64px;
  }
  ${SectionBodyItem} {
    align-items: center;
    & > img {
      width: 80px;
      height: 80px;
      border-radius: 5px;
      background-color: white;
    }
    & > div {
      text-align: center;
    }
  }
`;
export const LocationSection = styled(Section)``;

export const MainSliderItem01 = styled.div<React.CSSProperties>`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1062px;
  margin: 0 auto;
  gap: 8px;
  padding-top: 85px;
  letter-spacing: 1px;
  & > h3 {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
  }
  & > h5 {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;
