import { Container } from "./styled";
import React,{useEffect, useState} from 'react';
import { getPokemons } from "../../Helpers/Api";
import { Pokemon, PokemonInfo, Pokemons, Type } from "../../Helpers/interfaces";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "react-query";
import { Box, AppBar, Toolbar, IconButton, Typography, LinearProgress, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Favorite } from "@mui/icons-material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import favorite_icon from "../../../assets/images/favorite-icon.png";



export function Pokedex() {

   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [selectPokemon, setSelectPokemon] = useState<Pokemon | undefined>(undefined);
   const [name, setName] = useState<string>("Pokedex");
   const navigate = useNavigate();

   const {data} = useQuery('getPokemons', getPokemons);

   function handleClick(pokemon: string){
      navigate(`/pokemon/${pokemon}`);
   }
   function handleFavoriteClick(){
      navigate("/favoritos");
   }
   
   return ( 
      <Container>       
         <div className="container">
         <AppBar position="static">
               <Toolbar>
                  <IconButton
                     size="large"
                     edge="start"
                     color="inherit"
                     aria-label="menu"
                     sx={{ mr: 2 }}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     Pokedex
                  </Typography>
                  <IconButton
                     size="large"
                     edge="start"
                     color="inherit"
                     aria-label="favorites"
                     sx={{ mr: 2 }}
                     onClick={handleFavoriteClick}
                  >
                     <Favorite />
                  </IconButton>
               </Toolbar>
            </AppBar>
             
            <div className="poke-grid">
               { data?.results.map((pokemon, key) => (
                  <div key={key} className="poke-grid-item" onClick={()=> handleClick(pokemon.name)}>
                     <img id="poke-img" src={pokemon.sprites.other?.dream_world.front_default} alt='pokemon'/>
                     <h5>{pokemon.name}</h5>
                     <div className="poke-types-container">
                        {pokemon.types.map((type:Type, key: number)=>
                           <div className="poke-types" key={key}>  {type.type.name}  </div>
                        )}
                     </div> 
                     <div className="favorite-icon">
                        <img src={favorite_icon} alt="" />
                     </div>
                  </div>
               ))}
            </div>
            
         </div>
      </Container>
      
    );
}

 