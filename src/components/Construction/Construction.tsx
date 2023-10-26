import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  SupervisionContainer,
  SupervisionContainerTabs,
  SupervisionContainerTabsItem,
  SupervisionImageWrapper,
  SupervisionTitle,
} from 'src/components/Supervision/Supervision.styles';
import ConstructionField from './components/ElectricalField/ConstructionField';

const Supervision = (): React.ReactElement => {
  const router = useRouter();
  const { tab = 'electrical-field' } = router.query;

  return (
    <SupervisionContainer>
      <SupervisionImageWrapper>
        <Image src="/images/rail_top.webp" layout={'fill'} alt="상단 이미지 영역" />
      </SupervisionImageWrapper>
      <SupervisionTitle>철도시공분야</SupervisionTitle>

      {tab === 'electrical-field' && <ConstructionField />}
    </SupervisionContainer>
  );
};

export default Supervision;
