import React from 'react';
import {BrowserRouter as Router,Routes, Route, useParams} from "react-router-dom";
import { Pokedex } from './components/Pokedex';
import { Pokemon } from './components/Pokemon';

interface routesProps {
   
}

export const RouteList: React.FC<routesProps> = () => {


   return (
      <div>
         <Routes>
            <Route path="/" >
               <Route index element={<Pokedex/>}/>
            </Route>
            <Route path="/pokemon/:name" element={<Pokemon/>}/>
         </Routes>
      </div>
   );
};

