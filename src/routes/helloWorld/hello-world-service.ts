import { HelloWorldCommand } from '../../event-bus/hello-world-command';
import { bus } from '../../event-bus/init-bus';

export class HelloWorldService {
  public async get(): Promise<string> {
    bus.send(new HelloWorldCommand());

    return '';
  }
}
