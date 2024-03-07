import guestsRoutes from './guestsRoutes.js';
import eventsRoutes from './eventsRoutes.js';
import { json } from 'express';

const routes = (app) => {
  app.get('/', (req, res) => res.status(200).send('Gerenciador de convidados'));
  app.use(json(), guestsRoutes, eventsRoutes);
};

export default routes;
