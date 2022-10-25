import { FriendshipCreation } from './friendship';
import { bus } from '../../event-bus/init-bus';
import { CreateFriendshipCommand } from '../../event-bus/create-friendship-command';

export class FriendshipService {
  public async create(friendshipCreation: FriendshipCreation): Promise<void> {
    await bus.send(new CreateFriendshipCommand(friendshipCreation));
  }
}
