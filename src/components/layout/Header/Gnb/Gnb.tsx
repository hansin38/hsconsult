import React from 'react';
import {} from './Gnb.constants';
import Link from 'next/link';
import { menu } from '@/shared/constants/common.constants';
import { GnbContainer } from './Gnb.styles';


const Gnb = (): React.ReactElement => {
  return (
    <GnbContainer className={'gnb'}>
      {menu.map(gnbItem => <Link key={gnbItem.path} href={`${gnbItem.target}`}>{gnbItem.name}</Link>)}
    </GnbContainer>
  );
};

export default Gnb;
