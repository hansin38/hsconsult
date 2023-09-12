import React, { useEffect, useRef } from 'react';
import {} from './Header.constants';
import { css } from '@emotion/react';
import Gnb from '@/components/Gnb/Gnb';
import Snb from '@/components/Snb/Snb';
import { IHeader } from '@/components/layout/Header/Header.types';
import { HeaderContainer } from './Header.styles';


const Header = ({ transparent }: IHeader): React.ReactElement => {
  const headerContainerRef = useRef(null);
  useEffect(() => {
    if (!headerContainerRef?.current) return;
    const el = headerContainerRef.current;
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('stuck', e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(el);
  }, [headerContainerRef, headerContainerRef?.current]);
  return (
    <HeaderContainer ref={headerContainerRef} transparent={transparent}>
      <strong css={css`font-size: 24px;`}>Hanshin</strong>
      <Gnb />
      <Snb />
    </HeaderContainer>
  );
};

export default Header;
