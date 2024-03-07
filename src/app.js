import express from 'express';
import routes from './routes/index.js';
import connectDB from './config/dbConnect.js';

const connection = await connectDB();

connection.on('error', (err) => {
  console.error(`Erro de conexão com o bando: ${err}`);
});

connection.once('open', () => {
  console.log('Conexão com o banco bem sucedida!');
});

const app = express();
routes(app);

export default app;
