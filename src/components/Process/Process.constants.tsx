import { ITable } from '@/components/Table/Table.types';

export const INITAL_RECRUIT_PROCESS_DATA: ITable = {
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
INITAL_RECRUIT_PROCESS_DATA.header.forEach((item) => {
  item.width = '194px';
});
