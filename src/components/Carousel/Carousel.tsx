import React from 'react';
import {} from './Carousel.constants';
import { ICarousel } from './Carousel.types';
import { CarouselContainer, CarouselDots, CarouselIndicator, CarouselNumber, CarouselTrack } from './Carousel.styles';


const Carousel = (props: ICarousel): React.ReactElement => {
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
