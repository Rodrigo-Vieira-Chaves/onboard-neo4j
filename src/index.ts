import dotenv from 'dotenv';
dotenv.config({ path: `${process.cwd()}/.env` });

import { RegisterRoutes } from './router/routes';
import express, { json, urlencoded } from 'express';

const server = express();

server.use(json());
server.use(urlencoded({ extended: true }));

RegisterRoutes(server);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`OnBoard Neo4J server listening at http://localhost:${port}`);
});
