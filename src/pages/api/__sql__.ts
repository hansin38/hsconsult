import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

type ResponseData = {
  status: 'success' | 'error';
  data: any;
}

// @ts-ignore
String.prototype.interpolate = function(params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  // eslint-disable-next-line no-new-func
  return new Function(...names, `return \`${this}\`;`)(...vals);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') return res.status(405).end();
  // eslint-disable-next-line no-undef
  globalThis.sql = sql;
  // eslint-disable-next-line no-undef
  globalThis.res = res;
  // eslint-disable-next-line no-eval
  return eval('sql`' + req.body.sql + '`.then(data => res.status(200).json({ status: "success", data })).catch(error => res.status(200).json({ status: "error", data: error }))');
}
