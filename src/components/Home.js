// src/components/Home.js
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" gutterBottom>
        Nosso trabalho!
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h4" align="center">Lavagem Completa</Typography>
              <Box sx={{ height: 16 }} />
              <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: 2 }}>
                <img src="/carro-sujo-limpo.jpg" alt="Imagem 1" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />
              </Box>
              <Typography variant="body1" align="center">
                Garantimos a limpeza detalhada de todas as partes do seu veículo, 
                proporcionando um brilho e frescor inigualáveis.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h4" align="center">Higienização Interna</Typography>
              <Box sx={{ height: 16 }} />
              <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: 2 }}>
                <img src="/interno-antes-depois.jpg" alt="Imagem 2" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />
              </Box>
              <Typography variant="body1" align="center">
                Limpeza minuciosa do interior do seu veículo, removendo todas as 
                sujeiras e odores para um ambiente agradável e higiênico.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h4" align="center">Polimento</Typography>
              <Box sx={{ height: 16 }} />
              <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginBottom: 2 }}>
                <img src="/polimento-antes-depois.jpg" alt="Imagem 3" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />
              </Box>
              <Typography variant="body1" align="center">
                Polimento de alta qualidade para restaurar o brilho e proteger a 
                pintura do seu carro contra elementos externos.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
