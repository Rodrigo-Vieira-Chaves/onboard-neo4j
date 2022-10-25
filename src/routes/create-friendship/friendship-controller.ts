import { Body, Controller, Post, Route } from 'tsoa';
import { FriendshipCreation } from './friendship';
import { FriendshipService } from './friendship-service';

@Route('friendship')
export class FriendshipController extends Controller {
  @Post()
  public async createFriendship(@Body() friendshipCreation: FriendshipCreation) {
    await new FriendshipService().create(friendshipCreation);
  }
}
