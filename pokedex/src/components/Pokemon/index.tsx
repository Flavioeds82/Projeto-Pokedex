import React, { useEffect, useState } from 'react';
import { Container } from './styled';
import { useParams } from 'react-router-dom';
import { getPokemon } from '../Helpers/Api';
import { PokemonInfo } from '../Helpers/interfaces';
import { Menu } from '../Menu';

interface indexProps {
   name: string | undefined;
}

export const Pokemon: React.FC<indexProps> = () => {

   const [pokemonDetails, setPokemonDetails] = useState<PokemonInfo | undefined>(undefined);
   const [loading, setLoading] = useState<boolean>(true);
   const {name} = useParams();
   const pd = pokemonDetails;

   useEffect(() => {
      try {
         if(name){
            getPokemon(name).then((res)=> setPokemonDetails(res));
         }
         setTimeout(() => {
            setLoading(false)
         }, 2000);
      } catch (e) {
         console.log(e);
      }
   }, []);

   return (
      <Container>
         <div className="header"><Menu/></div>
         <div className="container">
            {loading &&
               <div className="loading"></div>
               
            }
            {!loading &&
               <div className="poke-picture"><img src={pd?.sprites.other?.dream_world.front_default} alt="pikachu" width="100px"/></div>
            }
            
            <div className="poke-content">
               <div className="poke-info"><h1>{name}</h1></div>
            </div>
            <div className="poke-content">
               <div className="poke-label"> Espécie: </div>
               <div className="poke-info">{pd?.species.name}</div>
            </div>
            <div className="poke-content">
               <div className="poke-label"> Altura: </div>
               <div className="poke-info">{pd?.height}</div>
            </div>
            <div className="poke-content">
               <div className="poke-label"> Peso: </div>
               <div className="poke-info">{pd?.weight}</div>
            </div>
            <div className="poke-content">
               <div className="poke-label"> Habilidades: </div>
               <div className="poke-info">{pd?.abilities.map((ability)=> ability.ability.name)}</div>
            </div>
         </div>
      </Container>
   );
};


{/* <h3>{JSON.stringify(pokemonDetails?.sprites.front_default, undefined, 2)}</h3> */}