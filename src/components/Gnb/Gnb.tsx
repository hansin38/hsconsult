import React from 'react';
import {} from './Gnb.constants';
import { IGnb } from './Gnb.types';
import { GnbContainer } from './Gnb.styles';
import Link from 'next/link';


const Gnb = (props: IGnb): React.ReactElement => {
  return (
    <GnbContainer>
      <Link href={'/a'}>회사소개</Link>
      <Link href={'/a'}>사업분야</Link>
      <Link href={'/a'}>고객지원</Link>
      <Link href={'/a'}>채용정보</Link>
      <Link href={'/a'}>Contact</Link>
    </GnbContainer>
  );
};

export default Gnb;
