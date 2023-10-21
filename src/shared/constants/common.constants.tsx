import { MainSliderItem01 } from '@/components/Main/Main.styles';
import React from 'react';

export const REQUESTS_OPERATION = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  PUT: 'put',
  DELETE: 'delete',
} as const;

export const menu = [
  {
    path: 'intro',
    name: '회사소개',
    target: '/intro/hello',
    subPath: [
      { path: 'hello', name: '인사말' },
      { path: 'overview', name: '회사개요' },
      { path: 'history', name: '회사연혁' },
      { path: 'organization', name: '조직도' },
    ],
  },
  {
    path: 'field',
    name: '사업분야',
    target: '/field/architecture',
    subPath: [
      {
        path: 'architecture',
        name: '설계분야',
        tabs: [
          { path: 'electrical-field', name: '전기분야' },
          { path: 'communication-field', name: '통신분야' },
          { path: 'railway-and-other-fields', name: '철도신호분야' },
        ],
      },
      {
        path: 'supervision',
        name: '감리분야',
        tabs: [
          { path: 'electrical-field', name: '전기분야' },
          { path: 'communication-field', name: '통신분야' },
          { path: 'railway-and-other-fields', name: '철도신호분야' },
        ],
      },
      { path: 'construction', name: '공사시공분야' },
    ],
  },
  {
    path: 'customer',
    name: '고객지원',
    target: '/customer/notice',
    subPath: [
      { path: 'notice', name: '공지사항' },
      { path: 'inquiry', name: '1:1문의' },
    ],
  },
  {
    path: 'recruit',
    name: '채용정보',
    target: '/recruit/talent',
    subPath: [
      { path: 'talent', name: '인재상' },
      { path: 'process', name: '채용프로세스' },
      { path: 'overview', name: '채용개요' },
      { path: 'recruit-information', name: '채용안내' },
    ],
  },
  {
    path: 'contact',
    name: 'Contact',
    target: '/contact/directions',
    subPath: [{ path: 'directions', name: '찾아오시는길' }],
  },
] as {
  path: string;
  name: string;
  target: string;
  subPath: ({ path: string; name: string; tabs: { path: string; name: string }[] } | { path: string; name: string; tabs?: undefined })[];
}[];
export const adminMenu = [
  {
    path: '_admin',
    name: '어드민',
    target: '/_admin/notice',
    subPath: [
      { path: 'notice', name: '공지작성' },
      { path: 'inquiry', name: '문의확인' },
    ],
  },
] as {
  path: string;
  name: string;
  target: string;
  subPath: ({ path: string; name: string; tabs: { path: string; name: string }[] } | { path: string; name: string; tabs?: undefined })[];
}[];

export const INITIAL_CAROUSEL_ITEMS = [
  {
    id: 0,
    height: '590px',
    imgSrc: '/images/main-slide-01.jpg',
    render: () => {
      return (
        <MainSliderItem01>
          <h3>한신콘설탄트 홈페이지에 오신것을 환영합니다.</h3>
          {/*<h5>*/}
          {/*  1979년 창업이래 40년간 전기분야 엔지니어링사업에 참여하였으며, <br />*/}
          {/*  발전, 송변전, 배전시설을 비롯한 공공 및 민수용 각종 건설사업의 설계, 감리용역을 성공적으로 이끌어 왔습니다.*/}
          {/*</h5>*/}
        </MainSliderItem01>
      );
    },
  },
];
