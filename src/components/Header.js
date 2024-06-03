// src/components/Header.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
        MFS LAVACAR
      </Typography>
      <Button color="inherit" component={Link} to="/cadastrar">Cadastrar</Button>
      <Button color="inherit" component={Link} to="/contate-nos">Contate-nos</Button>
      <Button color="inherit" component={Link} to="/sobre">Sobre</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
