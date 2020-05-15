import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatService } from './cat.service';
import { ValidationController } from './swagger.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ValidationController],
  providers: [CatService],
})
export class AppModule {}
