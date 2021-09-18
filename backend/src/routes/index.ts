import { Router } from 'express';

const routes = Router();

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };
  return response.json(user);
});

routes.get('/', (request, response) => {

    return response.send("Hello world");
  });
export default routes;
