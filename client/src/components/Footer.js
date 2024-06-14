// src/components/Footer.js

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => (
  <AppBar position="static" color="primary" style={{ top: 'auto', bottom: '0px', width: '100%' }}>
    <Toolbar style={{ padding: '8px 16px', minHeight: '30px' }}>
      <Typography variant="body1" color="inherit">
        MFS LAVACAR &copy; 2024 Lava Jato. Todos os direitos reservados.
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Footer;
