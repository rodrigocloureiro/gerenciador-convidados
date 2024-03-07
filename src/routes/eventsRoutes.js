import EventController from '../controllers/eventController.js';
import { Router } from 'express';

const routes = Router();

routes.get('/events', EventController.getAll);
routes.post('/events', EventController.addEvent);

export default routes;

