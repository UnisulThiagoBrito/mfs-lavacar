// src/components/Footer.js

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => (
  <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0, width: '100%' }}>
    <Toolbar style={{ padding: '8px 16px' }}>
      <Typography variant="body1" color="inherit">
        MFS LAVACAR &copy; 2024 Lava Jato. Todos os direitos reservados.
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Footer;
