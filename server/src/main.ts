import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: ['log', 'debug', 'error', 'verbose', 'warn'],
  });
  app.useLogger(app.get(Logger));
  console.log(process.env.CACHE_URL);
  await app.listen(3000);
}
bootstrap();
