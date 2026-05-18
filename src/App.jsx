import './App.css'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import { useState } from 'react'


function App() {

  const [ipData, setIpData] = useState({

    ip: '192.212.174.101',

    location: {
      city: 'São Paulo',
      region: 'SP',
      timezone: '-03:00',

      lat: -23.55052,
      lng: -46.633308,
    },

    isp: 'Vivo',
})

  return (
    <>
      <Header  ipData={ipData}/>

      <main>
        <Map ipData={ipData} />
      </main>
    </>
  )
}

export default App
