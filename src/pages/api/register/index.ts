// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { api } from 'lib/api'
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  const { email, office, password, username } = req.body

  /* setCookie({ res }, '@ignitecall:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    path: '/',
  }) */

  const response = await api.post('api/cadastro/', {
    email,
    office,
    password,
    username,
  })

  const token = response.data

  return res.status(201).json({ token })
}
