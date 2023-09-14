import { getBindingIdentifiers } from '@babel/types';
import apiBase from './apiBase';

export type TSheet = 'inquiry' | 'notice';
type TMethod = 'page' | 'read' | 'update' | 'write' | 'delete';
type TLimit = 10 | 20 | 30 | 40 | 50;
type TPage = number; // 0 < page
type TId = number; // 0 < id

export interface IArticle {
  timestamp: Date;
  title: string;
  content: string;
  name: string;
  email: string;
  phone: string;
}

interface IParams {
  sheet: TSheet;
  method: TMethod;
  limit?: TLimit;
  page?: TPage;
  id?: TId;
  wdata?: string;
}

export type TArticle = Array<string|number>;

interface IAppApiReturnBase {
  result: 'success' | 'error';
  error?: string;
  parameter?: string | {[keys: string]: string | number};
}

export const appApiBase = apiBase({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const appApi = <T>(params: IParams) => appApiBase.get<T & IAppApiReturnBase>('', { params });
export const getPage = (sheet: TSheet, page: TPage = 1, limit: TLimit = 10) => appApi<{data: Array<TArticle>; count: number }>({ method: 'page', sheet, page, limit });
export const getArticle = (sheet: TSheet, id: TId) => appApi<{data: TArticle }>({ method: 'read', sheet, id });
export const writeArticle = (sheet: TSheet, id: TId, article: IArticle) => {
  const wdata = btoa(JSON.stringify([article.title, article.content, article.name, article.email, article.phone]));
  return appApi<{data: TArticle }>({ method: 'write', sheet, wdata });
};
export const markAsReplied = (sheet: TSheet, id: TId) => {
  const wdata = btoa(JSON.stringify([[6, 'O']]));
  return appApi<{data: TArticle }>({ method: 'update', sheet, id, wdata });
};
export const removeArticle = (sheet: TSheet, id: TId) => appApi({ method: 'delete', sheet, id });
