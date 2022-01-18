import React from 'react'
import {AppBar,Box,Toolbar,Typography,IconButton,Button } from '@mui/material';

export const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

        <Toolbar color="#b3e5fc">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trello clone
          </Typography>
           <Button color="primary">S'identifier</Button>
          <Button variant="creer compte">Créer un nouveau compte</Button>          
        </Toolbar>        
      </AppBar>
    </Box>
    )
}

export default Header;
