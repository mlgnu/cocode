import { z } from 'zod';

const envVarsSchema = z.object({
  POSTGRES_DB: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PORT: z.number(),
  CACHE_URL: z.string(),
});
envVarsSchema.safeParse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVarsSchema> {}
  }
}
