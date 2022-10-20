import React, {useContext, useEffect, useState } from 'react';
import { Container } from './styled';
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../Helpers/Api';
import { PokemonInfo } from '../../Helpers/interfaces';
import { Box, AppBar, Toolbar, IconButton, Typography, LinearProgress, Stack, styled } from "@mui/material";
import Badge, { BadgeProps } from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { Favorite } from '@mui/icons-material';
import { FavoriteContext } from "../../../contexts/FavoriteProvider";
import favorite_icon from "../../../assets/images/favorite-icon.png";
import favorite_icon_red from "../../../assets/images/favorite-icon-red.png";
import { AnyStyledComponent } from 'styled-components';




interface indexProps {
   name: string | undefined;
}

export const Pokemon: React.FC<indexProps> = () => {

   const [pokemonDetails, setPokemonDetails] = useState<PokemonInfo|undefined>(undefined);
   const [loading, setLoading] = useState<boolean>(true);
   const {name} = useParams();
   const pd = pokemonDetails;
   const navigate = useNavigate();
   const {favorites, setFavorites} = useContext(FavoriteContext);
   const favoritesCount = favorites.length;

   const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
      '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }));

   function handleClick(){
      navigate("/");
   }
   function handleFavoritePage(){
      navigate("/favoritos");
   }
   function handleAddFavorite(pokemon:any){
      setFavorites([...favorites, pokemon]);
   }
   function handleRemoveFavorite(pokemon:any){
      setFavorites(favorites.filter((poke) => poke.name != pokemon.name));
   }
   function isFavorite(name: string| undefined){
      const result = favorites.some((poke)=> poke.name === name)
      if(result){
         return true
      }else{
         return false;
      }
   }


   useEffect(() => {
      try {
         if(name){
            getPokemon(name).then((res)=> setPokemonDetails(res));
         }
         setTimeout(() => {
            setLoading(false)
         }, 2000);
      } catch (e) {
         console.log(e);
      }
   }, []);

   return (
      <Container>
         <div className="header">
            <Box sx={{ flexGrow: 2 }}>
               <AppBar position="static">
                  <Toolbar>
                     <IconButton onClick={handleClick} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                     <MenuIcon />  
                     </IconButton> 
                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <h1>{name}</h1>
                     </Typography>
                     <IconButton
                           size="large"
                           edge="start"
                           color="inherit"
                           aria-label="favorites"
                           sx={{ mr: 2 }}
                           onClick={handleFavoritePage}
                        >
                           <StyledBadge badgeContent={favoritesCount} color="primary">
                              <Favorite />
                           </StyledBadge>
                        </IconButton> 
                  </Toolbar>
               </AppBar>        
            </Box> 
         </div>
         <div className="container">
            {loading &&
               <div className="loading"></div>
               
            }
            {!loading &&
               <div className="poke-picture"><img src={pd?.sprites.other?.dream_world.front_default} alt="pikachu" width="100px"/></div>
            }
            
            <div className="poke-content">
               <div className="poke-info"><h1>{name}</h1></div>
            </div>
            <div className="poke-content">
               <div className="poke-label"> Espécie: </div>
               <div className="poke-info">{pd?.species.name}</div>
            </div>
            <div className="poke-content">
               <div className="poke-label"> Altura: </div>
               <div className="poke-info">{pd?.height}</div>
            </div>
            <div className="poke-content">
               <div className="poke-label"> Peso: </div>
               <div className="poke-info">{pd?.weight}</div>
            </div>
            <div className="poke-content">
               <div className="poke-label"> Habilidades: </div>
               <div className="poke-info">{pd?.abilities.map((ability)=> ability.ability.name)}</div>
            </div>
            <div className="container-favorite-icon" onClick={()=> 
               isFavorite(name) ? handleRemoveFavorite(pd) : handleAddFavorite(pd)
            }>                
               {isFavorite(name) &&
               <img className="favorites-icon" src={favorite_icon_red} alt="favorite icon" />
               }
               {!isFavorite(name) &&
               <img className="favorites-icon" src={favorite_icon} alt="favorite icon" />
               }
            </div>
            
         </div>
      </Container>
   );
};


{/* <h3>{JSON.stringify(pokemonDetails?.sprites.front_default, undefined, 2)}</h3> */}


