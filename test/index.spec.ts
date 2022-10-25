import * as dotenv from 'dotenv';
dotenv.config({ path: `${process.cwd()}/.env.test` });

import { session } from '../src/repository/neo4j';

require('./user-handler-test.spec');
require('./create-friendship-handler-test.spec');

after(async () => {
  await session.close();
});
