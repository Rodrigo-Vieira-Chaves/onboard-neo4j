import { Command } from '@node-ts/bus-messages';
import { UserCreation } from '../routes/user/user';

export class CreateUserCommand extends Command {
  $version = 1;
  $name = 'Create User';

  $userName: string;
  $userEmail: string;

  constructor(userCreation: UserCreation) {
    super();

    this.$userName = userCreation?.name;
    this.$userEmail = userCreation?.email;
  }
}
