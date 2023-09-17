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
          철도사업본부는 2007년 수도권 고속철도 건설기본계획 수립으로 시작된 철도분야의 진출로 기술역량에 대한 무한한 잠재력과 사업수행능력을 인정받아 고속철도,일반철도,
          차량기지까지 기본 및 실시설계업무의 사업영역을 성공적으로 넓혀 왔으며, 이와 같은 신뢰를 바탕으로 철도 관련 민간투자사업 및 턴키사업에 참여하여, 대한민국 최고의 철도설계
          기술력을 다시 한번 인정 받는 성과를 거두었으며, 진정한 글로벌 엔지니어링 회사로 발전할 것입니다.
        </h5>
      </ElectricalFieldTextWrpper>

      <ElectricalFieldTextWrpper>
        <h5>
          <strong>주요 실적</strong>
        </h5>
        <ElectricalFieldSliderWrpper>
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
        </ElectricalFieldSliderWrpper>
        <ElectricalFieldSection>
          <Table data={INITAL_ELECTRICAL_FIELD_DATA} />
        </ElectricalFieldSection>
      </ElectricalFieldTextWrpper>
    </Fragment>
  );
};

export default ElectricalField;
