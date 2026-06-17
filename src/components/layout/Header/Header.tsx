import React from 'react';
import {} from './Header.constants';
import { useRouter } from 'next/router';
import Gnb from '@/components/layout/Header/Gnb/Gnb';
import Snb from '@/components/layout/Header/Snb/Snb';
import { IHeader } from '@/components/layout/Header/Header.types';
import { Logo } from '@/components/svg/Logo';
import { HeaderContainer } from './Header.styles';


const Header = ({ transparent }: IHeader): React.ReactElement => {
  const router = useRouter();
  return (
    <HeaderContainer transparent={transparent}>
      <Logo onClick={()=>router.push('/')} height={40}/>
      <Gnb />
      <Snb />
    </HeaderContainer>
  );
};

export default Header;
