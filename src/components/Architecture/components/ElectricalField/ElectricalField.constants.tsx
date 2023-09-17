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
    { id: 1, period: '2019.01.10 ~ 2020.12.20', title: '서울시 도시철도 1호선 연장사업', client: '서울교통공사' },
    { id: 2, period: '2019.01.15 ~ 2020.12.14', title: '서울시 도시철도 2호선 연장사업', client: '서울교통공사' },
    { id: 3, period: '2019.01.16 ~ 2020.12.16', title: '서울시 도시철도 3호선 연장사업', client: '서울교통공사' },
    { id: 4, period: '2019.01.17 ~ 2020.12.16', title: '서울시 도시철도 4호선 연장사업', client: '서울교통공사' },
  ],
  align: 'horizontal',
};
