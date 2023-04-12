import { app } from './routes/index.js';
import { connectTodB } from './services/db/connection.js';
import dotenv from 'dotenv'
dotenv.config()

const createServer = () => {
  connectTodB()
  const PORT = process.env.PORT || 3000;
  app.listen(PORT);
  console.log(`Ecoute le port ${PORT}`);
}

createServer()