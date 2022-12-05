import fetch from 'node-fetch';
import { Body, Controller, Get, Post, Route } from 'tsoa';
import { HelloWorldService } from './hello-world-service';

@Route('helloworld')
export class HelloWorldController extends Controller {
  @Get()
  public async getHelloWorld() {
    return await new HelloWorldService().get();
  }

  @Post()
  public async showAction(@Body() body) {
    const personalAccessToken = 'tkwkaga48t86unns3py3pfts4h';
    const authHeader = `Bearer ${personalAccessToken}`;
    const baseURL = 'http://localhost:8065/api/v4';

    console.log(body);

    // const response2 = await fetch(`${baseURL}/posts`, {
    //   method: 'post',
    //   headers: { Authorization: authHeader },
    //   body: JSON.stringify({

    //   }),
    // });
  }
}
