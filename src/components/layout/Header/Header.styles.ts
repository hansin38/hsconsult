import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  padding: 0 80px;
  border-bottom: 1px solid #EFEFEF;
  &:hover > .snb {
    display: flex;
  }
`;
