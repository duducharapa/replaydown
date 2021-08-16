import express, { Application } from 'express';
import routes from './routes';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT) || 3000;

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});