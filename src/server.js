import express from 'express';
import cors from 'cors';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import pino from 'pino';
import pinoHttp from 'pino-http';
import { errorHandler } from './middleware/errorHandler.js';
import contactsRouter from './routers/contactRout.js';

const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
});

const app = express();

app.use(pinoHttp({ logger }));
app.use(cors());

app.use(contactsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export const setupServer = () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
