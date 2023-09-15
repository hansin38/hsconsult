import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/components/layout/Layout';
import { ActionSection, BusinessSection, CarouselContainer, CarouselSection, LocationSection, Section, SectionDescription, SectionTitle } from '@/components/Main/Main.styles';

const Home: NextPage = (): React.ReactElement => {
  return (<Layout transparentHeader>
    <CarouselSection>
      <CarouselContainer>

      </CarouselContainer>
    </CarouselSection>
    <BusinessSection>
      <SectionTitle>비즈니스 분야</SectionTitle>
      <SectionDescription>2007년 설립된 (주)서현기술단은 토목(철도), 토질 및 기초, 토목구조, 공공측량을 바탕으로 철도계획, 설계, 감리, 타당성조사, 컨설턴트 등 토목엔지니어링 서비스를 제공하는 회사입니다.</SectionDescription>
    </BusinessSection>
    <ActionSection>
      <SectionTitle>한신콘설탄트는 이렇게 합니다.</SectionTitle>
      <SectionDescription color={'rgba(255, 255, 255, 0.60)'}>피고인의 자백이 고문·폭행·협박·구속의 부당한 장기화 또는 기망 기타의 방법에 의하여 자의로 진술된 것이 아니라고 인정될 때<br />
        또는 정식재판에 있어서 피고인의 자백이 그에게 불리한 유일한 증거일 때에는 이를 유죄의 증거로 삼거나 이를 이유로 처벌할 수 없다.</SectionDescription>
    </ActionSection>
    <LocationSection multi>
      <Section>
        <SectionTitle largeGap>공지사항</SectionTitle>
        <SectionDescription></SectionDescription>
      </Section>
      <Section>
        <SectionTitle largeGap>찾아오시는 길</SectionTitle>
        <SectionDescription></SectionDescription>
      </Section>
    </LocationSection>
    </Layout>);
};

export default Home;
