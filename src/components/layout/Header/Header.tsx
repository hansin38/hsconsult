import React from 'react';
import {} from './Header.constants';
import { css } from '@emotion/react';
import Gnb from '@/components/Gnb/Gnb';
import Snb from '@/components/Snb/Snb';
import { IHeader } from './Header.types';
import { HeaderContainer } from './Header.styles';


const Header = (props: IHeader): React.ReactElement => {
  return (
    <HeaderContainer>
      <strong css={css`font-size: 24px;`}>Hanshin</strong>
      <Gnb />
      <Snb />
    </HeaderContainer>
  );
};

export default Header;
