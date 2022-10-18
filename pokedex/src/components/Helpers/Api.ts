import axios from "axios";
import { Pokemon, PokemonInfo, Pokemons } from "./interfaces";

const URL = `https://pokeapi.co/api/v2/pokemon`;


export async function getPokemons():Promise<Pokemons>{
   const endPoint = `${URL}?limit=50&offset=0`;
   const response = await axios.get<Pokemons>(endPoint);
   const promiseArr = response.data.results.map(({name})=> getPokemon(name));
   const resultsPromise = await Promise.all(promiseArr);
   return{
      ...response.data,
      results: resultsPromise
   } ;
}

export async function getPokemon(name: string):Promise<PokemonInfo>{
   const endPoint2 = `${URL}/${name}`;
   const response = await axios.get<PokemonInfo>(endPoint2);
   return response.data;
}