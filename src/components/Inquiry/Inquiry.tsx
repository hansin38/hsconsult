import React from 'react';
import { InquiryContainer, InquiryTextWrpper } from './Inquiry.styles';


const Inquiry = (): React.ReactElement => {
  return (
    <InquiryContainer>
      <InquiryTextWrpper>
        <h3>1:1 문의</h3>
        <h5>문의할 사항을 남겨주시면 가능한 빠르게 답변 드리도록 하겠습니다.</h5>
      </InquiryTextWrpper>
    </InquiryContainer>
  );
};

export default Inquiry;
