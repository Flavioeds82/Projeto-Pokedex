import { Container } from "./styled";
import React,{useEffect, useState} from 'react';
import axios from "axios";
import { getPokemon, getPokemonDetails } from "../Helpers/Api";
import { Pokemon, PokemonInfo, Pokemons } from "../Helpers/interfaces";
import { Link } from "react-router-dom";
import { Menu } from "../Menu";
import { useNavigate } from 'react-router-dom';




export function Pokedex() {

   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [selectPokemon, setSelectPokemon] = useState<Pokemon | undefined>(undefined);
   const navigate = useNavigate();


   function handleClick(pokemon: string){
      navigate(`/pokemon/${pokemon}`);
   }

   useEffect(() => {
      
      try {
         getPokemon().then((res)=> setPokemons(res.results))
      } catch (e) {
         console.log(e);
      }
   }, []);

   
   return ( 
      <Container>       
         <div className="container">
            <Menu/>
            <div className="poke-title">{selectPokemon ?.name || "nenhum selecionado"}</div>
            <div className="poke-grid">
               { pokemons.map((pokemon) => (
                  <div className="poke-grid-item" onClick={()=> handleClick(pokemon.name)}>
                     <h5>{pokemon.name}</h5>
                     
                  </div>
               ))}
            </div>
            
         </div>
      </Container>
      
    );
}

 