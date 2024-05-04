import { SideBar } from '@/components/SideBar'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth].api'
import { DashboardMap } from './components/dashboard-map'
import { baseApi } from 'lib/baseApi'

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
  const response = await baseApi.get<{ gyms: Gym[] }>('/gyms')

  const { gyms } = response.data

  return {
    props: {
      gyms,
    },
  }
}) satisfies GetServerSideProps<{ gyms: Gym[] }>
