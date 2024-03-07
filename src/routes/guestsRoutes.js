import { Router } from 'express';
import GuestController from '../controllers/guestController.js';

const routes = Router();

routes.get('/guests', () => console.log('GET'));
routes.post('/guests', GuestController.addGuest);
// routes.put();
// routes.delete();

export default routes;
