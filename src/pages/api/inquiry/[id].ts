import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';
import doWrite from './write';

type ResponseData = {
  status: 'success' | 'error';
  data: any;
}

const doGet = async (req, res) => {
  const { id } = req.query;
  const { rows } = await sql`
SELECT * FROM inquiry WHERE id = ${id};
`;
  if (rows.length === 0) return res.status(404).json({ status: 'error', data: 'Not Found' });
  return res.status(200).json({ status: 'success', data: rows[0] });
};

const doPatch = async (req, res) => {
  const { id } = req.query;
  const updateBody = req.body.update.map(([keys, value]) => `${keys} = ${value}`).join(', ');
  const { rows } = await sql`
UPDATE inquiry
${updateBody}
WHERE id = ${id};
`;
  if (rows.length === 0) return res.status(404).json({ status: 'error', data: 'Not Found' });
  return res.status(200).json({ status: 'success', data: rows[0] });
};

const doDelete = async (req, res) => {
  const { id } = req.query;
  await sql`
DELETE FROM inquiry WHERE id = ${id};
`;
  return res.status(200).json({ status: 'success' });
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (!req.query.id || Number.isNaN(Number(req.query.id))) return res.status(400).json({ status: 'error', data: 'Bad Request' });
  switch (req.method.toUpperCase()) {
    case 'GET':
      return doGet(req, res);
    case 'PATCH':
      return doPatch(req, res);
    case 'DELETE':
      return doDelete(req, res);
    case 'PUT':
      return doWrite(req, res);
  }
  return res.status(405).end();
}
