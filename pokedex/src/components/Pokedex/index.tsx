import { Container } from "./styled";
import React,{useEffect, useState} from 'react';
import axios from "axios";
import { getPokemon, getPokemonDetails } from "../Helpers/Api";
import { Pokemon, Pokemons } from "../Helpers/interfaces";




export function Pokedex() {

   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [selectPokemon, setSelectPokemon] = useState<Pokemon|undefined>(undefined);
   const [pokemonDetails, setPokemonDetails] = useState<Pokemon | undefined>(undefined);

   useEffect(() => {
      try {
         getPokemon().then((res)=> setPokemons(res.results))
      } catch (e) {
         console.log(e);
      }
   }, []);

   useEffect(() => {
      if(!selectPokemon){return};
      try {
         getPokemonDetails(selectPokemon.name).then((res)=> setPokemonDetails(res))
      } catch (e) {
         console.log(e);
      }
   }, [selectPokemon]);

   return ( 
      <Container>
         <h1>{selectPokemon ?.name || "nenhum selecionado"}</h1>
         <div className="container">
            { pokemons.map((pokemon) => <div className="poke" onClick={()=>setSelectPokemon(pokemon)}>{pokemon.name}</div>)}
         </div>
      </Container>
      
    );
}

 