import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { PORT } = process.env;
  await app.listen(PORT, () =>
    console.log(`Server started on http://localhost:${PORT}`),
  );
}
bootstrap();
