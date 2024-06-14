// server.js
				// const express = require('express');
				// const cors = require('cors');
				// const bodyParser = require('body-parser');
				// const scheduleRoutes = require('./routes/schedules');
				// const dotenv = require('dotenv');

				// dotenv.config();

				// const app = express();
				// const port = process.env.PORT || 3001;

				// app.use(cors());
				// app.use(bodyParser.json());
				// app.use('/api', scheduleRoutes);

				// app.listen(port, () => {
				//   console.log(`Servidor rodando na porta ${port}`);
				// });
				const express = require('express');
				const cors = require('cors');
				const bodyParser = require('body-parser');
				const scheduleRoutes = require('./routes/schedules');
				const dotenv = require('dotenv');

				dotenv.config(); // Carrega as variáveis do arquivo .env
				console.log('Variáveis de ambiente:', process.env); // Adicionando log das variáveis de ambiente

				const app = express();
				const port = process.env.PORT || 3001;

				app.use(cors());
				app.use(bodyParser.json());
				app.use('/api', scheduleRoutes);

				app.listen(port, () => {
				  console.log(`Servidor rodando na porta ${port}`);
				});
				