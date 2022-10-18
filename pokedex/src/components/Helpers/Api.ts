import axios from "axios";
import { Pokemon, PokemonInfo, Pokemons } from "./interfaces";

const URL = `https://pokeapi.co/api/v2/pokemon`;


export async function getPokemon():Promise<Pokemons>{
   const endPoint = `${URL}?limit=50&offset=0`;
   const response = await axios.get<Pokemons>(endPoint);
   return response.data;
}

export async function getPokemonDetails(name: string):Promise<PokemonInfo>{
   const endPoint2 = `${URL}/${name}`;
   const response = await axios.get<PokemonInfo>(endPoint2);
   return response.data;
}