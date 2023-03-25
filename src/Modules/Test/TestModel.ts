// src/Modules/Test/TestModel.ts

import { Model, Column, Table } from 'sequelize-typescript';

@Table
export class TestModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: 'integer',
    allowNull: false,
  })
  test1: number;

  @Column({
    type: 'string',
    allowNull: false,
    validate: {
      len: [0, 250],
    },
  })
  test2: string;
}