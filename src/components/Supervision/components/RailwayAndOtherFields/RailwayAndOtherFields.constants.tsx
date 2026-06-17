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
  rows: [{ id: 51, period: '2019.02~2022.02', title: '지하철3,4호선 지하구조물 내진보강공사 및 방음벽교체공사 건설사업관리용역(신호분야)', client: '서울교통공사' }],
  align: 'horizontal',
};
