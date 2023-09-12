import React from 'react';
import {} from './Gnb.constants';
import Link from 'next/link';
import { menu } from '@/shared/constants/common.constants';
import { IGnb } from './Gnb.types';
import { GnbContainer } from './Gnb.styles';


const Gnb = (props: IGnb): React.ReactElement => {
  return (
    <GnbContainer className={'gnb'}>
      {menu.map(gnbItem => <Link key={gnbItem.path} href={`/${gnbItem.path}`}>{gnbItem.name}</Link>)}
    </GnbContainer>
  );
};

export default Gnb;
