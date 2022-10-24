import { HelloWorldCommand } from '../event-bus/hello-world-command';
import { bus } from '../event-bus/init-bus';
import { session } from '../repository/neo4j';

export class HelloWorldService {
  public async get(): Promise<string> {
    bus.send(new HelloWorldCommand());

    const result = await session.run('MATCH (x:PLAYER) WHERE ID(x) = 1 set x.name = "Anthony Davis" return x');

    return JSON.stringify(result.records);
  }
}
