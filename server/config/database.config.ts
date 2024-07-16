import { CamelCasePlugin, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

export const DatabaseConfig = {
  dialect: new PostgresDialect({
    pool: new Pool({
      database: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      port: process.env.POSTGRES_PORT,
      password: process.env.POSTGRES_PASSWORD,
      max: 10,
    }),
  }),
  plugins: [new CamelCasePlugin()],
};
