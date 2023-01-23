import { Injectable } from '@nestjs/common';
import { Judoka } from './judoka.dto';

@Injectable()
export class JudokaService {
  getJudoka(id: number): Promise<Judoka> {
    const judokaMock: Judoka = {
      name: 'Test',
      age: 22,
      achivements: [
        { title: ' XXI Juegos Departamentales ', year: 2015, position: 1 },
      ],
    };
    return Promise.resolve(judokaMock);
  }
}
