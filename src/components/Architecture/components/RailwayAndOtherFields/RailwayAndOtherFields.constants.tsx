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
    { id: 26, period: '2012.06~2014.05', title: '1호선 연장(다대구간)신호설비 실시설계용역', client: '부산교통공사' },
    { id: 27, period: '2017.01~2018.12', title: '도시철도 양산선(노포~북정) 신호설비 기본 및 실시설계용역', client: '부산교통공사' },
    { id: 28, period: '2018.02~2023.12', title: '영동대로 지하공간 복합개발 관련 강남권 광역복합 환승센터 기본설계용역(신호분야)', client: '서울도시기반시설본부' },
    { id: 29, period: '2021.03~2023.12', title: '우이신설 연장선 도시철도 기본계획 수립용역(신호분야)', client: '서울도시기반시설본부' },
    { id: 30, period: '2019.11~2022.04', title: '서울도시철도7호선 청라국제도시 연장선 신호분야 기본설계용역', client: '인천광역시도시철도건설 본부' },
    { id: 31, period: '2021.07~2022.01', title: '위례선 도시철도 건설공사(T/K)기본설계 설계용역(신호분야)', client: '서울도시기반시설본부' },
    { id: 32, period: '2022.03~2022.08', title: '위례선 도시철도 건설공사(T/K)실시설계 설계용역(신호분야)', client: '서울도시기반시설본부' },
    { id: 33, period: '2022.12~', title: 'GTX-C 철도민간투자사업 실시설계(신호분야)', client: '국가철도공단' },
  ],

  align: 'horizontal',
};
