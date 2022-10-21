import express, { json, urlencoded } from 'express';
import { RegisterRoutes } from './router/routes';

const server = express();

server.use(urlencoded({ extended: true }));
server.use(json());

RegisterRoutes(server);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`OnBoard Neo4J server listening at http://localhost:${port}`);
});
