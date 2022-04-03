import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../img/humber_logo.png';
import MainContext from "../contexts/main.context";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Badge} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const { user, shoppingCart, updateUser } = React.useContext(MainContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} className="logo" alt="logo" style={{marginRight: 20}}/>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
          Hello, {user ? <span>{user.firstName} {user.lastName}</span> : 'Guest'}
        </Box>
        {user && (
          <>
            <LogoutIcon style={{cursor: 'pointer'}} onClick={() => updateUser(null)}/>
            <Badge badgeContent={shoppingCart.length || 0} color="secondary" showZero>
              <ShoppingCartIcon />
            </Badge>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
