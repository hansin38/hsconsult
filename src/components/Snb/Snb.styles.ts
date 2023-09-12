import styled from '@emotion/styled';

export const SnbContainer = styled.div`
  width: 100%;
  top: 90px;
  left: 0;
  display: none;
  justify-content: flex-end;
  position: absolute;
  box-sizing: border-box;
  padding: 12px 80px;
  border-radius: 0 0 4px 4px;
  background-color: #ffffff;
  & > div {
    & > a {
      display: flex;
      width: 136px;
      height: 48px;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px; /* 150% */
      &.active {
        font-weight: 600;
      }
    }
  }
`;
