import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheConfig } from 'config/cache.config';
import { DatabaseConfig } from 'config/database.config';
import { LoggerConfig } from 'config/logger.config';
import { KyselyModule } from 'nestjs-kysely';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    KyselyModule.forRoot(DatabaseConfig),
    CacheModule.register(CacheConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot(LoggerConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
