import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Achivement {
  @Field((type) => Int, { nullable: true })
  year?: number;

  @Field((type) => String, { nullable: true })
  title: string;

  @Field((type) => Int, { nullable: true })
  position?: number;
}
