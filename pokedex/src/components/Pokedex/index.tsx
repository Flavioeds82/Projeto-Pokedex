import { Container } from "./styled";
import React,{useEffect, useState} from 'react';
import axios from "axios";
import { getPokemon, getPokemons } from "../Helpers/Api";
import { Pokemon, PokemonInfo, Pokemons } from "../Helpers/interfaces";
import { Link } from "react-router-dom";
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
                     <h5>{pokemon.name}</h5>
                     
                  </div>
               ))}
            </div>
            
         </div>
      </Container>
      
    );
}

 