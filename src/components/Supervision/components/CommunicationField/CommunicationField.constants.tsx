export {};
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
    { id: 46, period: '2006.08~2008.07', title: '서울시도시철도9호선 정보통신설비 공사감리', client: '서울도시철도' },
    { id: 47, period: '2010.02~2012.06', title: '201사업 건설공사 전면책임감리용역(통신분야)', client: '국방시설본부' },
    { id: 48, period: '2010.02~2011.01', title: '000처리센터 건설공사 전면책임감리용역', client: '국방시설본부' },
    { id: 49, period: '2010.10~2011.09', title: '한의기술표준센터 신축공사 시공감리용역', client: '한국한의학연구원' },
    { id: 50, period: '2019.02~2021.02', title: '지하철3,4호선 지하구조물 내진보강공사 및 방음벽교체공사 건설사업관리용역(통신분야)', client: '서울교통공사' },
  ],
  align: 'horizontal',
};
