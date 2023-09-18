import React from 'react';
import { CarouselContainer, CarouselDots, CarouselIndicator, CarouselNumber, CarouselTrack } from './Carousel.styles';


const Carousel = (): React.ReactElement => {
  return (
    <CarouselContainer>
      <CarouselTrack>

      </CarouselTrack>
      <CarouselIndicator>
        <CarouselDots>a</CarouselDots>
        <CarouselNumber>
aaa
        </CarouselNumber>
      </CarouselIndicator>
    </CarouselContainer>
  );
};

export default Carousel;
