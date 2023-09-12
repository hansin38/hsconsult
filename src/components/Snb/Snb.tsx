import React from 'react';
import {} from './Snb.constants';
import { ISnb } from './Snb.types';
import { SnbContainer } from './Snb.styles';
import Link from 'next/link';


const Snb = (props: ISnb): React.ReactElement => {
  return (
    <SnbContainer className={'snb'}>
      <div>
        <Link href={'/'}>인사말</Link>
        <Link href={'/'}>회사개요</Link>
        <Link href={'/'}>회사연혁</Link>
        <Link href={'/'}>조직도</Link>
      </div>
      <div>
        <Link href={'/'}>설계분야</Link>
        <Link href={'/'}>감리분야</Link>
        <Link href={'/'}>공사시공분야</Link>
      </div>
      <div>
        <Link href={'/'}>공지사항</Link>
        <Link href={'/'}>1:1문의</Link>
      </div>
      <div>
        <Link href={'/'}>인재상</Link>
        <Link href={'/'}>채용안내</Link>
      </div>
      <div>
        <Link href={'/'}>찾아오시는길</Link>
      </div>
    </SnbContainer>
  );
};

export default Snb;
