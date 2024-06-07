// src/components/Header.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Header = () => (
  <AppBar position="static" style={{ height: 100 }}>
    <Toolbar style={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, fontSize: '2rem' }}>
        MFS LAVACAR
      </Typography>
      <div>
        <Button color="inherit" component={Link} to="/cadastrar" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, fontSize: '1rem' }}>Agende seu Horário</Button>
        <Button color="inherit" component={Link} to="/consultar-horario" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, fontSize: '1rem' }}>Consultar Horário</Button>
        <Button color="inherit" component={Link} to="/contate-nos" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, fontSize: '1rem' }}>Contate-nos</Button>
        <Button color="inherit" component={Link} to="/sobre" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, fontSize: '1rem' }}>Sobre</Button>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
