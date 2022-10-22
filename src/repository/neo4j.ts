import neo4j from 'neo4j-driver';

const neo4jDriver = neo4j.driver(
  `neo4j://localhost:${process.env.NEO4J_PORT}/${process.env.NEO4J_DATABASE}`,
  neo4j.auth.basic(process.env.NEO4J_USER as string, process.env.NEO4J_PASSWORD as string),
);

export const session = neo4jDriver.session({
  database: process.env.NEO4J_DATABASE,
  defaultAccessMode: neo4j.session.WRITE,
});
