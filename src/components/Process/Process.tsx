import React from 'react';
import { ProcessCard, ProcessCardWrapper, ProcessContainer, ProcessImageWrapper, ProcessTextWrpper, SectionTitle } from 'src/components/Process/Process.styles';
import { INITAL_RECRUIT_PROCESS_DATA } from '@/components/Process/Process.constants';
import Table from '@/components/Table/Table';
import Image from 'next/image';

const Arrow = ({ color }: { color: string }) =>
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="28" viewBox="0 0 17 28" fill="none">
  <path d="M2.5 2L14.5 14L2.5 26" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>;
const Process = (): React.ReactElement => {
  return (
    <ProcessContainer>
      <ProcessImageWrapper>
        <Image src="/images/process_top.webp" layout={'fill'} alt="상단 이미지 영역" />
      </ProcessImageWrapper>
      <ProcessTextWrpper>
        <h3>채용프로세스</h3>
      </ProcessTextWrpper>
      <ProcessCardWrapper>
        <ProcessCard color={'#DBE5FF'}>
          <i>
            <img src='/images/resume.png' alt='resume' />
          </i>
          지원서 접수
        </ProcessCard>
        <Arrow color={'#DBE5FF'}/>
        <ProcessCard color={'#8DA9F1'}>
          <i>
            <img src='/images/approved.png' alt='approved' />
          </i>
          서류 전형
        </ProcessCard>
        <Arrow color={'#8DA9F1'}/>
        <ProcessCard color={'#5477D0'}>
          <i>
            <img src='/images/interview.png' alt='interview' />
          </i>
          면접전형<br />
          (실무/CEO)
        </ProcessCard>
        <Arrow color={'#5477D0'}/>
        <ProcessCard color={'#0031B0'}>
          <i>
            <img src='/images/handshake.png' alt='handshake' />
          </i>
          최종합격
        </ProcessCard>
      </ProcessCardWrapper>
      <SectionTitle>
        채용개요
      </SectionTitle>
      <Table data={INITAL_RECRUIT_PROCESS_DATA} />
    </ProcessContainer>
  );
};

export default Process;
