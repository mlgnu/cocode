import { Injectable } from '@nestjs/common';
import { Kysely } from 'kysely';
import { DB } from 'kysely-codegen';
import { InjectKysely } from 'nestjs-kysely';

@Injectable()
export class UserService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  async getPost() {
    const check = await this.db
      .selectFrom('user')
      .select('first_name')
      .execute();
    console.log(JSON.stringify(check));
  }
}
