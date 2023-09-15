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
  &::before {
    position: absolute;
    top: 0;
    left: -50%;
    right: -50%;
    bottom: 0;
    content: '';
    border-radius: 0 0 4px 4px;
    background-color: #ffffff;
    z-index: 0;
  }
  & > div {
    z-index: 1;
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
