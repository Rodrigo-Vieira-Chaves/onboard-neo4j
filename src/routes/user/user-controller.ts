import { Body, Controller, Post, Route } from 'tsoa';
import { UserCreation } from './user';
import { UserService } from './user-service';

@Route('user')
export class UserController extends Controller {
  @Post()
  public async createUser(@Body() userCreation: UserCreation) {
    await new UserService().create(userCreation);
  }
}
