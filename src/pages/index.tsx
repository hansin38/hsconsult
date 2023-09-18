import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import { ActionSection, BusinessSection, CarouselSection, GoDetail, LocationSection, Section, SectionBody, SectionBodyItem, SectionDescription, SectionTitle } from '@/components/Main/Main.styles';
import MainNotice from '@/components/Main/MainNotice/MainNotice';
import MainLocation from '@/components/Main/MainLocation/MainLocation';
import Carousel from '@/components/Carousel/Carousel';

const Home: NextPage = (): React.ReactElement => {
  return (<Layout transparentHeader>
    <CarouselSection>
      <Carousel />
    </CarouselSection>
    <BusinessSection>
      <SectionTitle>비즈니스 분야</SectionTitle>
      <SectionDescription>2007년 설립된 (주)서현기술단은 토목(철도), 토질 및 기초, 토목구조, 공공측량을 바탕으로 철도계획, 설계, 감리, 타당성조사, 컨설턴트 등 토목엔지니어링 서비스를 제공하는 회사입니다.</SectionDescription>
      <SectionBody>
        <SectionBodyItem>
          <img src='about:blank' alt='' />
          <div>회사소개</div>
          <div>해당 분야에 대한 설명을 적어줍니다.<br/>이러쿵 저러쿵 우리 이런 거 잘해요. 맡겨만 주세요.</div>
        </SectionBodyItem>
        <SectionBodyItem>
          <img src='about:blank' alt='' />
          <div>고객지원</div>
          <div>해당 분야에 대한 설명을 적어줍니다.<br/>이러쿵 저러쿵 우리 이런 거 잘해요. 맡겨만 주세요.</div>
        </SectionBodyItem>
        <SectionBodyItem>
          <img src='about:blank' alt='' />
          <div>채용정보</div>
          <div>해당 분야에 대한 설명을 적어줍니다.<br/>이러쿵 저러쿵 우리 이런 거 잘해요. 맡겨만 주세요.</div>
        </SectionBodyItem>
      </SectionBody>
    </BusinessSection>
    <ActionSection>
      <SectionTitle>한신콘설탄트는 이렇게 합니다.</SectionTitle>
      <SectionDescription color={'rgba(255, 255, 255, 0.60)'}>피고인의 자백이 고문·폭행·협박·구속의 부당한 장기화 또는 기망 기타의 방법에 의하여 자의로 진술된 것이 아니라고 인정될 때<br />
        또는 정식재판에 있어서 피고인의 자백이 그에게 불리한 유일한 증거일 때에는 이를 유죄의 증거로 삼거나 이를 이유로 처벌할 수 없다.</SectionDescription>
      <SectionBody>
        <SectionBodyItem>
          <img src='about:blank' alt='' />
          <div>회사소개</div>
          <div>해당 분야에 대한 설명을 적어줍니다.<br/>이러쿵 저러쿵 우리 이런 거 잘해요. 맡겨만 주세요.</div>
        </SectionBodyItem>
        <SectionBodyItem>
          <img src='about:blank' alt='' />
          <div>고객지원</div>
          <div>해당 분야에 대한 설명을 적어줍니다.<br/>이러쿵 저러쿵 우리 이런 거 잘해요. 맡겨만 주세요.</div>
        </SectionBodyItem>
        <SectionBodyItem>
          <img src='about:blank' alt='' />
          <div>채용정보</div>
          <div>해당 분야에 대한 설명을 적어줍니다.<br/>이러쿵 저러쿵 우리 이런 거 잘해요. 맡겨만 주세요.</div>
        </SectionBodyItem>
      </SectionBody>
    </ActionSection>
    <LocationSection multi>
      <Section>
        <SectionTitle largeGap>공지사항<GoDetail href={'/customer/notice'}/></SectionTitle>
        <SectionBody>
          <MainNotice />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle largeGap>찾아오시는 길<GoDetail href={'/contact/directions'}/></SectionTitle>
        <SectionBody>
          <MainLocation />
        </SectionBody>
      </Section>
    </LocationSection>
    </Layout>);
};

export default Home;
