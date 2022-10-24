import { handlerFor } from '@node-ts/bus-core';
import { session } from '../repository/neo4j';
import { CreateUserCommand } from './create-user-command';

export async function handlerForCreateUser(command: CreateUserCommand) {
  await session.run('CREATE (:USER {name: $nameParam, email: $emailParam})', {
    nameParam: command.userCreation.name,
    emailParam: command.userCreation.email,
  });
}

export const createUserHandler = handlerFor(CreateUserCommand, handlerForCreateUser);
