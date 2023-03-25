import { Router, Request, Response } from 'express';

export class TestComponent {
  public router: Router;

  constructor() {
    this.router = Router();
    this.registerRoutes();
  }

  public getRouter(): Router {
    return this.router;
  }

  private registerRoutes(): void {
    this.router.get('/test', this.handleGetTestRoute);
  }

  private handleGetTestRoute(req: Request, res: Response): void {
    res.send('Hello, Test!');
  }
}