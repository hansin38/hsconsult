import React from 'react';
import { useRouter } from 'next/router';
import { Logo } from '@/components/svg/Logo';
import { Contacts, Copyright, FooterContainer } from './Footer.styles';


const Footer = (): React.ReactElement => {
  const router = useRouter();
  return (
    <FooterContainer>
      <Logo onClick={()=>router.push('/')} bleach/>
      <Contacts>
        <div><span>(주)서현기술단</span><span>대표자 : 정병율, 안명숙</span></div>
        <div><span>본점주소 : (우)08752 서울특별시 관악구 양녕로1길 32, 1층 (국문)</span><span>지점주소 : (우)13943 경기도 안양시 동안구 흥안대로500(구:관양동1507-23)서현빌딩 6층, 8~11층</span></div>
        <div><span>TEL : 031-425-2100</span><span> FAX : 대표번호 031-426-2600 / (6층 건설사업관리, 업무) 031-423-5665 / (9층 구조, 지반터널) 031- 426-4994, (11층 철도) 031-426-4499</span></div>
      </Contacts>
      <Copyright>COPYRIGHT(C) 2019 서현기술단. all right reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
