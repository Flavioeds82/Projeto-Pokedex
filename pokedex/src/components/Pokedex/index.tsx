import { Container } from "./styled";
import React,{useEffect, useState} from 'react';
import axios from "axios";
import { getPokemon, getPokemonDetails } from "../Helpers/Api";
import { Pokemon, Pokemons } from "../Helpers/interfaces";
import { Link } from "react-router-dom";
import { Menu } from "../Menu";




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
         <div className="container">
            <Menu/>
            <div className="poke-title">{selectPokemon ?.name || "nenhum selecionado"}</div>
            <div className="poke-grid">
               { pokemons.map((pokemon) => (
                  <div className="poke-grid-item" onClick={()=>setSelectPokemon(pokemon)}>
                     <h5>{pokemon.name}</h5>
                     <p>{pokemonDetails}</p>
                  </div>
               ))}
            </div>
            
         </div>
      </Container>
      
    );
}

 