import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use built-in CORS configuration in NestJS
  app.enableCors({
    origin: 'http://localhost:3001', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these methods
    allowedHeaders: 'Content-Type, Authorization', // Allow these headers
  });

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Start the application
  await app.listen(3000);
}

bootstrap();
