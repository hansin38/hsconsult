import React, { Fragment } from 'react';
import Image from 'next/image';
import {
  ContactDirectionsContainer,
  ContactDirectionsImageWrapper,
  ContactDirectionsSection,
  ContactDirectionsTextWrpper,
  SectionContents,
  SectionTitle,
} from 'src/components/ContactDirections/ContactDirections.styles';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';

const ContactDirections = (): React.ReactElement => {
  return (
    <Fragment>
      <ContactDirectionsImageWrapper>
        <Image src="/images/contact-top-image.png" layout={'fill'} alt="상단 이미지 영역" />
      </ContactDirectionsImageWrapper>
      <ContactDirectionsContainer>
        <BreadCrumb />
        <ContactDirectionsTextWrpper>
          <h3>찾아오시는 길</h3>
          <h5>한신 콘설탄트까지 오시는 길에 대해 안내드립니다.</h5>
        </ContactDirectionsTextWrpper>
        <ContactDirectionsSection>
          <SectionTitle>본사</SectionTitle>
          <SectionContents>
            <div>
              <Image src="/images/map.jpg" layout={'fill'} alt="상단 이미지 영역" />
            </div>
            <div>
              <div>
                <div>주소</div>
                <div>
                  <b>서울 송파구 가락로 240 302호 (방이동,장안빌딩)</b>
                </div>
              </div>
              <div>
                <div>전화</div>
                <div>02-569-3380</div>
              </div>
              <div>
                <div>팩스</div>
                <div>02-569-3380</div>
              </div>
              <div>
                <div>층별 안내</div>
                <div>02-569-3380</div>
              </div>
              <div>
                <div>교통편</div>
                <div>
                  <strong style={{ color: '#7A41D3' }}>방이역 3번 출구</strong> 도보 10분 (500m) / <strong style={{ color: '#C3A860' }}>송파역 3번 출구</strong> 도보 10분 (500m)
                </div>
              </div>
            </div>
          </SectionContents>
        </ContactDirectionsSection>
        <ContactDirectionsSection>
          <SectionTitle>지사</SectionTitle>
          <SectionContents>
            <div>
              <Image src="/images/map.jpg" layout={'fill'} alt="상단 이미지 영역" />
            </div>
            <div>
              <div>
                <div>주소</div>
                <div>
                  <b>서울 송파구 가락로 240 302호 (방이동,장안빌딩)</b>
                </div>
              </div>
              <div>
                <div>전화</div>
                <div>02-569-3380</div>
              </div>
              <div>
                <div>팩스</div>
                <div>02-569-3380</div>
              </div>
              <div>
                <div>층별 안내</div>
                <div>02-569-3380</div>
              </div>
              <div>
                <div>교통편</div>
                <div>
                  <strong style={{ color: '#7A41D3' }}>방이역 3번 출구</strong> 도보 10분 (500m) / <strong style={{ color: '#C3A860' }}>송파역 3번 출구</strong> 도보 10분 (500m)
                </div>
              </div>
            </div>
          </SectionContents>
        </ContactDirectionsSection>
      </ContactDirectionsContainer>
    </Fragment>
  );
};

export default ContactDirections;
