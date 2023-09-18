import React from 'react';
import Image from 'next/image';
import { OverviewContainer, OverviewItemCard } from 'src/components/Overview/Overview.styles';
import { INITIAL_OVERVIEW_DATA } from './Overview.constants';
const Overview = (): React.ReactElement => {
  return (
    <OverviewContainer>
      {INITIAL_OVERVIEW_DATA.map((history) => (
        <OverviewItemCard key={history.imagePath}>
          <Image src={history.imagePath} width={48} height={48} alt="회사개요 카드 이미지 아이콘" />
          <h3>{history.title}</h3>
          <h5 dangerouslySetInnerHTML={{ __html: history.content }} />
        </OverviewItemCard>
      ))}
    </OverviewContainer>
  );
};

export default Overview;
