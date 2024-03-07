import { Router } from 'express';
import guestController from '../controllers/guestController.js';

const routes = Router();

routes.get('/guests', guestController.getAll);
routes.post('/guests', guestController.addGuest);
// routes.put();
// routes.delete();

export default routes;
