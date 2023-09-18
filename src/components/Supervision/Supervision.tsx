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
import ElectricalField from './components/ElectricalField/ElectricalField';
import CommunicationField from './components/CommunicationField/CommunicationField';
import RailwayAndOtherFields from './components/RailwayAndOtherFields/RailwayAndOtherFields';

const Supervision = (): React.ReactElement => {
  const router = useRouter();
  const { tab = 'electrical-field' } = router.query;

  return (
    <SupervisionContainer>
      <SupervisionImageWrapper>
        <Image src="/images/field-content-top-banner01.jpg" layout={'fill'} alt="상단 이미지 영역" />
      </SupervisionImageWrapper>
      <SupervisionTitle>감리분야</SupervisionTitle>
      <SupervisionContainerTabs>
        <SupervisionContainerTabsItem active={tab === 'electrical-field'}>
          <Link href={'/field/supervision/electrical-field'}>전기분야</Link>
        </SupervisionContainerTabsItem>
        <SupervisionContainerTabsItem active={tab === 'communication-field'}>
          <Link href={'/field/supervision/communication-field'}>통신분야</Link>
        </SupervisionContainerTabsItem>
        <SupervisionContainerTabsItem active={tab === 'railway-and-other-fields'}>
          <Link href={'/field/supervision/railway-and-other-fields'}>철도기타분야</Link>
        </SupervisionContainerTabsItem>
      </SupervisionContainerTabs>

      {tab === 'electrical-field' && <ElectricalField />}
      {tab === 'communication-field' && <CommunicationField />}
      {tab === 'railway-and-other-fields' && <RailwayAndOtherFields />}
    </SupervisionContainer>
  );
};

export default Supervision;
