import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'mysql',
      autoLoadModels: true,
      synchronize: true,
      define:{
        timestamps: false
    }
    }),
    UsersModule,
  ],
})
export class AppModule {}
