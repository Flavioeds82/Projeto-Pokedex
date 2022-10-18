import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";

export function Menu(){
   const [pokeName, setPokeName] = useState<string>("Pokedex")

   return(
      <Box sx={{ flexGrow: 2 }}>
         <AppBar position="static">
            <Toolbar>
               <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
               <MenuIcon />  
               </IconButton> 
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <h1>{pokeName}</h1>
               </Typography> 
            </Toolbar>
         </AppBar>        
      </Box>      
   )
}