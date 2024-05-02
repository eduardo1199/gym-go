import { SideBar } from '@/components/SideBar'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { PermissionsEnum } from 'auth/permission'
import { api } from 'lib/api'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth].api'
import { useEffect, useMemo, useState } from 'react'
import { DashboardMap } from './components/dashboard-map'
import dayjs from 'dayjs'

type Gym = {
  id: number
  name: string
  latitude: number
  longitude: number
  availableTime: string
  closedInterval: string
  startInterval: string
  endInterval: string
}
interface DashboardProps {
  gyms: Gym[]
}

export default function Dashboard({ gyms }: DashboardProps) {
  return (
    <div className="w-full h-screen flex relative">
      <SideBar />

      <div className="w-full h-screen">
        <DashboardMap gyms={gyms} />
      </div>
    </div>
  )
}

export const getServerSideProps = (async (context) => {
  // get session
  const session = await getServerSession(context.req, context.res, authOptions)

  // verify session exists in cookies
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
      props: {
        gyms: [],
      },
    }
  }

  // TODO: Permission on page server side
  /* const permissionsUserSession = session.user.role */
  /* 
  const hasPermissionFromPage = [
    PermissionsEnum.ADMIN,
    PermissionsEnum.STUDENT,
  ].includes(permissionsUserSession) */

  // TODO: Implement page denied
  /*  if (!hasPermissionFromPage) {
    return {
      redirect: {
        statusCode: 403,
        destination: '/denied',
        permanent: false,
      },
    }
  } */

  // TODO: fetch gyms response server side
  /* const gymsResponse = await api.get('/gyms') */

  // TODO: gyms array response
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

  return {
    props: {
      gyms,
    },
  }
}) satisfies GetServerSideProps<{ gyms: Gym[] }>
