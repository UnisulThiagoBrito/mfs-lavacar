// src/components/Sobre.js
// src/components/Sobre.js
// src/components/Sobre.js
// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const sobre = () => (
//   <Box>
//     <Typography variant="h4" gutterBottom>Sobre</Typography>
//     <Typography variant="body1">
//       MFS LAVACAR é uma empresa dedicada a fornecer serviços de lavagem de carros de alta qualidade. Nossa missão é garantir que seu veículo esteja sempre limpo e bem cuidado.
//     </Typography>
//   </Box>
// );
// export default sobre;

import React from 'react';
import { Box, Typography } from '@mui/material';

const Sobre = () => (
  <Box sx={{  maxWidth: 480, mx: 'auto', my: 4}}>
    <Typography variant="h4" gutterBottom align="center">
      Conheça a MFS Lavacar
    </Typography>
    <Typography variant="body1" sx={{ textAlign: 'justify' }}>
      Na MFS Lavacar, nossa paixão é ver seu carro brilhar. Fundada em [ano de fundação], nossa missão é oferecer um serviço de lavagem e cuidados automotivos que não apenas limpa, mas revitaliza seu veículo. Comprometidos com o meio ambiente, utilizamos produtos biodegradáveis e técnicas que economizam água. Nossa equipe é formada por profissionais altamente qualificados e apaixonados por carros, garantindo um serviço de qualidade superior. Venha nos visitar e sinta a diferença!
    </Typography>
  </Box>
);

export default Sobre;

