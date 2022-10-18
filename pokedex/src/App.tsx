import { useState } from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import {RouteList} from './routes';
import './App.css';


function App(){
  const [count, setCount] = useState<number>(0);

  return (
      <div className="App">
        <Router>
          <RouteList/>
        </Router> 
      </div>
    
  )
}

export default App;
