import { ITable } from '@/components/Table/Table.types';

export const INITAL_ELECTRICAL_FIELD_DATA: ITable = {
  header: [
    {
      title: '과업기간',
      width: '302px',
    },
    {
      title: '과업명',
      width: '567px',
    },
    {
      title: '발주처',
      width: '194px',
    },
  ],
  rows: [
    { id: 18, period: '2011.06~2012.05', title: '지하철2호선 내진보강 및 방음벽설치공사 실시설계용역 정보통신분야', client: '서울메트로' },
    { id: 19, period: '2018.02~2020.02', title: '호남국도터널 통합관리망 구축공사 실시설계', client: '익산지방국도관리청' },
    { id: 20, period: '2018.02~2023.12', title: '영동대로 지하공간 복합개발 관련 강남권 광역복합 환승센터 기본설계용역(통신분야)', client: '서울도시기반시설본부' },
    { id: 21, period: '2019.11~2022.04', title: '서울도시철도7호선 청라국제도시 연장선 통신분야 기본설계용역', client: '인천광역시도시철도건설 본부' },
    { id: 22, period: '2020.02~2021.05', title: '원격감시 시스템 시범구축을 위한 기본설계', client: '한국철도시설공단' },
    { id: 23, period: '2021.02~2021.07', title: '승강장 안전문 통합관리 시스템 실시설계', client: '한국철도시설공단' },
    { id: 24, period: '2021.03~2023.12', title: '우이신설 연장선 도시철도 기본계획 수립용역(통신분야)', client: '서울도시기반시설본부' },
    { id: 25, period: '2021.06~2021.12', title: '낙동강(금호강 합류~기점)외 4개 국가하천 모니터링구축사업 실시설계', client: '부산지방국토관리청' },
  ],

  align: 'horizontal',
};
