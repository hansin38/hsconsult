import React from 'react';
import parse from 'html-react-parser';
import { RecruitInformationContainer, RecruitInformationTextWrpper } from 'src/components/RecruitInformation/RecruitInformation.styles';
import Table from '@/components/Table/Table';
import { ITable } from '@/components/Table/Table.types';

export const INITAL_RECRUIT_OVERVIEW_DATA: ITable = {
  header: [
    {
      title: '모집시기',
    },
    {
      title: '지원방법',
    },
    {
      title: '응시자격',
    },
  ],
  rows: [
    {
      id: 1,
      title: '각 부서별 인력 필요 시 한해 년중 수시 모집',
    },
    {
      id: 1,
      title: '채용안내 - 접수방법 확인',
    },
    {
      id: 1,
      title: '해외여행에 결격사유가 없어야함',
    },
  ],
  align: 'vertical',
};
INITAL_RECRUIT_OVERVIEW_DATA.header.forEach((item) => {
  item.width = '194px';
});
export const INITAL_RECRUIT_DATA: ITable = {
  header: [
    {
      title: '모집일자',
    },
    {
      title: '모집분야',
    },
    {
      title: '근무지역',
    },
    {
      title: '모집인원',
    },
    {
      title: '급여조건',
    },
    {
      title: '입사전형',
    },
    {
      title: '자격 요건',
    },
    {
      title: '제출서류',
    },
    {
      title: '접수 방법',
    },
    {
      title: '인사 담당자',
    },
  ],
  rows: [
    {
      id: 1,
      title: '상시 채용(채용 시까지)',
    },
    {
      id: 1,
      title: '설계사업부내 전기설계분야, 정보통신분야',
    },
    {
      id: 1,
      title: '서울지사',
    },
    {
      id: 1,
      title: '00명',
    },
    {
      id: 1,
      title: '협의(회사 사규)에 의함',
    },
    {
      id: 1,
      title: ()=>parse('1차 : 서류심사<br />2차 : 구술 & 면접 (서류심사 합격자에 한하여 개별통보) 요건'),
    },
    {
      id: 1,
      title: ()=>parse('전기설계분야, 정보통신분야 [신입/경력]<br /> • 초대졸, 대졸 이상<br /> • 국가기술자격 소지자 우대<br />• 해외여행에 결격사유가 없는자'),
    },
    {
      id: 1,
      title: ()=>parse('• 이력서 1부 (사진부착 필)<br />• 자기소개서1부'),
    },
    {
      id: 1,
      title: ()=>parse('E-mail 접수 (담당자: themore77@naver.com)<br />마감일 도착 분까지 유효함'),
    },
    {
      id: 1,
      title: ()=>parse(' • 서울지사 업무부 김은지 대리 <br /> • 직통전화 : 02-417-6761'),
    },
  ],
  align: 'vertical',
};
INITAL_RECRUIT_DATA.header.forEach((item) => {
  item.width = '194px';
});

const RecruitInformation = (): React.ReactElement => {
  return (
    <RecruitInformationContainer>
      <RecruitInformationTextWrpper>
        <h3>
          지금, <span>한신콘설탄트</span>와 함께 새로운 걸음을 내딛을 때입니다.
        </h3>
        <h5>한신콘설탄트와 함께 미래를 그려나갈 이들을 기다립니다.</h5>
      </RecruitInformationTextWrpper>
      <Table data={INITAL_RECRUIT_OVERVIEW_DATA} />
      <Table data={INITAL_RECRUIT_DATA} />
    </RecruitInformationContainer>
  );
};

export default RecruitInformation;
