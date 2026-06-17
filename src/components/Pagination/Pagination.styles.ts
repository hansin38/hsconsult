import styled from '@emotion/styled';


export const PaginationBody = styled.ul`
  display: flex;
  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    &.pageNumber, &:last-of-type, &:last-child, &:first-of-type, &:first-child {
      cursor: pointer;
    }
    &.active {
      color: #ffffff;
      font-weight: 600;
      border-radius: 50%;
      background-color: #0031B0;
    }
    &.none {
      cursor: not-allowed;
    }
  }
`;
export const PaginationContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;
