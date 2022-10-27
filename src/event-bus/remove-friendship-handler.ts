import { session } from '../repository/neo4j';
import { handlerFor } from '@node-ts/bus-core';
import { RemoveFriendshipCommand } from './remove-friendship-command';

export async function handlerForRemoveFriendship(command: RemoveFriendshipCommand) {
  await session.run(
    `MATCH (user1:USER)-[relation:FRIENDS_TO]-(user2:USER)
     WHERE ID(user1) = $userId1 AND ID(user2) = $userId2
     DELETE relation`,
    { userId1: command.friendshipRemoval.userId1, userId2: command.friendshipRemoval.userId2 },
  );
}

export const removeFriendshipHandler = handlerFor(RemoveFriendshipCommand, handlerForRemoveFriendship);
