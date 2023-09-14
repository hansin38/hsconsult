import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

type ResponseData = {
  status: 'success' | 'error';
  result: any;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') return res.status(405).end();
  const { title, content, name, email, phone, password } = req.body;
  const result = await sql`INSERT INTO inquiry (timestamp, title, content, name, email, phone, reply, password)
VALUES (new Date().toISOString(), ${title}, ${content}, ${name}, ${email}, ${phone}, true, ${password});`;
  return res.status(200).json({ status: 'success', result });
}
