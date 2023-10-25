import React from 'react';
import styled from '@emotion/styled';

export const OrganizationContainer = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-top: 34px;
`;

export const OrganizationWrapper = styled.div<React.CSSProperties>`
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div<React.CSSProperties>``;
export const Wrapper = styled.div<React.CSSProperties>``;
export const SubWrapper = styled.div<React.CSSProperties>``;
export const ProfileWrapper = styled.div<React.CSSProperties>``;

export const OrganizationExecutivesGroup = styled.div<React.CSSProperties>`
  display: flex;
  flex-direction: column;
  & > ${Wrapper} {
    border-radius: 4px;
    /* padding: 48px 0; */
    position: relative;
    & > ${Title} {
      display: flex;
      padding: 12px 40px;
      justify-content: center;
      align-items: center;
      gap: 32px;
      align-self: stretch;
      border-radius: 4px;
      border-bottom: 2px solid #efefef;
      background: #f9f9f9;
    }
    & > ${SubWrapper} {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 100px;
      padding: 24px;
      & > ${ProfileWrapper} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
        color: #000;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px; /* 157.143% */
      }
    }
  }
`;

export const OrganizationContent = styled.div<React.CSSProperties>`
  border-radius: 4px;
  padding: 48px 0;
  position: relative;
  height: 956px;
`;

export const OrganizationTitle = styled.div<React.CSSProperties>`
  border-left: 4px solid #0031b0;
  padding-left: 20px;
  color: #000;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
`;
