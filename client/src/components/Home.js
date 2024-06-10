// src/components/Home.js

import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

const services = [
  {
    title: 'Lavagem Completa',
    image: '/carro-sujo-limpo.jpg',
    description: 'Lavagem completa do carro, por dentro e por fora.'
  },
  {
    title: 'Polimento',
    image: '/polimento-antes-depois.jpg',
    description: 'Polimento para deixar seu carro brilhando como novo.'
  },
  {
    title: 'Higienização Interna',
    image: '/interno-antes-depois.jpg',
    description: 'Higienização completa do interior do carro.'
  },
];

const Home = () => (
  <Container>
    <Typography variant="h2" align="center" gutterBottom style={{ marginTop: 70, marginBottom: 70 }}>
      Nossos serviços!
    </Typography>
    <Grid container spacing={4}>
      {services.map((service, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box display="flex" justifyContent="center" alignItems="center" style={{ height: 200 }}>
              <img src={service.image} alt={service.title} style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: 10 }} />
            </Box>
            <CardContent style={{ flexGrow: 1 }}>
              <Typography variant="h5" align="center" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Home;
