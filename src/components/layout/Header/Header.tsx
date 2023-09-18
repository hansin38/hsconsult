import React from 'react';
import {} from './Header.constants';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Gnb from '@/components/layout/Header/Gnb/Gnb';
import Snb from '@/components/layout/Header/Snb/Snb';
import { IHeader } from '@/components/layout/Header/Header.types';
import { HeaderContainer } from './Header.styles';
import { Logo } from '@/components/svg/Logo';


const Header = ({ transparent }: IHeader): React.ReactElement => {
  const router = useRouter();
  return (
    <HeaderContainer transparent={transparent}>
      <Logo onClick={()=>router.push('/')}/>
      <Gnb />
      <Snb />
    </HeaderContainer>
  );
};

export default Header;
