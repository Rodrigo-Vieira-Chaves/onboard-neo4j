import { Body, Controller, Get, Post, Route } from 'tsoa';
import { FriendshipCreation } from './friendship';
import { FriendshipService } from './friendship-service';

@Route('friendship')
export class FriendshipController extends Controller {
  @Post()
  public async createFriendship(@Body() friendshipCreation: FriendshipCreation) {
    await new FriendshipService().create(friendshipCreation);
  }

  @Get()
  public async getFriendship() {
    new FriendshipService().get();
  }
}
