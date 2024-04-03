import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { env } from 'env'
import { useEffect, useMemo, useState } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const complementRegisterManagerGymSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
})

type ComplementRegisterManagerGymData = z.infer<
  typeof complementRegisterManagerGymSchema
>

export default function ComplementRegisterManager() {
  const { setValue, handleSubmit } = useForm<ComplementRegisterManagerGymData>({
    resolver: zodResolver(complementRegisterManagerGymSchema),
  })

  const [currentLongitude, setCurrentLongitude] = useState<number>()
  const [currentLatitude, setCurrentLatitude] = useState<number>()

  const [markerLatLng, setMarkerLatLng] = useState<google.maps.LatLng>()

  const libraries = useMemo(() => ['places'], [])

  function handleMarkerInMap(event: google.maps.MapMouseEvent) {
    setMarkerLatLng(event.latLng)

    const { lat, lng } = event.latLng

    const latitude = lat()
    const longitude = lng()

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
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries as any,
  })

  function handleSubmitRegisterComplementManager(
    data: ComplementRegisterManagerGymData,
  ) {
    console.log(data)
  }

  if (!isLoaded) {
    return <p>Loading</p>
  }

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

          <form
            action=""
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit(handleSubmitRegisterComplementManager)}
          >
            <Input.Root
              placeholder="Nome da academia"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>
            <Input.Root
              placeholder="CNPJ"
              className="bg-transparent text-white"
            >
              <Input.Error />
            </Input.Root>

            <span className="text-muted-foreground text-white text-sm font-semibold">
              Selecione os horários disponíveis da academia
            </span>

            <div className="space-y-3">
              <Accordion.Root
                type="single"
                collapsible
                className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-md hover:shadow-tertiary-purple"
              >
                <Accordion.Item value="monday">
                  <Accordion.Trigger className="text-primary-purple font-semibold text-sm p-2 hover:brightness-105 w-full flex">
                    Segunda-feira
                  </Accordion.Trigger>

                  <Accordion.Content className="p-2">
                    <div className="grid gap-3 grid-cols-3">
                      <div className="flex items-center gap-2">
                        <Checkbox id="monday" />
                        <label
                          htmlFor="monday"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                        >
                          05:00h
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="monday" />
                        <label
                          htmlFor="monday"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                        >
                          05:00h
                        </label>
                      </div>

                      <div className="flex items-center gap-2">
                        <Checkbox id="monday" />
                        <label
                          htmlFor="monday"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                        >
                          05:00h
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="monday" />
                        <label
                          htmlFor="monday"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                        >
                          05:00h
                        </label>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
              <Accordion.Root
                type="single"
                collapsible
                className="border border-primary-purple transition-all rounded bg-transparent over:bg-secondary-blue hover:shadow-md hover:shadow-tertiary-purple"
              >
                <Accordion.Item value="monday">
                  <Accordion.Trigger className="text-primary-purple font-semibold text-sm p-2 hover:brightness-105 w-full flex">
                    Terça-feira
                  </Accordion.Trigger>

                  <Accordion.Content className="p-2">
                    <div className="grid gap-3 grid-cols-3">
                      <div className="flex items-center gap-2">
                        <Checkbox id="monday" />
                        <label
                          htmlFor="monday"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                        >
                          05:00h
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="monday" />
                        <label
                          htmlFor="monday"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                        >
                          05:00h
                        </label>
                      </div>

                      <div className="flex items-center gap-2">
                        <Checkbox id="monday" />
                        <label
                          htmlFor="monday"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                        >
                          05:00h
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="monday" />
                        <label
                          htmlFor="monday"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                        >
                          05:00h
                        </label>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>

            <Button.Primary className="mt-4" type="submit">
              Cadastrar
            </Button.Primary>
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
            onClick={handleMarkerInMap}
          >
            {markerLatLng && <Marker position={markerLatLng} />}
          </GoogleMap>
        </div>
      </div>
    </div>
  )
}

/* export const getServerSideProps = (async (context) => {
  // get session
  const session = await getServerSession(context.req, context.res, authOptions)

  // verify session exists in cookies
  if (session) {
    // TODO: verify profile session and redirect to correct url page

    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }
  }
}) satisfies GetServerSideProps */
