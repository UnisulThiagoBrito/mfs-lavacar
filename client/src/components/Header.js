// src/components/Header.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Header = () => (
  <AppBar position="static" style={{ padding: '10px 0' }}>
    <Toolbar className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h4" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        MFS LAVAÇÃO AUTOMOTIVA
      </Typography>
      <div>
        <Button color="inherit" component={Link} to="/cadastrar" style={{ marginRight: '10px' }}>Agende seu Horário</Button>
        <Button color="inherit" component={Link} to="/consultar-horario" style={{ marginRight: '10px' }}>Consultar Horário</Button>
        <Button color="inherit" component={Link} to="/contate-nos" style={{ marginRight: '10px' }}>Contate-nos</Button>
        <Button color="inherit" component={Link} to="/sobre">Sobre</Button>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;


// // src/components/Header.js

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';

// const Header = () => (
//   <AppBar position="static" style={{ height: 100 }}>
//     <Toolbar style={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//       <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, fontSize: '2rem' }}>
//         MFS LAVACAR
//       </Typography>
//       
//     </Toolbar>
//   </AppBar>
// );

// export default Header;
