import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'

const MyMapComponent = () => {
  const mapState = {
    center: [53.968553, 38.332281],
    zoom: 18
  }

  return (
    <YMaps>
      <Map state={mapState} style={{ width: '100%', height: '500px' }}>
        <Placemark geometry={[53.968553, 38.332281]} />
      </Map>
    </YMaps>
  )
}

export default MyMapComponent
