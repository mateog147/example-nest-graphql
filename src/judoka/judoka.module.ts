import { Module } from '@nestjs/common';
import { JudokaService } from './judoka.service';
import { JudokaResolver } from './judoka.resolver';
import { AchivementsService } from './achivements.service';

@Module({
  providers: [JudokaService, JudokaResolver, AchivementsService],
})
export class JudokaModule {}
