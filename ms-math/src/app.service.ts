import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  calculateWordCount(str: string) {
    const words = str.trim().split(/\s+/);
    return words.reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), {});
  }
}
