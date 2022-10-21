import { Controller, Get, Route } from 'tsoa';
import { HelloWorldService } from './hello-world-service';

@Route('HelloWorld')
export class HelloWorldController extends Controller {
  @Get()
  public getHelloWorld(): string {
    return new HelloWorldService().get();
  }
}
