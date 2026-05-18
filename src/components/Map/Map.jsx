import './Map.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map() {

    const position = [-23.5275, -46.6315]

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