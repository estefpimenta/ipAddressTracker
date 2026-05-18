import './SearchBar.css';
import { useState } from 'react'

function SearchBar({ fetchIPData }) {

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

            <button type="submit"></button>


        </form>

    )
}


export default SearchBar;