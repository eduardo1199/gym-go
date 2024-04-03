import { SideBar } from '@/components/SideBar'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { PermissionsEnum } from 'auth/permission'
import { api } from 'lib/api'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from 'pages/api/auth/[...nextauth].api'
import { useEffect, useMemo, useState } from 'react'

export default function Map() {
  const [longitude, setLongitude] = useState<number>()
  const [latitude, setLatitude] = useState<number>()

  const libraries = useMemo(() => ['places'], [])

  const mapCenter = useMemo(
    () => ({ lat: latitude, lng: longitude }),
    [latitude, longitude],
  )

  useEffect(() => {
    const geoLocation = navigator.geolocation

    geoLocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }, [])

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
    }),
    [],
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries as any,
  })

  if (!isLoaded) {
    return <p>Loading</p>
  }

  console.log(isLoaded)

  return (
    <div className="w-full h-screen flex relative">
      <SideBar />

      <div className="w-full h-screen">
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={'roadmap'}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          onLoad={() => console.log('Map Component Loaded...')}
        />
      </div>
    </div>
  )
}

/* export const getServerSideProps = (async (context) => {
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
  const permissionsUserSession = session.user.role

  const hasPermissionFromPage = [
    PermissionsEnum.ADMIN,
    PermissionsEnum.STUDENT,
  ].includes(permissionsUserSession)

  // TODO: Implement page denied
  if (!hasPermissionFromPage) {
    return {
      redirect: {
        statusCode: 403,
        destination: '/denied',
        permanent: false,
      },
    }
  }

  // TODO: fetch gyms response server side
  const gymsResponse = await api.get('/gyms')

  // TODO: gyms array response
  const gyms: [] = gymsResponse.data

  return {
    props: {
      gyms,
    },
  }
}) satisfies GetServerSideProps<{ gyms: [] }> */
