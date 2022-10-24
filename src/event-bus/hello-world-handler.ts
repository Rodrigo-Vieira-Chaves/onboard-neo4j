import { handlerFor } from '@node-ts/bus-core';
import { HelloWorldCommand } from './hello-world-command';

export const helloWorldHandler = handlerFor(HelloWorldCommand, (command) =>
  console.log(`Hello World from event bus: ${JSON.stringify(command)}`),
);
