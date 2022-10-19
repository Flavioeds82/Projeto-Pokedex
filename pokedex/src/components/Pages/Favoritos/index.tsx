import { Favorite } from '@mui/icons-material';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useNavigate } from 'react-router-dom';


interface indexProps {
   
}

export function Favoritos() {

   const navigate = useNavigate();


   function handleClick(){
      navigate("/");
   }

   return (
      <div className='container'>
         <Box sx={{ flexGrow: 1 }}>
               <AppBar position="static">
                  <Toolbar>
                     <IconButton onClick={handleClick} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                     <MenuIcon />  
                     </IconButton> 
                     <Typography variant="h6" component="div" sx={{ml: 8}}>
                        Favoritos
                     </Typography> 
                  </Toolbar>
               </AppBar>        
            </Box> 
      </div>
   );
};
