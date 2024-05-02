import { MarkerF, MarkerProps } from '@react-google-maps/api'

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

interface MarkerGymProps extends MarkerProps {
  gym: Gym
}

export function MarkerGym({ gym, ...props }: MarkerGymProps) {
  function handleOpenDialogDetailsGym() {
    console.log('click gym')
  }

  return (
    <div>
      <MarkerF
        key={gym.id}
        icon="https://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png"
        onClick={handleOpenDialogDetailsGym}
        {...props}
      />
    </div>
  )
}
