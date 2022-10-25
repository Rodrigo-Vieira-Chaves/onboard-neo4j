import { Command } from '@node-ts/bus-messages';
import { FriendshipUsersId } from '../routes/create-friendship/friendship';

export class RemoveFriendshipCommand extends Command {
  $version = 1;
  $name = 'Remove Friendship';

  constructor(public friendshipRemoval: FriendshipUsersId) {
    super();
  }
}
