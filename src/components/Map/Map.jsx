import './Map.css'

import { MapContainer, TileLayer, Marker, Popup,  useMap } from 'react-leaflet'

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