import { Body, Controller, Get, Post, Route } from 'tsoa';
import { HelloWorldService } from './hello-world-service';

@Route('helloworld')
export class HelloWorldController extends Controller {
  @Get()
  public async getHelloWorld(): Promise<string> {
    return await new HelloWorldService().get();
  }

  @Post()
  public async showAction(@Body() body): Promise<void> {
    console.log(body);
  }
}
