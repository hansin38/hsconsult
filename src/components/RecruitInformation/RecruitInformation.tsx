import React from 'react';
import { RecruitInformationContainer, RecruitInformationTextWrpper } from 'src/components/RecruitInformation/RecruitInformation.styles';
import Table from '@/components/Table/Table';
import { ITable } from '@/components/Table/Table.types';

export const INITAL_ELECTRICAL_FIELD_DATA: ITable = {
  header: [
    {
      title: '모집일자',
      width: '194px',
    },
    {
      title: '모집분야',
      width: '194px',
    },
    {
      title: '근무지역',
      width: '194px',
    },
  ],
  rows: [
    { id: 1, title: '상시 채용(채용 시까지)' },
    { id: 2, title: '정보통신 엔지니어링 감리분야' },
    {
      id: 3,
      render: () => (
        <div
          dangerouslySetInnerHTML={{
            __html: `<b>정보통신 엔지니어링 감리분야 [경력]</b><br/>
      * 고졸이상<br/>
      * 감독 및 감리경력 7년 이상<br/>
      * 정보통신 특급 감리원 우대<br/>
      * 국가기술자격 소지자 우대(기술사 특별 우대)(정보통신, 정보처리)<br/>
      * 영어 능통자 우대<br/>
      * 국가보훈대상자는 관계법에 의거 우대<br/>
      * 해외여행에 결격사유가 없는 자`,
          }}
        />
      ),
    },
  ],
  align: 'vertical',
};

const RecruitInformation = (): React.ReactElement => {
  return (
    <RecruitInformationContainer>
      <RecruitInformationTextWrpper>
        <h3>
          지금, <span>한신콘설탄트</span>와 함께 새로운 걸음을 내딛을 때입니다.
        </h3>
        <h5>한신콘설탄트와 함께 미래를 그려나갈 이들을 기다립니다.</h5>
      </RecruitInformationTextWrpper>
      <Table data={INITAL_ELECTRICAL_FIELD_DATA} />
    </RecruitInformationContainer>
  );
};

export default RecruitInformation;
