import { expect } from 'chai';
import { session } from '../src/repository/neo4j';
import { handlerForCreateFriendship } from '../src/event-bus/create-friendship-handler';
import { CreateFriendshipCommand } from '../src/event-bus/create-friendship-command';
import { handlerForRemoveFriendship } from '../src/event-bus/remove-friendship-handler';
import { RemoveFriendshipCommand } from '../src/event-bus/remove-friendship-command';

describe('Friendship Handler Test', () => {
  let userId1: number;
  let userId2: number;

  beforeEach(async () => {
    const createUser1Result = await session.run(
      'CREATE (user:USER {name: $nameParam, email: $emailParam}) RETURN ID(user) as id',
      {
        nameParam: 'TestUser1',
        emailParam: 'test1@email.com',
      },
    );

    const createUser2Result = await session.run(
      'CREATE (user:USER {name: $nameParam, email: $emailParam}) RETURN ID(user) as id',
      {
        nameParam: 'TestUser2',
        emailParam: 'test2@email.com',
      },
    );

    userId1 = createUser1Result.records[0].toObject().id.low;
    userId2 = createUser2Result.records[0].toObject().id.low;
  });

  afterEach(async () => {
    await session.run('MATCH (n) DETACH DELETE n');
  });

  it('Should friendship relation be created from user 1 to 2 and from user 2 to 1.', async () => {
    await handlerForCreateFriendship(new CreateFriendshipCommand({ userId1, userId2 }));

    const queryResult = await session.run(
      `MATCH (user1:USER)-[relation:FRIENDS_TO]-(user2:USER)
       WHERE ID(user1) = $userId1 AND ID(user2) = $userId2
       RETURN relation`,
      { userId1, userId2 },
    );

    const relationsInDatabase = queryResult.records[0].toObject();

    expect(Number(relationsInDatabase.relation.startNodeElementId)).to.be.eq(userId1);
    expect(Number(relationsInDatabase.relation.endNodeElementId)).to.be.eq(userId2);
  });

  it('Should friendship relation be removed from user 1 to 2 and from user 2 to 1.', async () => {
    await session.run(
      `MATCH (user1:USER ), (user2:USER) 
       WHERE ID(user1) = $userId1 AND ID(user2) = $userId2
       CREATE (user1) -[relation1:FRIENDS_TO]-> (user2)`,
      { userId1, userId2 },
    );

    await handlerForRemoveFriendship(new RemoveFriendshipCommand({ userId1, userId2 }));

    const queryResult = await session.run(
      `MATCH (user1:USER)-[relation:FRIENDS_TO]-(user2:USER) 
       RETURN relation`,
    );

    const relationsInDatabase = queryResult.records;

    expect(relationsInDatabase.length).to.be.eq(0);
  });
});
