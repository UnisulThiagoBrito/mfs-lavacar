// src/components/Home.js

import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
// import LogoImage from '/LogoMfs.png'; // Substitua pelo caminho correto do logo

// Dados dos serviços oferecidos com descrições detalhadas
const services = [
  {
    title: 'Lavagem Completa',
    image: '/carro-sujo-limpo.jpg',
    description: 'Serviço completo que inclui lavagem externa manual, limpeza detalhada de janelas, polimento minucioso das rodas, aspiração interna, limpeza de painel e aplicação de ambientador para deixar seu carro com aroma agradável.'
    // Adicione mais detalhes conforme necessário
  },
  {
    title: 'Polimento',
    image: '/polimento-antes-depois.jpg',
    description: 'Polimento profissional com produtos de alta performance para eliminar arranhões e manchas, restaurando o brilho e protegendo a pintura do seu carro.'
    // Adicione mais detalhes conforme necessário
  },
  {
    title: 'Higienização Interna',
    image: '/interno-antes-depois.jpg',
    description: 'Higienizaçãod completa do interior do veículo, removendo manchas, odores e bactérias, proporcionando um ambiente interno saudável e acolhedor.'
    // Adicione mais detalhes conforme necessário
  },
];

// Componente Home com espaço para logo e conteúdo detalhado
const Home = () => (
  <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>

      <img src='LogoMfs.png' alt="Logo da Empresa" style={{ maxWidth: '50%', height: 'auto' }} />
    </Box>
    <Typography variant="h2" align="center" gutterBottom>
      Conheça nossos serviços!
    </Typography>
    <Grid container spacing={4}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
                width: '100%',
                p: 2
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: 10 }}
              />
            </Box>
            <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
              <Typography variant="h5" component="div">
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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

// // src/components/Home.js

// import React from 'react';
// import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

// const services = [
//   {
//     title: 'Lavagem Completa',
//     image: '/carro-sujo-limpo.jpg',
//     description: 'Lavagem completa do carro, por dentro e por fora.'
//   },
//   {
//     title: 'Polimento',
//     image: '/polimento-antes-depois.jpg',
//     description: 'Polimento para deixar seu carro brilhando como novo.'
//   },
//   {
//     title: 'Higienização Interna',
//     image: '/interno-antes-depois.jpg',
//     description: 'Higienização completa do interior do carro.'
//   },
// ];

// const Home = () => (
//   <Container>
//     <Typography variant="h2" align="center" gutterBottom style={{ marginTop: 70, marginBottom: 70 }}>
//       Nossos serviços!
//     </Typography>
//     <Grid container spacing={4}>
//       {services.map((service, index) => (
//         <Grid item xs={12} md={4} key={index}>
//           <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//             <Box display="flex" justifyContent="center" alignItems="center" style={{ height: 200 }}>
//               <img src={service.image} alt={service.title} style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: 10 }} />
//             </Box>
//             <CardContent style={{ flexGrow: 1 }}>
//               <Typography variant="h5" align="center" gutterBottom>
//                 {service.title}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" align="center">
//                 {service.description}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   </Container>
// );

// export default Home;
