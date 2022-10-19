import React, { useState, Children } from 'react';
import { PokemonInfo } from '../components/Helpers/interfaces';

interface FavoriteContextProps {
   favorites: PokemonInfo[];
   setFavorites: React.Dispatch<React.SetStateAction<PokemonInfo[]>>;
}
type IProps = {
   children: React.ReactNode;
}

export const FavoriteContext  = React.createContext<FavoriteContextProps>({
   favorites: [], 
   setFavorites: ()=> console.warn('setFavorites is not ready'),
})

export const FavoriteProvider = ({children}:IProps) => {

   const [favorites, setFavorites] = useState<PokemonInfo[]>([])

   return (
      <FavoriteContext.Provider value={{favorites, setFavorites}}>
         {children}
      </FavoriteContext.Provider>
   );
};


