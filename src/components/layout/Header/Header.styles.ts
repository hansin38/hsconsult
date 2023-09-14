import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const HeaderContainer = styled.header<{ transparent?: boolean }>`
  width: 100%;
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  padding: 0 80px;
  z-index: 1;
  ${(props) =>
    props.transparent
      ? css`
          background-color: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: -90px;
          & > strong {
            color: #ffffff;
          }
          & > .gnb {
            color: #ffffff;
          }
        `
      : css`
          border-bottom: 1px solid #efefef;
          background-color: #ffffff;
        `}
  &:hover {
    border-bottom: 1px solid #efefef;
    background-color: #ffffff;
    & > strong {
      color: #000000;
    }
    & > .gnb {
      color: #000000;
    }
    & > .snb {
      display: flex;
    }
  }
`;
