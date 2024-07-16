import { contract } from '@cocode/contract';
import { Controller } from '@nestjs/common';
import {
  nestControllerContract,
  NestControllerInterface,
  NestRequestShapes,
  TsRest,
  TsRestRequest,
} from '@ts-rest/nest';
import { UserService } from './user.service';

const c = nestControllerContract(contract);
type RequestShapes = NestRequestShapes<typeof c>;

@Controller('users')
export class UserController implements NestControllerInterface<typeof c> {
  constructor(private readonly userService: UserService) {}

  @TsRest(c.getPost)
  async getPost(@TsRestRequest() { params: { id } }: RequestShapes['getPost']) {
    const post = {
      title: 'Hello World!!',
      body: 'This is a post',
    };

    return { status: 200 as const, body: post };
  }

  @TsRest(c.createPost)
  async createPost(@TsRestRequest() { body }: RequestShapes['createPost']) {
    const post = {
      title: body.title,
      body: body.body,
    };

    return { status: 201 as const, body: post };
  }
}
