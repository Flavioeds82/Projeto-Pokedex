import { Container } from "./styled";
import { Favorite } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FavoriteContext } from '../../../contexts/FavoriteProvider';
import { Type } from '../../Helpers/interfaces';



export function Favoritos() {
   
   const {favorites, setFavorites} = useContext(FavoriteContext);
   const navigate = useNavigate();


   function handleBackClick(){
      navigate("/");
   }
   function handleClick(pokemon: string){
      navigate(`/pokemon/${pokemon}`);
   }

   return (
      <Container>
         <div className='container'>
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static">
                     <Toolbar>
                        <IconButton onClick={handleBackClick} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />  
                        </IconButton> 
                        <Typography variant="h6" component="div" sx={{ml: 8}}>
                           Favoritos
            
                        </Typography> 
                     </Toolbar>
                  </AppBar>        
            </Box>
            <div className="poke-grid">
                  {favorites?.map((pokemon, key) => (
                     <div key={key} className="poke-grid-item">
                        <img id="poke-img" src={pokemon.sprites.other?.dream_world.front_default} onClick={()=> handleClick(pokemon.name)} alt="pokemon"/>
                        <h5>{pokemon.name}</h5>
                        <div className="poke-types-container">
                           {pokemon.types.map((type:Type, key: number)=>
                              <div className="poke-types" key={key}>  {type.type.name}  </div>
                           )}
                        </div> 
                     
                     </div>
                  ))}
            </div> 
         </div>
      </Container>
   );
};
