import { TestModel } from './TestModel';

export class TestService {
  public async createTest(data: { test1: number; test2: string }): Promise<TestModel> {
    try {
      const test = await TestModel.create(data);
      return test;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async getTestById(id: string): Promise<TestModel> {
    try {
      const test = await TestModel.findOne({ where: { id } });
      if (!test) {
        throw new Error('Test not found');
      }
      return test;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async getAllTests(): Promise<TestModel[]> {
    try {
      const tests = await TestModel.findAll();
      return tests;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async updateTest(id: string, data: { test1: number; test2: string }): Promise<TestModel> {
    try {
      const test = await this.getTestById(id);
      await test.update(data);
      return test;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async deleteTest(id: string): Promise<void> {
    try {
      const test = await this.getTestById(id);
      await test.destroy();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}