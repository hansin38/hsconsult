import React from 'react';
import { useRouter } from 'next/router';
import { Logo } from '@/components/svg/Logo';
import { Contacts, Copyright, FooterContainer } from './Footer.styles';


const Footer = (): React.ReactElement => {
  const router = useRouter();
  return (
    <FooterContainer>
      <Logo onClick={()=>router.push('/')} bleach height={32}/>
      <Contacts>
        <div><span>(주)한신콘설탄트</span><span>대표자 : 한상로, 이광휘</span></div>
        <div><span>본사 : 부산광역시 중구 고가길32 (보수동1가)</span><span>(TEL) 051-254-8141</span><span>(FAX) 051-254-8648</span></div>
        <div><span>서울지사 : 서울특별시 송파구 가락로240 (방이동)</span><span> 서울지사 : (TEL) 02-417-6761</span><span>(FAX) 02-417-3302</span></div>
      </Contacts>
      <Copyright>COPYRIGHT(C) 2019 서현기술단. all right reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
