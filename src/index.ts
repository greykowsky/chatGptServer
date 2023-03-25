// ./index.ts

import { Server } from './Classes/Server';

const server = new Server();

server.registerSocketHandlers();
server.registerRoutes();
server.start();
