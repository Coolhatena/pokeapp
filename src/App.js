import logo from './img/title.png';
import './App.css';
import { PokeCardGrid } from './componentes/PokeCardGrid';
import { InputSearch } from './componentes/InputSearch';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div> 
          <img src={logo} alt='PokeApp Title'/>
        </div>
      </header>

      <div>
        <InputSearch />
        <PokeCardGrid />
      </div>

    </div>
  );
}

export default App;
