import { Bus, BusInstance } from '@node-ts/bus-core';
import { helloWorldHandler } from './hello-world-handler';

export let bus: BusInstance;

export async function eventBusStart() {
  bus = await Bus.configure().withHandler(helloWorldHandler).initialize();

  // Start listening for messages and dispatch them to handlers when read
  await bus.start();
}
