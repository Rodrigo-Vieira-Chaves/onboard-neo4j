import { session } from '../repository/neo4j';

export class HelloWorldService {
  public async get(): Promise<string> {
    const result = await session.run('MATCH (x:PLAYER) WHERE ID(x) = 1 set x.name = "Anthony Davis" return x');

    return JSON.stringify(result.records);
  }
}
