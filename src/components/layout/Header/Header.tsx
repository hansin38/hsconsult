import React from 'react';
import {} from './Header.constants';
import { css } from '@emotion/react';
import Gnb from '@/components/layout/Header/Gnb/Gnb';
import Snb from '@/components/layout/Header/Snb/Snb';
import { IHeader } from '@/components/layout/Header/Header.types';
import { HeaderContainer } from './Header.styles';


const Header = ({ transparent }: IHeader): React.ReactElement => {
  return (
    <HeaderContainer transparent={transparent}>
      <strong css={css`font-size: 24px;`}>Hanshin</strong>
      <Gnb />
      <Snb />
    </HeaderContainer>
  );
};

export default Header;
