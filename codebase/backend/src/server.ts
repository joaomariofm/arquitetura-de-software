import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: 'json' };

import { router } from './router.js';
import { apiErrorHandler } from './errors/errorHandler.js';

const PORT = process.env.API_PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(apiErrorHandler);

app.listen(PORT, () => console.log(`Server Listening on PORT ${PORT}`));
