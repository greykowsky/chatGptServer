// ./Classes/Server.ts

import express, { Application } from 'express';
import http from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { config } from '../config/config';
import { sequelize } from '../config/db';

export class Server {
  private app: Application;
  private server: http.Server;
  private io: SocketIOServer;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new SocketIOServer(this.server);
    sequelize.sync(); // Синхронизация с базой данных
  }

  public start(): void {
    this.server.listen(config.port, () => {
      console.log(`Server started on port ${config.port}`);
    });
  }

  public registerSocketHandlers(): void {
    this.io.on('connection', (socket: Socket) => {
      console.log(`Socket ${socket.id} connected`);
      // Обработчики событий Socket.IO
    });
  }

  public registerRoutes(): void {
    this.app.get('/', (req, res) => {
      res.send('Hello, World!');
    });
  }
}