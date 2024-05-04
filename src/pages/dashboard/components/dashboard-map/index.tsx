import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import { useEffect, useMemo, useState } from 'react'

import { MarkerGym } from '../marker-gym'

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

interface DashboardMapProps {
  gyms: Gym[]
}
export function DashboardMap({ gyms }: DashboardMapProps) {
  const [longitude, setLongitude] = useState<number>()
  const [latitude, setLatitude] = useState<number>()

  const libraries = useMemo(() => ['places'], [])

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
    }),
    [],
  )

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

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries as any,
  })

  if (!isLoaded) {
    return <p>Loading</p>
  }

  function handleMarkerInMap(event: google.maps.MapMouseEvent) {
    const { lat, lng } = event.latLng

    const latitude = lat()
    const longitude = lng()
  }

  return (
    <div className="w-full h-screen">
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={'roadmap'}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        onClick={handleMarkerInMap}
      >
        <MarkerF
          position={mapCenter}
          icon="https://maps.google.com/mapfiles/kml/shapes/man.png"
        />

        {gyms?.map((gym) => {
          return (
            <MarkerGym
              key={gym.id}
              gym={gym}
              position={{
                lat: gym.latitude,
                lng: gym.longitude,
              }}
            />
          )
        })}
      </GoogleMap>
    </div>
  )
}
