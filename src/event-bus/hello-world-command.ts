import { Command } from '@node-ts/bus-messages';

export class HelloWorldCommand extends Command {
  $name = 'Hello World';
  $version = 1;

  constructor() {
    super();
  }
}
