import { MainSliderItem01 } from '@/components/Main/Main.styles';

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
          { path: 'railway-and-other-fields', name: '철도기타분야' },
        ],
      },
      {
        path: 'supervision',
        name: '감리분야',
        tabs: [
          { path: 'electrical-field', name: '전기분야' },
          { path: 'communication-field', name: '통신분야' },
          { path: 'railway-and-other-fields', name: '철도기타분야' },
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
      { path: 'recruit-information', name: '채용안내' },
    ],
  },
  {
    path: 'contact',
    name: 'Contact',
    target: '/contact/directions',
    subPath: [{ path: 'directions', name: '찾아오시는길' }],
  },
] as {path: string; name: string; target: string; subPath: ({path: string; name: string; tabs: {path: string; name: string}[]} | {path: string; name: string; tabs?: undefined})[]}[];
export const adminMenu = [
  {
    path: '_admin',
    name: '어드민',
    target: '/_admin/notice',
    subPath: [
      { path: 'notice', name: '공지사항' },
      { path: 'inquiry', name: '1:1문의' },
    ],
  },
] as {path: string; name: string; target: string; subPath: ({path: string; name: string; tabs: {path: string; name: string}[]} | {path: string; name: string; tabs?: undefined})[]}[];

export const INITIAL_CAROUSEL_ITEMS = [
  {
    id: 0,
    height: '590px',
    imgSrc: '/images/main-slide-01.jpg',
    render: () => {
      return (
        <MainSliderItem01>
          <h3>언제 어디서나 당신의 미래를 밝힙니다.</h3>
          <h5>
            이러하고 저러한 설명으로 매력을 어필합니다.
            <br />두 줄까지 작성할 수 있습니다.
          </h5>
        </MainSliderItem01>
      );
    },
  },
  {
    id: 1,
    height: '590px',
    imgSrc: '/images/main-slide-01.jpg',
    render: () => {
      return (
        <MainSliderItem01>
          <h3>언제 어디서나 당신의 미래를 밝힙니다.</h3>
          <h5>
            이러하고 저러한 설명으로 매력을 어필합니다.
            <br />두 줄까지 작성할 수 있습니다.
          </h5>
        </MainSliderItem01>
      );
    },
  },
  {
    id: 2,
    height: '590px',
    imgSrc: '/images/main-slide-01.jpg',
    render: () => {
      return (
        <MainSliderItem01>
          <h3>언제 어디서나 당신의 미래를 밝힙니다.</h3>
          <h5>
            이러하고 저러한 설명으로 매력을 어필합니다.
            <br />두 줄까지 작성할 수 있습니다.
          </h5>
        </MainSliderItem01>
      );
    },
  },
];
