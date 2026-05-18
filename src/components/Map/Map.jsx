import './Map.css'

import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';



import { MapContainer, TileLayer, Marker, Popup,  useMap } from 'react-leaflet'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function ChangeMapView({ center }) {
  const map = useMap()

  map.flyTo(center, map.getZoom(), {
    animate: true,
    duration: 4,
    easeLinearity: 0.08,
  });

  return null
}


function Map({ ipData }) {

    const position = [
        ipData.location.lat,
        ipData.location.lng
    ]

    return(

        <section className="map">
            <MapContainer
                center={position}
                zoom={12}
                scrollWheelZoom={true}
            >
                <ChangeMapView center={position} />

                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position}>

                <Popup>
                    Localização atual
                </Popup>
                
                </Marker>

            </MapContainer>
        </section>

    )
}

export default Map