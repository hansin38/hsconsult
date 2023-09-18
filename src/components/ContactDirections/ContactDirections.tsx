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
              <MainLocationMap src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.2264406040447!2d129.02702901774845!3d35.103605418468796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568e99fa89b7279%3A0x58ad78ecf4b11149!2z67aA7IKw6rSR7Jet7IucIOykkeq1rCDqs6DqsIDquLggMzI!5e0!3m2!1sko!2skr!4v1694995140256!5m2!1sko!2skr'}
                               allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </MainLocationMapContainer>
            <div>
              <div>
                <div>주소</div>
                <div>
                  <b>부산광역시 중구 고가길32 (보수동1가)</b>
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
                  <b>서울특별시 송파구 가락로240 (방이동)</b>
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
            </div>
          </SectionContents>
        </ContactDirectionsSection>
      </ContactDirectionsContainer>
    </Fragment>
  );
};

export default ContactDirections;
