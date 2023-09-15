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
    subPath: [
      { path: 'index', name: '인사말' },
      { path: 'history', name: '회사개요' },
      { path: 'overview', name: '회사연혁' },
      { path: 'organization', name: '조직도' },
    ],
  },
  {
    path: 'field',
    name: '사업분야',
    subPath: [
      {
        path: 'index',
        name: '설계분야',
        tabs: [
          { path: 'electrical-field', name: '전기분야' },
          { path: 'communication-field', name: '통신분야' },
          { path: 'railway-and-other-fields', name: '철도기타분야' },
        ],
      },
      {
        path: 'construction',
        name: '감리분야',
        tabs: [
          { path: 'electrical-field', name: '전기분야' },
          { path: 'communication-field', name: '통신분야' },
          { path: 'railway-and-other-fields', name: '철도기타분야' },
        ],
      },
      { path: 'supervision', name: '공사시공분야' },
    ],
  },
  {
    path: 'customer',
    name: '고객지원',
    subPath: [
      { path: 'index', name: '공지사항' },
      { path: 'qna', name: '1:1문의' },
    ],
  },
  {
    path: 'recruit',
    name: '채용정보',
    subPath: [
      { path: 'index', name: '인재상' },
      { path: 'talent', name: '채용안내' },
    ],
  },
  {
    path: 'contact',
    name: 'Contact',
    subPath: [{ path: 'index', name: '찾아오시는길' }],
  },
];
