import EventController from '../controllers/eventController.js';
import { Router } from 'express';

const routes = Router();

routes.delete('/events/:eventId/remove/:guestId', EventController.removeGuestEvent);
routes.get('/events/:id/vips', EventController.getVipGuests)
routes.get('/events/:id', EventController.getById);
routes.get('/events', EventController.getAll);
routes.post('/events', EventController.addEvent);
routes.post('/events/:id/invite', EventController.registerGuestForEvent);

export default routes;

