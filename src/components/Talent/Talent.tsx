import React from 'react';
import { TalentCard, TalentCardWrapper, TalentContainer, TalentImageWrapper, TalentTextWrpper } from 'src/components/Talent/Talent.styles';
import Image from 'next/image';

const Talent = (): React.ReactElement => {
  return (
    <TalentContainer>
      <TalentImageWrapper>
        <Image src="/images/talent_top.webp" layout={'fill'} alt="상단 이미지 영역" />
      </TalentImageWrapper>
      <TalentTextWrpper>
        <h3>인재상</h3>
        <h5>한신콘설탄트와 함께 미래를 그려나가고 싶은 이들의 모습입니다.</h5>
      </TalentTextWrpper>
      <TalentCardWrapper>
        <TalentCard>
          <div><img src='/images/social-justice.png' alt='social' /></div>
          <div>사람 중심의 가치를 실현합니다.</div>
        </TalentCard>
      </TalentCardWrapper>
    </TalentContainer>
  );
};

export default Talent;
