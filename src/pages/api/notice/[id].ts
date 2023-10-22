import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';
import { update } from 'lodash';

type ResponseData = {
  status: 'success' | 'error';
  data: any;
}

const doGet = async (req, res) => {
  const { id } = req.query;
  const { rows } = await sql`
SELECT * FROM notice WHERE id = ${id};
`;
  if (rows.length === 0) return res.status(404).json({ status: 'error', data: 'Not Found' });
  return res.status(200).json({ status: 'success', data: rows[0] });
};

const doPatch = async (req, res) => {
  const { id } = req.query;
  const update = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { rows } = await sql`
UPDATE notice
SET title = ${update.title}, content = ${update.content}
WHERE id = ${id};
`;
  return res.status(200).json({ status: 'success', data: rows[0] });
    // return res.status(200).json({ status: 'success' });
};

const doDelete = async (req, res) => {
  const { id } = req.query;
  await sql`
DELETE FROM notice WHERE id = ${id};
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
  }
  return res.status(405).end();
}
