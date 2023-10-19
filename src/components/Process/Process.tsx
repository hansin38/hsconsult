import React from 'react';
import { ProcessCard, ProcessCardWrapper, ProcessContainer, ProcessTextWrpper } from 'src/components/Process/Process.styles';
import Table from '@/components/Table/Table';
import { INITAL_RECRUIT_PROCESS_DATA } from '@/components/Process/Process.constants';

const Process = (): React.ReactElement => {
  return (
    <ProcessContainer>
      <ProcessTextWrpper>
        <h3>인재상</h3>
        <h5>한신콘설탄트와 함께 미래를 그려나가고 싶은 이들의 모습입니다.</h5>
      </ProcessTextWrpper>
      <ProcessCardWrapper>
        <ProcessCard>
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
        </ProcessCard>
        <ProcessCard>
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
        </ProcessCard>
        <ProcessCard>
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
        </ProcessCard>
        <ProcessCard>
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
        </ProcessCard>
      </ProcessCardWrapper>
      <Table data={INITAL_RECRUIT_PROCESS_DATA} />
    </ProcessContainer>
  );
};

export default Process;
