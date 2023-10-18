import styled from '@emotion/styled';

export const TableRow = styled.div`
  display: table-row;
  border-bottom: 1px solid #efefef;
  font-size: 16px;
  line-height: 24px;
  height: 48px;
  & > div {
    display: table-cell;
    border-right: 1px solid #efefef;
    text-align: center;
    vertical-align: middle;
    &:first-of-type {
      width: 84px;
    }
    &:nth-of-type(2) {
    }
    &:last-of-type {
      width: 194px;
      border-right: none;
    }
  }
`;

export const TableHeader = styled(TableRow)`
  background-color: #f9f9f9;
  font-weight: 600;
`;

export const TableContainer = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`;

export const TableFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #7c7c7c;
  border-bottom: 1px solid #7c7c7c;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
`;

export const TableFlexHeader = styled.div``;
export const TableFlexRow = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #efefef;
  font-size: 16px;
  min-height: 48px;
  line-height: 22px;
  & > div:first-of-type {
    background-color: #f9f9f9;
    font-weight: 600;
    border-right: 1px solid #efefef;
    flex-shrink: 0;
    height: auto;
  }
  & > div {
    height: 100%;
    padding: 16px 24px;
    vertical-align: middle;
  }
`;
