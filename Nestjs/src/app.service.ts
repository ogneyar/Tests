/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Get: Hello Nest JS!';
  }

  postHello(): string {
    return 'Post: Hello Nest JS!';
  }

  putHello(): string {
    return 'Put: Hello Nest JS!';
  }

  patchHello(): string {
    return 'Patch: Hello Nest JS!';
  }

  deleteHello(): string {
    return 'Delete: Hello Nest JS!';
  }

  headHello(): string {
    return 'Head: Hello Nest JS!';
  }

  optionsHello(): string {
    return 'Options: Hello Nest JS!';
  }

}
