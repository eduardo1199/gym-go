import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'

const complementRegisterManagerGymSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
})

type ComplementRegisterManagerGymData = z.infer<
  typeof complementRegisterManagerGymSchema
>

export function MapRegister() {
  const { setValue } = useFormContext<ComplementRegisterManagerGymData>()

  const [currentLongitude, setCurrentLongitude] = useState<number>()
  const [currentLatitude, setCurrentLatitude] = useState<number>()

  const [markerLatLng, setMarkerLatLng] = useState<google.maps.LatLng>()

  const libraries = useMemo(() => ['places'], [])

  function handleMarkerInMap(event: google.maps.MapMouseEvent) {
    setMarkerLatLng(event.latLng)

    const { lat, lng } = event.latLng

    const latitude = lat()
    const longitude = lng()

    console.log(latitude, longitude)

    setValue('latitude', latitude)
    setValue('longitude', longitude)
  }

  const mapCenter = useMemo(
    () => ({ lat: currentLatitude, lng: currentLongitude }),
    [currentLatitude, currentLongitude],
  )

  useEffect(() => {
    const geoLocation = navigator.geolocation

    geoLocation.getCurrentPosition((position) => {
      setCurrentLatitude(position.coords.latitude)
      setCurrentLongitude(position.coords.longitude)
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
    googleMapsApiKey: process.env.GOOGLE_MAPS_KEY,
    libraries: libraries as any,
  })

  if (!isLoaded) {
    return <p>Loading</p>
  }

  return (
    <GoogleMap
      options={mapOptions}
      zoom={14}
      center={mapCenter}
      mapTypeId={'roadmap'}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      onLoad={() => console.log('Map Component Loaded...')}
      onClick={handleMarkerInMap}
    >
      {markerLatLng && <Marker position={markerLatLng} />}
    </GoogleMap>
  )
}
