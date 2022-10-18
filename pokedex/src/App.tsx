import { useState } from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import {RouteList} from './routes';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();


function App(){
  const [count, setCount] = useState<number>(0);

  return (
      <div className="App">
        <QueryClientProvider client={new QueryClient}>
          <Router>
            <RouteList/>
          </Router> 
        </QueryClientProvider>
        
      </div>
    
  )
}

export default App;
