import styled from '@emotion/styled';

export const MainLocationContainer = styled.div`
  width: 100%;
  & > strong {
    color: #545454;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px; /* 150% */
  }
`;


export const MainLocationTabs = styled.div`
  flex: 1;
  display: flex;
`;
export const MainLocationTab = styled.label`
  & > input {
    display: none;
  }
  display: flex;
  flex: 0.5;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  font-weight: 600;
  cursor: pointer;;
  &:has(:checked), &.checked {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const MainLocationMapContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 628 / 353;
  overflow: hidden;
  background-color: dimgray;
  border-radius: 4px;
  border: 1px solid #EFEFEF;
  margin-bottom: 12px;
  pointer-events: none;
`;

export const MainLocationMap = styled.img`
  width: 150%;
  height: 150%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
