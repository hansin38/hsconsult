import React from 'react';
import { TalentCard, TalentCardWrapper, TalentContainer, TalentTextWrpper } from 'src/components/Talent/Talent.styles';

const Talent = (): React.ReactElement => {
  return (
    <TalentContainer>
      <TalentTextWrpper>
        <h3>인재상</h3>
        <h5>한신콘설탄트와 함께 미래를 그려나가고 싶은 이들의 모습입니다.</h5>
      </TalentTextWrpper>
      <TalentCardWrapper>
        <TalentCard>
          <div></div>
          <div>
            <h3>
              믿음 <span>Trust</span>
            </h3>
            <h5>
              창의적 사고와 실천으로
              <br />
              변화와 혁신을 추구하는 인재
            </h5>
          </div>
        </TalentCard>
        <TalentCard>
          <div></div>
          <div>
            <h3>
              소망 <span>Trust</span>
            </h3>
            <h5>
              창의적 사고와 실천으로
              <br />
              변화와 혁신을 추구하는 인재
            </h5>
          </div>
        </TalentCard>
        <TalentCard>
          <div></div>
          <div>
            <h3>
              사랑 <span>Trust</span>
            </h3>
            <h5>
              창의적 사고와 실천으로
              <br />
              변화와 혁신을 추구하는 인재
            </h5>
          </div>
        </TalentCard>
        <TalentCard>
          <div></div>
          <div>
            <h3>
              고기 <span>Trust</span>
            </h3>
            <h5>
              창의적 사고와 실천으로
              <br />
              변화와 혁신을 추구하는 인재
            </h5>
          </div>
        </TalentCard>
      </TalentCardWrapper>
    </TalentContainer>
  );
};

export default Talent;
