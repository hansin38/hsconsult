import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  ArchitectureContainer,
  ArchitectureContainerTabs,
  ArchitectureContainerTabsItem,
  ArchitectureImageWrapper,
  ArchitectureTextWrpper,
  ArchitectureTitle,
} from 'src/components/Architecture/Architecture.styles';
import { menu } from '@/shared/constants/common.constants';
import ElectricalField from './components/ElectricalField/ElectricalField';

const Architecture = (): React.ReactElement => {
  const [activeTab, setActiveTab] = useState(null);
  const router = useRouter();
  const path = router.pathname.split('/').slice(1);
  const query = router.query;

  useEffect(() => {
    if (query.tab) setActiveTab(query.tab);
  }, [query]);
  return (
    <ArchitectureContainer>
      <ArchitectureImageWrapper>
        <Image src="/images/field-content-top-banner01.jpg" layout={'fill'} alt="상단 이미지 영역" />
      </ArchitectureImageWrapper>
      <ArchitectureTitle>설계분야</ArchitectureTitle>
      <ArchitectureContainerTabs>
        <ArchitectureContainerTabsItem active={activeTab === 'electrical-field'}>
          <Link href={'/field/architecture/?tab=electrical-field'}>전기분야</Link>
        </ArchitectureContainerTabsItem>
        <ArchitectureContainerTabsItem active={activeTab === 'communication-field'}>
          <Link href={'/field/architecture/?tab=communication-field'}>통신분야</Link>
        </ArchitectureContainerTabsItem>
        <ArchitectureContainerTabsItem active={activeTab === 'railway-and-other-fields'}>
          <Link href={'/field/architecture/?tab=railway-and-other-fields'}>철도기타분야</Link>
        </ArchitectureContainerTabsItem>
      </ArchitectureContainerTabs>

      {activeTab === 'electrical-field' && <ElectricalField />}
      {activeTab === 'communication-field' && <ElectricalField />}
      {activeTab === 'railway-and-other-fields' && <ElectricalField />}
    </ArchitectureContainer>
  );
};

export default Architecture;
