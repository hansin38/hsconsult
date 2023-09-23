export type TTable = 'inquiry' | 'notice';
type TLimit = 1 | 5 | 10 | 20 | 30 | 40 | 50;

export interface IAppApiReturnBase {
  result: 'success' | 'error';
  error?: string;
  data?: any;
}

export type TArticle = {
  id: number;
  timestamp: number;
  title: string;
  content: string;
  name?: string;
  email?: string;
  phone?: string;
  reply?: boolean;
  password: string;
}

export interface IParams {
  table: TTable;
}

export interface IPageParams extends IParams {
  limit?: TLimit;
  page: number | `${number}`;
}

export interface IGetPageReturn extends IAppApiReturnBase {
  data: {
    limit: number;
    page: number;
    list: Array<TArticle>;
    count: number;
    total: number;
  };
}
export interface IGetArticleReturn extends IAppApiReturnBase {
  data: TArticle;
}

export interface IReadParams extends IParams {
  id: number | `${number}`;
}
export interface IWriteParams extends IParams {
  title: string;
  content: string;
  name: string;
  email?: string;
  phone?: string;
  password?: string;
}
export interface IUpdateParams extends IParams {
  id: number | `${number}`;
  update: Partial<IWriteParams>;
}


