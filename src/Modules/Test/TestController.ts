import { Router, Request, Response } from 'express';
import { TestService } from './TestService';
import { TestModel } from './TestModel';

export class TestController {
  public router: Router;
  private testService: TestService;

  constructor() {
    this.router = Router();
    this.testService = new TestService();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/test', async (req: Request, res: Response): Promise<void> => {
      try {
        const tests: TestModel[] = await this.testService.getAllTests();
        res.status(200).json(tests);
      } catch (error: unknown) {
        res.status(500).send((error as Error).message);
      }
    });

    this.router.get('/test/:id', async (req: Request, res: Response): Promise<void> => {
      try {
        const test: TestModel | null = await this.testService.getTestById(req.params.id);
        if (test) {
          res.status(200).json(test);
        } else {
          res.status(404).send('Test not found');
        }
      } catch (error: unknown) {
        res.status(500).send((error as Error).message);
      }
    });

    this.router.post('/test', async (req: Request, res: Response): Promise<void> => {
      try {
        const test: TestModel = await this.testService.createTest(req.body);
        res.status(201).json(test);
      } catch (error: unknown) {
        res.status(500).send((error as Error).message);
      }
    });

    this.router.put('/test/:id', async (req: Request, res: Response): Promise<void> => {
      try {
        const test: TestModel | null = await this.testService.updateTest(req.params.id, req.body);
        if (test) {
          res.status(200).json(test);
        } else {
          res.status(404).send('Test not found');
        }
      } catch (error: unknown) {
        res.status(500).send((error as Error).message);
      }
    });

    this.router.delete('/test/:id', async (req: Request, res: Response): Promise<void> => {
      try {
        const deletedTest: any = await this.testService.deleteTest(req.params.id);
        if (deletedTest) {
          res.status(200).send('Test deleted successfully');
        } else {
          res.status(404).send('Test not found');
        }
      } catch (error: unknown) {
        res.status(500).send((error as Error).message);
      }
    });
  }
}