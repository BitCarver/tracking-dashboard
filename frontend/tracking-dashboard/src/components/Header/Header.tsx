import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton style={{color: "#b4cbd0"}}>
            <MenuIcon />
          </IconButton>
          <Button style={{color: "#b4cbd0"}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;