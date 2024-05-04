// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dayjs from 'dayjs'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const gyms = [
    {
      id: 1,
      name: '1K Fitness',
      latitude: -5.893977656910647,
      longitude: -35.268462896347046,
      availableTime: dayjs(new Date()).toDate().toDateString(),
      closedInterval: dayjs(new Date()).add(12, 'hour').toDate().toString(),
      startInterval: dayjs(new Date()).add(4, 'hour').toDate().toString(),
      endInterval: dayjs(new Date()).add(5, 'hour').toDate().toString(),
    },
    {
      id: 2,
      name: 'Forma Vip Fitness',
      latitude: -5.903683864506184,
      longitude: -35.268621146678925,
      availableTime: dayjs(new Date()).toDate().toDateString(),
      closedInterval: dayjs(new Date()).add(12, 'hour').toDate().toString(),
      startInterval: dayjs(new Date()).add(4, 'hour').toDate().toString(),
      endInterval: dayjs(new Date()).add(5, 'hour').toDate().toString(),
    },
    {
      id: 3,
      name: 'Smart Fit - Parnamirim Centro',
      latitude: -5.921358970549278,
      longitude: -35.26292681694031,
      availableTime: dayjs(new Date()).toDate().toDateString(),
      closedInterval: dayjs(new Date()).add(12, 'hour').toDate().toString(),
      startInterval: dayjs(new Date()).add(4, 'hour').toDate().toString(),
      endInterval: dayjs(new Date()).add(5, 'hour').toDate().toString(),
    },
  ]

  return res.status(200).json({
    gyms,
  })
}
