import { join } from 'path/posix';
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port:
    process.env.STAGE === 'test'
      ? parseInt(process.env.POSTGRES_PORT_TEST)
      : parseInt(process.env.POSTGURES_PORT),
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: [join(__dirname, '..', '**/entities/*entity.{ts,js}')],
  synchronize: true,
  logging: false,
};

export = config;
