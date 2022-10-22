import { configure as serverlessExpress } from '@vendia/serverless-express';
import { initApp } from './initApp';

let cachedServer;

export const handler = async (event, context) => {
  if (!cachedServer) {
    const nestApp = await initApp();
    cachedServer = serverlessExpress({
      app: nestApp.getHttpAdapter().getInstance(),
    });
  }

  return cachedServer(event, context);
};
