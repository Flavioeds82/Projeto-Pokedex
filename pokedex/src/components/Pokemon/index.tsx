import React, { useEffect, useState } from 'react';
import { Container } from './styled';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../Helpers/Api';
import { PokemonInfo } from '../Helpers/interfaces';

interface indexProps {
   
}

export const Pokemon: React.FC<indexProps> = () => {

   const [pokemonDetails, setPokemonDetails] = useState<PokemonInfo | undefined>(undefined);
   const {name} = useParams();

   useEffect(() => {
      try {
         if(name){
            getPokemonDetails(name).then((res)=> setPokemonDetails(res))
         }
         
      } catch (e) {
         console.log(e);
      }
   }, []);

   return (
      <Container>
         <h1>{name}</h1>
         <img src={pokemonDetails?.sprites.front_default} alt="pikachu" width="100px"/>
         {/* <h3>{JSON.stringify(pokemonDetails?.sprites.front_default, undefined, 2)}</h3> */}
      </Container>
   );
};

