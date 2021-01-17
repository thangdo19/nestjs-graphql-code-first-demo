import { RDS_DB_CONNECTION_STRING, RDS_DB_TYPE, TYPEORM_SYNC } from '@common/environments';
import 'dotenv/config';

/**
 * This file is for typeorm-seeding configuration
 * Just ignore it if you don't have any intention of seeding
 */
export =[
  {
    name: 'default',
    type: RDS_DB_TYPE,
    url: RDS_DB_CONNECTION_STRING,
    entities: [`${__dirname}/**/*.model.{js,ts}`],
    synchronize: TYPEORM_SYNC,
    seeds: ['src/database/seeds/**/*{.ts,.js}'],
    factories: ['src/database/factories/**/*{.ts,.js}'],
    "cli": {
      migrationsDir: "src/database/migrations"
    }
  }
]