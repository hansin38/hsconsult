import React from 'react';
import styled from '@emotion/styled';
import { Section } from '@/components/Main/Main.styles';

export const ElectricalFieldTextWrpper = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  & > h3 {
    color: #000;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
  }
  & > h5 {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    word-break: keep-all;
  }
`;

export const ElectricalFieldSection = styled(Section)`
  padding: 0;
`;
export const ElectricalFieldSliderWrpper = styled.div<React.CSSProperties>`
  display: flex;
  padding: 24px 24px 0px 24px;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #efefef;
`;
export const SliderTextWrpper = styled.div<React.CSSProperties>`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  & > h5 {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    word-break: keep-all;
  }
  & > h6 {
    color: #7c7c7c;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`;
export const SliderItem = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  height: 363px;
  width: 100%;
  background-size: cover;
`;
export const SliderArrow = styled.div<{ arrow: 'left' | 'right' }>`
  z-index: 1;
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: #000;
  position: absolute;
  top: calc(50% - 24px);
  right: -24px;
  background-image: url('/images/arrow-button.png') !important;
  background-repeat: no-repeat !important;
  background-position: center cneter !important;
  background-size: 48px 48px !important;
  transform: ${(props) => (props.arrow === 'left' ? 'rotate(180deg)' : 'rotate(0deg)')};

  &::before {
    content: ' ';
  }
  &:hover {
    color: inherit;
    opacity: 0.8;
    background: #000;
  }
`;
export const SliderWrapper = styled.div<React.CSSProperties>`
  padding: 24px 24px 0px 24px;
  position: relative;
`;
