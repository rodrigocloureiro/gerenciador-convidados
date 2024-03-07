import EventController from '../controllers/eventController.js';
import { Router } from 'express';

const routes = Router();

routes.post('/events', EventController.addEvent);

export default routes;

