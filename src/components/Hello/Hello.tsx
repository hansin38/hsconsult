import React from 'react';
import { HelloContainer, HelloImageWrapper, HelloTextWrpper, HelloTitle, ProfileImageWrapper } from 'src/components/Hello/Hello.styles';
import { Logo } from '@/components/svg/Logo';

const Hello = (): React.ReactElement => {
  return (
    <HelloContainer>
      {/*<HelloImageWrapper>*/}
      {/*  <Image src="/images/hello.jpg" layout={'fill'} alt="상단 이미지 영역" />*/}
      {/*</HelloImageWrapper>*/}
      <HelloTitle>인사말</HelloTitle>
      <Logo height={100} />
      <HelloTextWrpper>
          {/* eslint-disable-next-line max-len */}
          1979년 창업이래 40년간 전기분야 엔지니어링(설계, 감리)사업에 참여하였으며,
        <br />대표이사 주도하에 모든 핵심 기술인력들은 발전, 송변전, 배전시설을 비롯한 공공 및 민수용 <br />
        각종 건설사업 (철도, APT, 공항, 항만, 도로, 상하수도설비 등)의 설계, 감리용역을 성공적으로 이끌어 왔습니다.<br />저희 회사 임직원들은 이와 같은 수많은 Project 수행 경험에서 얻은 Know-How를 토대로<br />주어진 사업에 대하여 훌륭한 성과를 거둘 수 있도록 최선을 다하겠습니다. 감사합니다.
      </HelloTextWrpper>
    </HelloContainer>
  );
};

export default Hello;
