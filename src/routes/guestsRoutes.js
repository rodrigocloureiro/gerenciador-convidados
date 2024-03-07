import { Router } from 'express';
import guestController from '../controllers/guestController.js';

const routes = Router();

routes.get('/guests', guestController.getAll);
routes.get('/guests/vips', guestController.getVips);
routes.post('/guests', guestController.addGuest);
routes.put('/guests/:id', guestController.updateGuest);
routes.delete('/guests/:id', guestController.removeGuest);

export default routes;
