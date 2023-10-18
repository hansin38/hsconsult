import parse from 'html-react-parser';
import { ITable } from '@/components/Table/Table.types';


export const INITIAL_OVERVIEW_DATA: ITable = {
  header: [
    {
      title: '회사명',
    },
    {
      title: '설립년도',
    },
    {
      title: '소재지',
    },
    {
      title: '대표자',
    },
    {
      title: '업종',
    },
  ],
  rows: [
    {
      id: 1,
      title: '(주)한신콘설탄트 HANSHIN CONSULTANT INC',
    },
    {
      id: 1,
      title: '1979년 12월 10일',
    },
    {
      id: 1,
      title: ()=>parse('본사) 부산광역시 중구 고가길32 (보수동1가)<br>' +
        'TEL. 051-254-8141 FAX. 051-254-8648 서울지사) 서울특별시 송파구 가락로240 (방이동)<br>' +
        'TEL. 02-417-6761 FAX. 02-417-3302'),
    },
    {
      id: 1,
      title: '한상로, 이광휘',
    },
    {
      id: 1,
      title: ()=>parse('한국엔지니어링협회 : 전기설비, 정보통신, 철도신호<br>' +
        '한국전기기술인협회 : 종합설계업, 종합감리업<br>' +
        '부산광역시 : 철도시설 안전진단 전문기관(정보통신)<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소방시설업(일반소방시설설계업,전기)<br>' +
        '한국전기공사협회 : 전기공사업'),
    },
  ],
  align: 'vertical',
};
INITIAL_OVERVIEW_DATA.header.forEach((item) => {
  item.width = '194px';
});
