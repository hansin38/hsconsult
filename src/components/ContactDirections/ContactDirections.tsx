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
import { MainLocationMap, MainLocationMapContainer } from '@/components/Main/MainLocation/MainLocation.styles';
import { location } from '@/components/Main/MainLocation/MainLocation.constants';

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
            <MainLocationMapContainer>
              <MainLocationMap src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9328239231695!2d127.11803179999998!3d37.509502499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5790ba59227%3A0x334aded18ec03fd1!2z7ISc7Jq47Yq567OE7IucIOyGoe2MjOq1rCDqsIDrnb3roZwgMjQw!5e0!3m2!1sko!2skr!4v1694957054008!5m2!1sko!2skr'}
                               allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </MainLocationMapContainer>
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
            <MainLocationMapContainer>
              <MainLocationMap src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9328239231695!2d127.11803179999998!3d37.509502499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5790ba59227%3A0x334aded18ec03fd1!2z7ISc7Jq47Yq567OE7IucIOyGoe2MjOq1rCDqsIDrnb3roZwgMjQw!5e0!3m2!1sko!2skr!4v1694957054008!5m2!1sko!2skr'}
                               allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </MainLocationMapContainer>
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
