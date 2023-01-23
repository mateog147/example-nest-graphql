import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Achivement } from './achivement.dto';

@ObjectType()
export class Judoka {
  @Field((type) => String)
  name: string;

  @Field((type) => Int, { nullable: true })
  age?: number;

  @Field({ nullable: true })
  club?: string;

  @Field((type) => [Achivement], { nullable: true })
  achivements?: Achivement[];
}
