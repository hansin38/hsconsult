import React, { Fragment } from 'react';
import { ElectricalFieldTextWrpper } from './ConstructionField.styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ElectricalField = () => {
    return (
        <Fragment>
            <ElectricalFieldTextWrpper>
                <h5>
                    <strong>분야 소개</strong>
                </h5>
                <h5></h5>
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
