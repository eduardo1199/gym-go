import { GoogleMap, useLoadScript } from '@react-google-maps/api'
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
    <div className="w-full h-screen bg-primary-blue">
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={'roadmap'}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        onLoad={() => console.log('Map Component Loaded...')}
      />
    </div>
  )
}
