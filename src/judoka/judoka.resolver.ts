import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Judoka } from './judoka.dto';
import { JudokaService } from './judoka.service';

@Resolver((of) => Judoka)
export class JudokaResolver {
  constructor(private service: JudokaService) {}

  @Query((returns) => Judoka)
  async judoka(@Args('id', { type: () => Int }) id: number) {
    const judoka = await this.service.getJudoka(id);
    return judoka;
  }
}
