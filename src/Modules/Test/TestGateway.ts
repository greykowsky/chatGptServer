import { Socket } from 'socket.io';
import { TestModel } from './TestModel';
import { TestService } from './TestService';

export class TestGateway {
  private testService: TestService;

  constructor(private socket: Socket) {
    this.testService = new TestService();
    this.registerEvents();
  }

  private registerEvents(): void {
    this.socket.on('test:create', this.handleCreateTest);
    this.socket.on('test:update', this.handleUpdateTest);
    this.socket.on('test:delete', this.handleDeleteTest);
  }

  private handleCreateTest = async (data: { test1: number; test2: string }): Promise<void> => {
    try {
      const test: TestModel = await this.testService.createTest(data);
      this.socket.emit('test:created', test);
    } catch (error: unknown) {
      this.socket.emit('test:error', (error as Error).message);
    }
  };

  private handleUpdateTest = async (data: { id: string; test1: number; test2: string }): Promise<void> => {
    try {
      const test: TestModel = await this.testService.updateTest(data.id, data);
      this.socket.emit('test:updated', test);
    } catch (error: unknown) {
      this.socket.emit('test:error', (error as Error).message);
    }
  };

  private handleDeleteTest = async (id: string): Promise<void> => {
    try {
      await this.testService.deleteTest(id);
      this.socket.emit('test:deleted', id);
    } catch (error: unknown) {
      this.socket.emit('test:error', (error as Error).message);
    }
  };
}