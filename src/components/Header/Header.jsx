import './Header.css';

import SearchBar from '../SearchBar/SearchBar';
import InfoPanel from '../InfoPanel/InfoPanel';

function Header({ ipData }) {


    return(
        <header className='header'>
            <h1>Rastreador de IP</h1>
            <SearchBar />
            <InfoPanel ipData={ipData} />
        </header>
    )
}

export default Header;