import { CacheModuleOptions } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { RedisClientOptions } from 'redis';

export const CacheConfig: CacheModuleOptions<RedisClientOptions> = {
  store: redisStore,
  url: process.env.CACHE_URL,
  isGlobal: true,
};
