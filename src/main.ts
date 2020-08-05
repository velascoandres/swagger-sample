import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const productOptions = new DocumentBuilder()
    .setTitle('Product')
    .setDescription('Products API')
    .setVersion('1.0')
    .addTag('product')
    .build();

  const productDocument = SwaggerModule
    .createDocument(
      app,
      productOptions,
      {
        include: [
          ProductModule,
        ],
      },
    );
  SwaggerModule.setup('api/product', app, productDocument);
  const userOptions = new DocumentBuilder()
    .setTitle('User')
    .setDescription('Users API')
    .setVersion('1.0')
    .addTag('user')
    .build();

  const userDocument = SwaggerModule
    .createDocument(
      app,
      userOptions,
      {
        include: [
          UserModule,
        ],
      },
    );
  SwaggerModule.setup('api/user', app, userDocument);

  await app.listen(3000);
}

bootstrap();
