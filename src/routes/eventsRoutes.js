import EventController from '../controllers/eventController.js';
import { Router } from 'express';

const routes = Router();

routes.get('/events/:id', EventController.getById);
routes.get('/events', EventController.getAll);
routes.post('/events', EventController.addEvent);

export default routes;

