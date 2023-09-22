import styled from '@emotion/styled';

export const ArticleDetailTable = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 84px auto 194px;
  grid-template-rows: 48px auto;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #EFEFEF;
    background-color: #F9F9F9;
    box-sizing: border-box;
    border-right: 1px solid #EFEFEF;
    color: #7C7C7C;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    &:nth-of-type(2), &:nth-child(2) {
      color: #000000; 
    }
    &:nth-of-type(3), &:nth-child(3) {
      border-right: unset;
    }
    :last-of-type, :last-child {
      color: #000000;
      background-color: transparent;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 24px;
      box-sizing: border-box;
      border-right: unset;
      white-space: pre-wrap;
      word-break: break-word;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }
  }
`;

export const ArticleDetailContent = styled.div`
  display: grid;
  grid-column: 1 / 4;
`;
