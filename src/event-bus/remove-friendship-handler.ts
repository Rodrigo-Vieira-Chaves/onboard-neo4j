import { session } from '../repository/neo4j';
import { handlerFor } from '@node-ts/bus-core';
import { RemoveFriendshipCommand } from './remove-friendship-command';

export async function handlerForRemoveFriendship(command: RemoveFriendshipCommand) {
  await session.run(
    `MATCH (user1:USER)-[relation1:FRIENDS_TO]->(user2:USER), (user2:USER)-[relation2:FRIENDS_TO]->(user1:USER)
     WHERE ID(user1) = $userId1 AND ID(user2) = $userId2
     DELETE relation1, relation2`,
    { userId1: command.friendshipRemoval.userId1, userId2: command.friendshipRemoval.userId2 },
  );
}

export const removeFriendshipHandler = handlerFor(RemoveFriendshipCommand, handlerForRemoveFriendship);
