import { Container } from "./styled";
import React,{useEffect, useState} from 'react';
import { getPokemons } from "../Helpers/Api";
import { Pokemon, PokemonInfo, Pokemons, Type } from "../Helpers/interfaces";
import { Menu } from "../Menu";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "react-query";



export function Pokedex() {

   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [selectPokemon, setSelectPokemon] = useState<Pokemon | undefined>(undefined);
   const [name, setName] = useState<string>("Pokedex");
   const navigate = useNavigate();

   const {data} = useQuery('getPokemons', getPokemons);

   function handleClick(pokemon: string){
      navigate(`/pokemon/${pokemon}`);
   }

   // useEffect(() => {
      
   //    try {
   //       getPokemons().then((res)=> setPokemons(res.results))
   //    } catch (e) {
   //       console.log(e);
   //    }
   // }, []);

   
   return ( 
      <Container>       
         <div className="container">
            <Menu/>
            <div className="poke-grid">
               { data?.results.map((pokemon, key) => (
                  <div key={key} className="poke-grid-item" onClick={()=> handleClick(pokemon.name)}>
                     <img src={pokemon.sprites.other?.dream_world.front_default} alt={pokemon.name} />
                     <h5>{pokemon.name}</h5>
                     <div className="poke-types-container">
                        {pokemon.types.map((type:Type, key: number)=>
                           <div className="poke-types" key={key}>  {type.type.name}  </div>
                        )}
                     </div> 
                         
                  </div>
               ))}
            </div>
            
         </div>
      </Container>
      
    );
}

 