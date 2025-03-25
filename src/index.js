import 'dotenv/config';
import { setupServer } from './server.js';

const bootstrap = () => {
  try {
    setupServer();
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
