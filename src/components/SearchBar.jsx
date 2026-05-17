import './SearchBar.css';

function SearchBar() {


    return(

        <form className='search-bar'>

            <input
                type="text"
                placeholder="Busque por um endereço de IP ou domínio"
                 />

            <button type="submit"></button>


        </form>

    )
}


export default SearchBar;