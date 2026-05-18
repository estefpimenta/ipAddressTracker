import './App.css'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import { useState, useEffect } from 'react'


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

  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState(null);

  async function fetchIPData(ip = '') {
    try {

      setIsLoading(true)
      setError(null);

      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          import.meta.env.VITE_IPIFY_API_KEY
        }&ipAddress=${ip}`
      )

      if (!response.ok) {
        if (response.status === 422) {
          throw new Error("IP inválido. Verifique e tente novamente.");
        }

         throw new Error("Erro ao buscar dados da API.");
      } 

      const data = await response.json()

      
      setIpData(data)
    
    } catch (error) {
      console.error(error)

       setError(error.message || "Erro inesperado ao buscar IP.");
    } finally {
      setIsLoading(false)

    }
  }

  useEffect(() => {
    fetchIPData()
  }, [])

  return (
    <>
      <Header
        ipData={ipData}
        fetchIPData={fetchIPData}
        isLoading={isLoading}
        error={error}
        />
      
      <main>
        <Map ipData={ipData} />
      </main>
    </>
  )
}

export default App
