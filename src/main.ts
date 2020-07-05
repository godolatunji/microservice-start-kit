import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: config.port,
    },
  });
  // const app = await NestFactory.create(AppModule);
  await app.listen(() =>
    Logger.log(`microservice starter kit started on port ${config.port}`),
  );
}
bootstrap();
