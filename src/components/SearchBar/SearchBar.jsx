import './SearchBar.css';
import { useState } from 'react'
import arrowIcon from '../../assets/icon-arrow.svg'
import loadindIcon from '../../assets/icon-loading.png'

function SearchBar({ fetchIPData, isLoading }) {

    const [inputValue, setInputValue] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        fetchIPData(inputValue)
    }

    return(

        <form className='search-bar' onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Busque por um endereço de IP ou domínio"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                 />

            <button type="submit" disabled={isLoading}>
                <img
                    src={isLoading ? loadindIcon : arrowIcon}
                    alt=""
                    className={isLoading ? 'loading-icon' : ''} />
            </button>


        </form>

    )
    
}


export default SearchBar;