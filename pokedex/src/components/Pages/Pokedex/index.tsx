import { Container } from "./styled";
import React,{useContext, useEffect, useState} from 'react';
import { getPokemons } from "../../Helpers/Api";
import { Pokemon, PokemonInfo, Pokemons, Type } from "../../Helpers/interfaces";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "react-query";
import { Box, AppBar, Toolbar, IconButton, Typography, LinearProgress, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Favorite } from "@mui/icons-material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import favorite_icon from "../../../assets/images/favorite-icon.png";
import favorite_icon_red from "../../../assets/images/favorite-icon-red.png";
import { FavoriteContext } from "../../../contexts/FavoriteProvider";



export function Pokedex() {

   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [selectPokemon, setSelectPokemon] = useState<Pokemon | undefined>(undefined);
   const [active, setActive] = useState<boolean>(false);
   const navigate = useNavigate();
   const {data} = useQuery('getPokemons', getPokemons);
   const {favorites, setFavorites} = useContext(FavoriteContext);

   function handleClick(pokemon: string){
      navigate(`/pokemon/${pokemon}`);
   }
   function handleFavoritePage(){
      navigate("/favoritos");
   }
   function handleAddFavorite(pokemon:PokemonInfo){
      setFavorites([...favorites, pokemon]);
   }
   function handleRemoveFavorite(pokemon:PokemonInfo){
      setFavorites(favorites.filter((poke) => poke.name != pokemon.name));
   }
   function isFavorite(pokemon:PokemonInfo){
      const result = favorites.some((poke)=> poke.name === pokemon.name)
      if(result){
         return true
      }else{
         return false;
      }
     
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
                     onClick={handleFavoritePage}
                  >
                     <Favorite />
                  </IconButton>
               </Toolbar>
            </AppBar>
             <pre>{JSON.stringify(favorites.map((elem)=>elem.name), undefined, 2)}</pre>
            <div className="poke-grid">
               { data?.results.map((pokemon, key) => (
                  <div key={key} className="poke-grid-item">
                     <img id="poke-img" src={pokemon.sprites.other?.dream_world.front_default} onClick={()=> handleClick(pokemon.name)} alt="pokemon"/>
                     <h5>{pokemon.name}</h5>
                     <div className="poke-types-container">
                        {pokemon.types.map((type:Type, key: number)=>
                           <div className="poke-types" key={key}>  {type.type.name}  </div>
                        )}
                     </div> 
                     <div className="favorite-icon"  onClick={()=> isFavorite(pokemon) ? handleRemoveFavorite(pokemon) : handleAddFavorite(pokemon) }>
                        {isFavorite(pokemon) &&
                           <img src={favorite_icon_red} alt="favorite icon" />
                        }
                        {!isFavorite(pokemon) &&
                           <img src={favorite_icon} alt="favorite icon" />
                        }
                     </div>
                  </div>
               ))}
            </div>
            
         </div>
      </Container>
      
    );
}

 