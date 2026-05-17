import './Header.css';

import SearchBar from '../SearchBar/SearchBar';
import InfoPanel from '../InfoPanel/InfoPanel';

function Header() {


    return(
        <header className='header'>
            <h1>Rastreador de IP</h1>
            <SearchBar />
            <InfoPanel />
        </header>
    )
}

export default Header;