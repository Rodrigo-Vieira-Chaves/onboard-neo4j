import { FriendshipUsersId } from './friendship';
import { bus } from '../../event-bus/init-bus';
import { CreateFriendshipCommand } from '../../event-bus/create-friendship-command';
import { RemoveFriendshipCommand } from '../../event-bus/remove-friendship-command';

export class FriendshipService {
  public async create(friendshipCreation: FriendshipUsersId): Promise<void> {
    await bus.send(new CreateFriendshipCommand(friendshipCreation));
  }

  public async remove(friendshipRemoval: FriendshipUsersId): Promise<void> {
    await bus.send(new RemoveFriendshipCommand(friendshipRemoval));
  }
}
