import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  display_name: string;

  @Column({ defaultValue: 2022 })
  year_of_birth: number;
}
