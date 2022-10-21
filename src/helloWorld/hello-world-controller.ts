import { Controller, Get, Route } from 'tsoa';
import { HelloWorldService } from './hello-world-service';

@Route('helloworld')
export class HelloWorldController extends Controller {
  @Get()
  public getHelloWorld(): string {
    return new HelloWorldService().get();
  }
}
