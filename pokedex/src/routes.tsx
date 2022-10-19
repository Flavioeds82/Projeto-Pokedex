import React from 'react';
import {BrowserRouter as Router,Routes, Route, useParams} from "react-router-dom";
import { Favoritos } from './components/Pages/Favoritos';
import { Pokedex } from './components/Pages/Pokedex';
import { Pokemon } from './components/Pages/Pokemon';

interface routesProps {
   
}

export const RouteList: React.FC<routesProps> = () => {


   return (
      <div>
         <Routes>
            <Route path="/" >
               <Route index element={<Pokedex/>}/>
            </Route>
            <Route path="/pokemon/:name" element={<Pokemon name={undefined}/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>
         </Routes>
      </div>
   );
};

