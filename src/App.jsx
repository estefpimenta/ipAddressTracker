
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

  const [weatherData, setWeatherData] = useState(null)

  const isNight = weatherData && !weatherData.isDay

  const theme = isNight ? 'night' : 'day'

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

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${data.location.lat}&longitude=${data.location.lng}&current=is_day,temperature_2m`
      )

      const weather = await weatherResponse.json()
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIpData(data)

      setWeatherData({
      temperature: weather.current.temperature_2m,
      isDay: weather.current.is_day === 1
      })
    
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
        weatherData={weatherData}
        theme={theme}
        />
      
      <main>
        <Map ipData={ipData} />
      </main>
    </>
  )
}

export default App
