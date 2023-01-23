import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  //le debo poner a ghraphql qeu es lo que vamos a retornar
  @Query(() => String, { description: 'Retorna un hola mundo', name: 'hello' })
  //si no especifico el nombre en el Query el nombre de la función sera el que aparece en el sandbox
  helloWorld(): string {
    //
    return 'Hola Mundo';
  }

  @Query(() => Float, {
    description: 'retorna un numero aleatorio',
    name: 'random',
  })
  getRanmdomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    description: 'retorna un numero aleatorio entreo 0 hasta el x',
    name: 'randomTo',
  })
  getRandomFromZeroTo(
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    @Args('to', { type: () => Int, nullable: true }) to: number = 6,
  ): number {
    const rdm = Math.floor(Math.random() * (to + 1));
    return rdm;
  }
}
