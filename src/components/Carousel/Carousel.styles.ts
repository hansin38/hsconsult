import styled from '@emotion/styled';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const CarouselTrack = styled.div`
  position: relative;
  width: 100%;
  & .slick-dots {
    position: absolute;
    width: 200px;
    bottom: 35px;
    padding-left: 24px;
    display: flex !important;
    z-index: 1;
    & > li {
      margin: 0 !important;
      & > button:before {
        color: #ffffff !important;
        font-size: 10px;
      }
    }
  }
`;
export const CarouselSlide = styled.div<{ imgSrc: string; height: string }>`
  background-image: url(${(props) => props.imgSrc});
  height: ${(props) => props.height};
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

export const CarouselDots = styled.div`
  display: flex;
  & > i {
    display: flex;
    width: 18px;
    height: 18px;
    opacity: 0.5;
    cursor: pointer;
    &::before {
      content: '';
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: white;
      width: 8px;
      height: 8px;
    }
    &.active {
      opacity: 1;
    }
  }
`;

export const CarouselNumber = styled.div`
  color: #fff;
  text-align: justify;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  gap: 8px;
  & > span {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`;
export const CarouselIndicator = styled.div`
  color: #ffffff;
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 104px;
  max-width: 1440px;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
`;
// 언제 어디서나 당신의 미래를 밝힙니다.

// 이러하고 저러한 설명으로 매력을 어필합니다.
// 두 줄까지 작성할 수 있습니다.
