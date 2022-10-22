import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export const initApp = async (): Promise<INestApplication> => {
  const nestApp = await NestFactory.create(AppModule);
  nestApp.setGlobalPrefix('api');
  await nestApp.init();

  return nestApp;
};
