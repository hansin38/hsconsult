import React, { Fragment } from 'react';
import Slider from 'react-slick';
import Table from '@/components/Table/Table';
import { ElectricalFieldSection, ElectricalFieldSliderWrpper, ElectricalFieldTextWrpper, SliderArrow, SliderItem, SliderTextWrpper, SliderWrapper } from './ElectricalField.styles';
import { INITAL_ELECTRICAL_FIELD_DATA } from './ElectricalField.constants';

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
          설계본부는 1990년도부터 전기철도분야를 주축으로 송,변전설비, 공항, 도로, 공공 시설 및 기 타의 전기설계에 대하여 많은 기본 및 실시설계 경험을 갖고있으며 그러한 바탕으로
          기술역량에 대한 무한한 잠재력과 사업수행능력을 인정받아 사업영역을 성공적으로 넓혀왔으며 앞으로 이와 같은 신뢰를 바탕으로 전기설계 분야를 더더욱 발전시킬 것입니다.
        </h5>
      </ElectricalFieldTextWrpper>

      <ElectricalFieldTextWrpper>
        <h5>
          <strong>주요 실적</strong>
        </h5>
        <ElectricalFieldSliderWrpper>
          <SliderWrapper>
            <Slider {...settings}>
              <SliderItem bgImage={'/images/sub-slide-banner01.png'} />
              <SliderItem bgImage={'/images/sub-slide-banner02.png'} />
              <SliderItem bgImage={'/images/sub-slide-banner03.png'} />
            </Slider>
          </SliderWrapper>
          <SliderTextWrpper>
            <h5>
              <strong>이러쿵 저러쿵 어떤 과업을 했나 적어주세요</strong>
            </h5>
            <h6>2000.00.00 - 2000.00.00</h6>
          </SliderTextWrpper>
        </ElectricalFieldSliderWrpper>
        <ElectricalFieldSection>
          <Table data={INITAL_ELECTRICAL_FIELD_DATA} />
        </ElectricalFieldSection>
      </ElectricalFieldTextWrpper>
    </Fragment>
  );
};

export default ElectricalField;
