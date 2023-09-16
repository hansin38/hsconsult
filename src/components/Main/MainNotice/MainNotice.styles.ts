import styled from '@emotion/styled';

export const MainNoticeTableRow = styled.div`
  display: table-row;
  border-bottom: 1px solid #EFEFEF;
  font-size: 16px;
  line-height: 24px;
  height: 48px;
  & > div {
    display: table-cell;
    border-right: 1px solid #EFEFEF;
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

export const MainNoticeTableHeader = styled(MainNoticeTableRow)`
  background-color: #f9f9f9;
  font-weight: 600;
`;

export const MainNoticeTable = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`;
