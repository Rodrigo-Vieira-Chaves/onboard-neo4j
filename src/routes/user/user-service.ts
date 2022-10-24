import { UserCreation } from './user';
import { bus } from '../../event-bus/init-bus';
import { CreateUserCommand } from '../../event-bus/create-user-command';

export class UserService {
  public async create(userCreation: UserCreation): Promise<void> {
    await bus.send(new CreateUserCommand(userCreation));
  }
}
