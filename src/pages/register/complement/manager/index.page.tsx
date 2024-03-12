import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { env } from 'env'
import { useEffect, useMemo, useState } from 'react'

export default function ComplementRegisterManager() {
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
      <div className="bg-primary-blue flex h-full">
        <div className="flex flex-1 justify-center items-start flex-col p-6 gap-4">
          <strong className="text-5xl font-bold text-white animate-visible">
            Gym<span className="text-primary-purple">Go</span>
          </strong>

          <span className="text-gray-300 font-bold text-2xl">
            Preencha as informações da sua academia!
          </span>

          <form action="" className="flex flex-col gap-4 w-full">
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>
            <Input.Root
              placeholder="Nome"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>

            <Button.Primary className="mt-4">Cadastrar</Button.Primary>
          </form>
        </div>
        <div className="bg-white w-[70%] h-full">
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
    </div>
  )
}
