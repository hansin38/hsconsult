import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  position: relative;
  background-color: #444444;
  padding: 48px 80px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: fit-content;
  margin-top: auto;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #F2F2F2;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  & > div {
    display: flex;
    width: 100%;
    gap: 16px;
  }
`;

export const Copyright = styled.div`
  color: #727272;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;
