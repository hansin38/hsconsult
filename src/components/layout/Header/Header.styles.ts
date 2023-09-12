import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: -0.01px;
  box-sizing: border-box;
  padding: 0 80px;
  
  border-bottom: 1px solid #EFEFEF;
  background-color: #ffffff;
  &.stuck {
    margin-top: 0.01px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.20);
    & > .gnb {
      color: #ffffff;
    }
  }
  &:hover {
    border-bottom: 1px solid #EFEFEF;
    background-color: #ffffff;
    & > .gnb {
      color: #000000;
    }
    & > .snb {
      display: flex;
    }
  }
`;
