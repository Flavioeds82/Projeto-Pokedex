import { useState } from 'react';
import './App.css';
import { Pokedex } from './components/Pokedex';

function App(){
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <Pokedex/>
    </div>
  )
}

export default App;
