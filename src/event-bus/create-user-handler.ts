import { handlerFor } from '@node-ts/bus-core';
import { session } from '../repository/neo4j';
import { CreateUserCommand } from './create-user-command';

export const createUserHandler = handlerFor(CreateUserCommand, async (command) => {
  await session.run('CREATE (:USER {name: $nameParam, email: $emailParam})', {
    nameParam: command.$userName,
    emailParam: command.$userEmail,
  });
});
