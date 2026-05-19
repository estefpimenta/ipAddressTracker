import './Header.css';

import SearchBar from '../SearchBar/SearchBar';
import InfoPanel from '../InfoPanel/InfoPanel';
import dayVideo from '../../assets/videos/video-bg-day.mp4';
import nightVideo from '../../assets/videos/video-bg-night.mp4';

function Header({ ipData, fetchIPData, isLoading, error, weatherData }) {


    const isNight = weatherData && !weatherData.isDay


    return(
        <header className='header'>

            <video autoPlay muted loop playsInline className='header-video' key={isNight ? 'night' : 'day'}>
                <source src={isNight ? nightVideo : dayVideo} type="video/mp4" />
            </video>

            <div className="header-content">

                <h1>Rastreador de IP</h1>

                <SearchBar 
                    fetchIPData={fetchIPData} 
                    isLoading={isLoading}
                />

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <InfoPanel 
                    ipData={ipData} 
                    isLoading={isLoading} 
                    weatherData={weatherData}
                />

            </div>

           
        </header>
    )
}

export default Header;