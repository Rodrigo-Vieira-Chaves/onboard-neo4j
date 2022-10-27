import { session } from '../repository/neo4j';
import { handlerFor } from '@node-ts/bus-core';
import { CreateFriendshipCommand } from './create-friendship-command';

export async function handlerForCreateFriendship(command: CreateFriendshipCommand) {
  await session.run(
    `MATCH (user1:USER ), (user2:USER) 
     WHERE ID(user1) = $userId1 AND ID(user2) = $userId2
     CREATE (user1) -[relation1:FRIENDS_TO]-> (user2)`,
    { userId1: command.friendshipCreation.userId1, userId2: command.friendshipCreation.userId2 },
  );
}

export const createFriendshipHandler = handlerFor(CreateFriendshipCommand, handlerForCreateFriendship);
