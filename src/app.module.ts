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
      password: '1011fajeruw',
      database: 'sql-kurs',
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
