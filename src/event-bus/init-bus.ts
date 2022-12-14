import { Bus, BusInstance } from '@node-ts/bus-core';
import { helloWorldHandler } from './hello-world-handler';
import { createUserHandler } from './create-user-handler';
import { createFriendshipHandler } from './create-friendship-handler';
import { removeFriendshipHandler } from './remove-friendship-handler';

export let bus: BusInstance;

export async function eventBusStart() {
  const config = Bus.configure();
  config.withHandler(helloWorldHandler);
  config.withHandler(createUserHandler);
  config.withHandler(createFriendshipHandler);
  config.withHandler(removeFriendshipHandler);

  bus = await config.initialize();
  await bus.start();
}
