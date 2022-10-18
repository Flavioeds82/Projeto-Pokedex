import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export function Menu(){
   return(
      <Box sx={{ flexGrow: 2 }}>
         <AppBar position="static">
            <Toolbar>
               <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
               <MenuIcon />  
               </IconButton> 
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Pokedex
               </Typography> 
            </Toolbar>
         </AppBar>        
      </Box>      
   )
}