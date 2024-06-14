// src/components/ContateNos.js
// src/components/ContateNos.js


// src/components/ContateNos.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const ContateNos = () => (
  <Box sx={{ maxWidth: 480, mx: 'auto', my: 4 }}>
    <Typography variant="h4" gutterBottom align="center">
      Entre em Contato com a MFS Lavacar
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Estamos sempre prontos para transformar seu veículo. Se você tem perguntas, sugestões ou apenas quer dizer um "olá", estamos aqui para ouvir! Entre em contato conosco através dos seguintes meios:
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      - **Telefone**: (XX) XXXX-XXXX
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      - **Email**: contato@mfs-lavacar.com.br
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      - **Endereço**: Rua das Lavagens, 123, Florianópolis, SC
    </Typography>
    <Typography variant="body1">
      Ou se preferir, deixe sua mensagem no formulário abaixo e nossa equipe entrará em contato com a rapidez de um pit stop! 🏁
    </Typography>
  </Box>
);

export default ContateNos;



// OQ ESTÁ COMENTADO ABAIXO TEM FORMULARIO SE DER TEMPO EU TENTO CONECTAR NO BANCO :)

// import React from 'react';
// import { Box, Typography, TextField, Button } from '@mui/material';

// const ContateNos = () => (
//   <Box sx={{ maxWidth: 480, mx: 'auto', my: 4 }}>
//     <Typography variant="h4" gutterBottom align="center">
//       Entre em Contato com a MFS Lavacar
//     </Typography>
//     <Typography variant="body1" sx={{ mb: 2 }}>
//       Estamos sempre prontos para transformar seu veículo. Se você tem perguntas, sugestões ou apenas quer dizer um "olá", estamos aqui para ouvir!
//     </Typography>
//     <Box component="form" sx={{ '& > :not(style)': { m: 1 } }}>
//       <TextField fullWidth label="Nome" variant="outlined" />
//       <TextField fullWidth label="Email" variant="outlined" />
//       <TextField fullWidth label="Mensagem" variant="outlined" multiline rows={4} />
//       <Button variant="contained" color="primary" fullWidth>
//         Enviar Mensagem
//       </Button>
//     </Box>
//   </Box>
// );

// export default ContateNos;

