import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices'; // 注册一个用于对微服务进行数据传输的客户端

@Module({
  imports: [
    ClientsModule.register([
      { name: 'MATH_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
