import { Container } from "./styled";
import React,{useEffect, useState} from 'react';
import axios from "axios";

interface Pokemon{
   name: string;
   url: string;
}



export function Pokedex() {

   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [selectPokemon, setSelectPokemon] = useState<Pokemon|undefined>(undefined);

   useEffect(() => {
      try {
         axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0").then((res)=> setPokemons(res.data.results))
      } catch (e) {
         console.log(e);
      }
   }, []);

   useEffect(() => {
      if(!selectPokemon){return};
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

 