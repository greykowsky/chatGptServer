// ./config/db.ts

import { Sequelize } from 'sequelize-typescript';
import { TestModel } from '../Modules/Test/TestModel';
import { config } from './config';

export const sequelize = new Sequelize({
  database: config.databaseName,
  dialect: 'mysql',
  username: config.databaseUsername,
  password: config.databasePassword,
  host: config.databaseHost,
  models: [// Передаем массив моделей
    TestModel,
  ],
  dialectOptions: {
    // Опции диалекта
    supportBigNumbers: true,
    bigNumberStrings: true,
  },
  define: {
    timestamps: false, // Отключаем поля createdAt и updatedAt
  },
});