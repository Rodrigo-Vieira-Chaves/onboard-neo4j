import { Body, Controller, Post, Route, SuccessResponse } from 'tsoa';
import { UserCreation } from './user';
import { UserService } from './user-service';

@Route('user')
export class UserController extends Controller {
  @SuccessResponse('201', 'Created')
  @Post()
  public async createUser(@Body() userCreation: UserCreation) {
    this.setStatus(201);
    await new UserService().create(userCreation);

    return;
  }
}
