import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('MATH_SERVICE') private client: ClientProxy
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/math/wordcount')
  wordCount(
    @Body() { text }: { text: string },
  ): Observable<{ [key: string]: number }> {
    this.client.emit('math:wordcount_log', text)
    return this.client.send('math:wordcount', text);
  }
}
