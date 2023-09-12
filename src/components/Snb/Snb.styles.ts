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
  & > div {
    & > a {
      display: flex;
      width: 136px;
      height: 48px;
      justify-content: center;
      align-items: center;
    }
  }
`;
