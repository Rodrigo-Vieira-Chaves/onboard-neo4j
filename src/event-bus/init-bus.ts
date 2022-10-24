import { Bus, BusInstance } from '@node-ts/bus-core';
import { createUserHandler } from './create-user-handler';
import { helloWorldHandler } from './hello-world-handler';

export let bus: BusInstance;

export async function eventBusStart() {
  const config = Bus.configure();
  config.withHandler(helloWorldHandler);
  config.withHandler(createUserHandler);

  bus = await config.initialize();
  await bus.start();
}
