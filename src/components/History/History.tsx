import React from 'react';
import Image from 'next/image';
import { HistoryContainer, HistoryItemCard } from 'src/components/History/History.styles';

const INITIAL_HISTORY_DATA = [
  { title: '회사명', content: '한신콘설탄트', imagePath: '/images/company.jpg' },
  { title: '대표이사', content: '홍길동', imagePath: '/images/ceo.jpg' },
  { title: '설립일', content: '0000년 00월 00일', imagePath: '/images/establishment-date.jpg' },
  { title: '업종', content: '기타 엔지니어링 서비스업', imagePath: '/images/sectors.jpg' },
  { title: '직원수', content: '290명', imagePath: '/images/employees.jpg' },
  { title: '이메일', content: 'hansin@hansin.co.kr', imagePath: '/images/email.jpg' },
];

const History = (): React.ReactElement => {
  return (
    <HistoryContainer>
      {INITIAL_HISTORY_DATA.map((history) => (
        <HistoryItemCard key={history.imagePath}>
          <Image src={history.imagePath} width={48} height={48} alt="회사개요 카드 이미지 아이콘" />
          <h3>{history.title}</h3>
          <h5>{history.content}</h5>
        </HistoryItemCard>
      ))}
    </HistoryContainer>
  );
};

export default History;
