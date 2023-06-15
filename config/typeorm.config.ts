import {DataSource} from 'typeorm';
import {ConfigService} from '@nestjs/config';
import {User} from './user.entity';

const configService = new ConfigService()

export default new DataSource({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),

    entities: [
        User
    ],
    migrations: [],
});