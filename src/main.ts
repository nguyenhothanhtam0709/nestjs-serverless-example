import { initApp } from './initApp';

async function bootstrap() {
  const app = await initApp();
  await app.listen(3000);
}
bootstrap();
