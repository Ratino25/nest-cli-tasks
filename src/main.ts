import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
// import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
