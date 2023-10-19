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
    { id: 34, period: '2014.05~2016.03', title: '765kV 신고리 S/S 8-Bay분리공사 감리용역', client: '한국전력공사' },
    { id: 35, period: '2015.04~2019.06', title: '345kV 고덕변전소 공사 감리용역', client: '한국전력공사' },
    { id: 36, period: '2015.09~2018.10', title: '345kV 신용인~신수원간 케이블헤드 설치공사 감리용역', client: '한국전력공사' },
    { id: 37, period: '2016.04~2018.05', title: '154kV 합덕 S/S공사 감리용역', client: '한국전력공사' },
    { id: 38, period: '2016.09~', title: '별내선 복선전철 제5공구 건설공사 감독권한대행 책임건설사업관리용역(전기)', client: '경기도청' },
    { id: 39, period: '2017.07~2019.11', title: '154kV 반천분기 T/L공사 감리용역', client: '한국전력공사' },
    { id: 40, period: '2019.02~2020.03', title: '345kV 북당진S/S #1주변압기 증설공사 감리용역', client: '한국전력공사' },
    { id: 41, period: '2019.10~2020.02', title: '345kV 신영주~한울 NP2 T/L 케이블교체공사 감리용역', client: '한국전력공사' },
    { id: 42, period: '2020.06~2021.08', title: '154kV 동대전~신탄진간 T/L공사 감리용역', client: '한국전력공사' },
    { id: 43, period: '2021.08~2022.07', title: '154kV조치원~전의간 T/L공사 감리용역', client: '한국전력공사' },
    { id: 44, period: '2021.09~2022.04', title: '154kV 감곡 S/S인출선로 공사 감리용역', client: '한국전력공사' },
    { id: 45, period: '2021.05~', title: '5호선 고덕변전소 노후시설물 개량공사 감리용역', client: '서울교통공사' },
  ],
  align: 'horizontal',
};
