import { Body, Controller, Delete, Post, Route } from 'tsoa';
import { FriendshipUsersId } from './friendship';
import { FriendshipService } from './friendship-service';

@Route('friendship')
export class FriendshipController extends Controller {
  @Post()
  public async createFriendship(@Body() friendshipCreation: FriendshipUsersId) {
    await new FriendshipService().create(friendshipCreation);
  }

  @Delete()
  public async removeFriendship(@Body() friendshipRemoval: FriendshipUsersId) {
    await new FriendshipService().remove(friendshipRemoval);
  }
}
