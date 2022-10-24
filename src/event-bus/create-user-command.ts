import { Command } from '@node-ts/bus-messages';
import { UserCreation } from '../routes/user/user';

export class CreateUserCommand extends Command {
  $version = 1;
  $name = 'Create User';

  constructor(public userCreation: UserCreation) {
    super();
  }
}
