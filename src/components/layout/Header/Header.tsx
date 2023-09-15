import React from 'react';
import {} from './Header.constants';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Gnb from '@/components/layout/Header/Gnb/Gnb';
import Snb from '@/components/layout/Header/Snb/Snb';
import { IHeader } from '@/components/layout/Header/Header.types';
import { HeaderContainer } from './Header.styles';


const Header = ({ transparent }: IHeader): React.ReactElement => {
  const router = useRouter();
  return (
    <HeaderContainer transparent={transparent}>
      <strong css={css`font-size: 24px;`} onClick={()=>router.push('/')}>Hanshin</strong>
      <Gnb />
      <Snb />
    </HeaderContainer>
  );
};

export default Header;
