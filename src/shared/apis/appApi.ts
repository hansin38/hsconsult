import { IAppApiReturnBase, IGetArticleReturn, IGetPageReturn, IPageParams, IReadParams, IUpdateParams, IWriteParams } from '@/shared/types/api.types';
import { REQUESTS_OPERATION } from '@/shared/constants/common.constants';
import apiBase from './apiBase';

export const appApi = apiBase({
  baseURL: `${process.env.NODE_ENV === 'development' ? 'http://localhost:3002' : 'https://www.hscont.co.kr'}/api`,
});



/**
 * @description 테이블의 페이지를 가져옵니다.
 * @param table 'inquiry'(문의하기) | 'notice'(공지사항)
 * @param limit 10, 20, 30, 40, 50
 * @param page 1 이상의 페이지 번호
 */
export const getPage = ({ table, limit = 10, page }: IPageParams) =>
  appApi.get<IGetPageReturn>(`/${table}?page=${page}&limit=${limit}`);

/**
 *
 * @param table 'inquiry'(문의하기) | 'notice'(공지사항)
 * @param id 게시글의 id
 */
export const getArticle = ({ table, id }: IReadParams) =>
  appApi.get<IGetArticleReturn>(`/${table}/${id}`);

/**
 * @description 게시글을 작성합니다.
 * @param table 'inquiry'(문의하기) | 'notice'(공지사항)
 * @param name 이름
 * @param email 이메일
 * @param phone 전화번호
 * @param password 비밀번호
 * @param content 내용
 * @param title 제목
 */
export const createArticle = ({ table, name, email, phone, password, content, title }: IWriteParams) =>
  appApi.mutation<IAppApiReturnBase>({ url: `/${table}/write`, operation: REQUESTS_OPERATION.PUT, data: { name, email, phone, password, content, title } });

/**
 * @description 게시글을 수정합니다. 내부적으로 문의사항에 답변 완료여부를 표시하면 될거같습니다.
 * @param table 'inquiry'(문의하기) | 'notice'(공지사항)
 * @param id 게시글의 id
 * @param update 업데이트할 내용 ({title, content, name, email, phone, reply, password})
 */
export const updateArticle = ({ table, id, update }: IUpdateParams) =>
  appApi.mutation<IAppApiReturnBase>({ url: `/${table}/${id}`, operation: REQUESTS_OPERATION.PATCH, data: update });

/**
 *
 * @param table 'inquiry'(문의하기) | 'notice'(공지사항)
 * @param id 게시글의 id
 */
export const removeArticle = ({ table, id }: IReadParams) =>
  appApi.mutation<IAppApiReturnBase>({ url: `/${table}/${id}`, operation: REQUESTS_OPERATION.DELETE });
