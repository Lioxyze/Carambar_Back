import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('CaramBar API Lioxyze')
    .setDescription(
      'LAPI CaramBar Fou te permet de récupérer des blagues Carambar en un clin dœil ! Super rapide et facile à intégrer, elle te livre les meilleures blagues pour ajouter une touche dhumour à tes projets.',
    )
    .setVersion('1.0')
    .addTag('Blagues')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
