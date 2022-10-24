import * as dotenv from 'dotenv';
dotenv.config({ path: `${process.cwd()}/.env.test` });

import { expect } from 'chai';
import { session } from '../src/repository/neo4j';
import { CreateUserCommand } from '../src/event-bus/create-user-command';
import { handlerForCreateUser } from '../src/event-bus/create-user-handler';

after(async () => {
  await session.close();
});

describe('User Creation Handler Test', () => {
  afterEach(async () => {
    await session.run('MATCH (n) DETACH DELETE n');
  });

  it('Should user created in database contains same properties from body parameters and label from create script', async () => {
    const label = 'USER';
    const name = 'TestUser';
    const email = 'test@email.com';

    await handlerForCreateUser(new CreateUserCommand({ name, email }));

    const queryResult = await session.run(`MATCH (user:${label}) RETURN user`);
    const userInDatabase = queryResult.records[0].toObject();

    expect(userInDatabase.user.labels[0]).to.be.eq(label);
    expect(userInDatabase.user.properties).to.be.deep.eq({ name, email });
  });
});
