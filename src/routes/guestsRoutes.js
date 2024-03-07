import { Router } from 'express';

const routes = Router();

routes.get('/guests', () => console.log('GET'));
// routes.post();
// routes.put();
// routes.delete();

export default routes;
