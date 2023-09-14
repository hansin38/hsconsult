import React from 'react';
import Image from 'next/image';
import { HistoryContainer, HistoryItemCard } from 'src/components/History/History.styles';
import { INITIAL_HISTORY_DATA } from './History.constants';
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
