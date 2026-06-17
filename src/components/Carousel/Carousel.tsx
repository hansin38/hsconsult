import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { CarouselContainer, CarouselDots, CarouselIndicator, CarouselNumber, CarouselSlide, CarouselTrack } from './Carousel.styles';
import { ICarouselProps } from './Carousel.types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ data }: ICarouselProps): React.ReactElement => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const totalSlides = data.length;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
  };
  const handleOnNext = () => {
    if (currentSlide + 1 !== totalSlides) {
      setCurrentSlide(currentSlide + 1);
      sliderRef.current.slickNext();
    }
  };

  const handleOnPrev = () => {
    if (currentSlide + 1 !== 1) {
      setCurrentSlide(currentSlide - 1);
      sliderRef.current.slickPrev();
    }
  };
  const handleOnGoto = (i) => {
    setCurrentSlide(currentSlide - 1);
    sliderRef.current.slickGoTo(i);
  };

  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(currentSlide % totalSlides);
    }
  }, [currentSlide, totalSlides]);
  return (
    <CarouselContainer>
      <CarouselTrack>
        <Slider ref={sliderRef} {...settings}>
          {data.map((item) => (
            <CarouselSlide key={item.id} imgSrc={item.imgSrc} height={item.height}>
              {item.render()}
            </CarouselSlide>
          ))}
        </Slider>
      </CarouselTrack>
      <CarouselIndicator>
        <CarouselDots>
          {data.map((_, index) => (
            <i key={index} className={currentSlide === index ? 'active' : ''} onClick={() => handleOnGoto(index)} />
          ))}
        </CarouselDots>
        <CarouselNumber>
          <span style={{ opacity: currentSlide + 1 === 1 ? 0.5 : 1 }} onClick={handleOnPrev}>
            {'<'}
          </span>
          {currentSlide + 1} / {totalSlides}
          <span style={{ opacity: currentSlide + 1 === totalSlides ? 0.5 : 1 }} onClick={handleOnNext}>
            {'>'}
          </span>
        </CarouselNumber>
      </CarouselIndicator>
    </CarouselContainer>
  );
};

export default Carousel;
