import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('math:wordcount')
  wordCount(text: string): { [key: string]: number } {
    return this.appService.calculateWordCount(text);
  }

  @EventPattern('math:wordcount_log')
  wordCountLog(text: string): void {
    console.log(text, '基于事件的传输方式');
  }
}
