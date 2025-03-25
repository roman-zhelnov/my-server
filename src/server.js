import express from 'express';
import { notFoundHandler } from './middleware/notFoundHandler.js';

const app = express();

app.use(notFoundHandler);

export const setupServer = () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
