// ./src/Modules/Test/TestService.ts

import { TestModel } from './TestModel';

export class TestService {
  public async createTest(test1: number, test2: string): Promise<TestModel> {
    const test = await TestModel.create({
      test1,
      test2
    });

    return test;
  }

  public async getTestById(id: number): Promise<TestModel | null> {
    const test = await TestModel.findByPk(id);

    return test;
  }

  public async getAllTests(): Promise<TestModel[]> {
    const tests = await TestModel.findAll();

    return tests;
  }

  public async updateTestById(id: number, test1: number, test2: string): Promise<boolean> {
    const result = await TestModel.update({
      test1,
      test2
    }, {
      where: {
        id
      }
    });

    return result[0] > 0;
  }

  public async deleteTestById(id: number): Promise<boolean> {
    const result = await TestModel.destroy({
      where: {
        id
      }
    });

    return result > 0;
  }
}