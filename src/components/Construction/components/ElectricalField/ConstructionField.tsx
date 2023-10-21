import React, { Fragment } from 'react';
import Slider from 'react-slick';
import Table from '@/components/Table/Table';
import {
  ElectricalFieldSection,
  ElectricalFieldSliderWrpper,
  ElectricalFieldTextWrpper,
  SliderArrow,
  SliderItem,
  SliderTextWrpper,
  SliderWrapper,
} from './ConstructionField.styles';
import { INITAL_ELECTRICAL_FIELD_DATA } from './ConstructionField.constants';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ElectricalField = (): React.ReactElement => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow arrow="right" />,
    prevArrow: <SliderArrow arrow="left" />,
  };
  return (
    <Fragment>
      <ElectricalFieldTextWrpper>
        <h5>
          <strong>분야 소개</strong>
        </h5>
        <h5>
        </h5>
      </ElectricalFieldTextWrpper>

      <ElectricalFieldTextWrpper>
        <h5>
          <strong>주요 실적</strong>
        </h5>
        {/*<ElectricalFieldSliderWrpper>
          <SliderWrapper>
            <Slider {...settings}>
              <SliderItem bgImage={'/images/field-content-slide-banner01.jpg'} />
              <SliderItem bgImage={'/images/field-content-slide-banner02.jpg'} />
              <SliderItem bgImage={'/images/field-content-slide-banner03.jpg'} />
            </Slider>
          </SliderWrapper>
          <SliderTextWrpper>
            <h5>
              <strong>이러쿵 저러쿵 어떤 과업을 했나 적어주세요</strong>
            </h5>
            <h6>2000.00.00 - 2000.00.00</h6>
          </SliderTextWrpper>
        </ElectricalFieldSliderWrpper>*/}
        {/* <ElectricalFieldSection>
          <Table data={INITAL_ELECTRICAL_FIELD_DATA} />
        </ElectricalFieldSection> */}
      </ElectricalFieldTextWrpper>
    </Fragment>
  );
};

export default ElectricalField;
