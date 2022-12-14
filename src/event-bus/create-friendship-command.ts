import { Command } from '@node-ts/bus-messages';
import { FriendshipUsersId } from '../routes/create-friendship/friendship';

export class CreateFriendshipCommand extends Command {
  $version = 1;
  $name = 'Create Friendship';

  constructor(public friendshipCreation: FriendshipUsersId) {
    super();
  }
}
