import './Header.css';

import SearchBar from '../SearchBar/SearchBar';
import InfoPanel from '../InfoPanel/InfoPanel';

function Header({ ipData, fetchIPData, isLoading, error, weatherData }) {


    return(
        <header className='header'>
            <h1>Rastreador de IP</h1>
            <SearchBar 
                fetchIPData={fetchIPData} 
                isLoading={isLoading} />

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            <InfoPanel 
                ipData={ipData} 
                isLoading={isLoading} 
                weatherData={weatherData} />
        </header>
    )
}

export default Header;