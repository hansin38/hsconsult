import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

type ResponseData = {
  status: 'success' | 'error';
  data: any;
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') return res.status(405).end();
  if (!req.query.page || Number.isNaN(Number(req.query.page)) || Number(req.query.page) <= 0) return res.status(400).json({ status: 'error', data: 'Bad Request' });
  const { limit = 10, page } = req.query as unknown as {limit?: number; page: number};
  const [{ rows: [{ count: total }] }, { rows: list }] = await Promise.all([
sql`
    SELECT COUNT(*) FROM notice;
`,
sql`
  SELECT * FROM notice
  ORDER BY id
  LIMIT ${Number(limit)}
  OFFSET ${Number(limit) * (Number(page) - 1)};
`]);
  return res.status(200).json({ status: 'success', data: {
      limit: Number(limit),
      page: Number(page),
      list,
      count: list.length,
      total: Number(total),
    },
  });
}
