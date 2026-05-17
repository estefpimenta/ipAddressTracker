import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import InfoPanel from './components/InfoPanel/InfoPanel';

function App() {

  return (
    <>
      <header>
        <h1>Rastreador de IP</h1>
        <SearchBar />

        <InfoPanel />
      </header>

      <main>
        <p>Projeto iniciado</p>
      </main>
    </>
  )
}

export default App
