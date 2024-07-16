import { Params } from 'nestjs-pino';

export const LoggerConfig: Params = {
  pinoHttp: {
    transport: { target: 'pino-pretty' },
  },
};
