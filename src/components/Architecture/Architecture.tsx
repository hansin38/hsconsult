import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
    ArchitectureContainer,
    ArchitectureContainerTabs,
    ArchitectureContainerTabsItem,
    ArchitectureImageWrapper,
    ArchitectureTitle,
} from 'src/components/Architecture/Architecture.styles';
import ElectricalField from './components/ElectricalField/ElectricalField';
import CommunicationField from './components/CommunicationField/CommunicationField';
import RailwayAndOtherFields from './components/RailwayAndOtherFields/RailwayAndOtherFields';

const Supervision = (): React.ReactElement => {
    const router = useRouter();
    const { tab = 'electrical-field' } = router.query;

    return (
        <ArchitectureContainer>
            <ArchitectureImageWrapper>
                <Image src="/images/architecture_top.webp" layout={'fill'} alt="상단 이미지 영역" />
            </ArchitectureImageWrapper>
            <ArchitectureTitle>설계분야</ArchitectureTitle>
            <ArchitectureContainerTabs>
                <ArchitectureContainerTabsItem active={tab === 'electrical-field'}>
                    <Link href="/field/architecture/electrical-field" scroll={false}>
                        전기분야
                    </Link>
                </ArchitectureContainerTabsItem>
                <ArchitectureContainerTabsItem active={tab === 'communication-field'}>
                    <Link href="/field/architecture/communication-field" scroll={false}>
                        통신분야
                    </Link>
                </ArchitectureContainerTabsItem>
                <ArchitectureContainerTabsItem active={tab === 'railway-and-other-fields'}>
                    <Link href="/field/architecture/railway-and-other-fields" scroll={false}>
                        철도기타분야
                    </Link>
                </ArchitectureContainerTabsItem>
            </ArchitectureContainerTabs>

            {tab === 'electrical-field' && <ElectricalField />}
            {tab === 'communication-field' && <CommunicationField />}
            {tab === 'railway-and-other-fields' && <RailwayAndOtherFields />}
        </ArchitectureContainer>
    );
};

export default Supervision;
