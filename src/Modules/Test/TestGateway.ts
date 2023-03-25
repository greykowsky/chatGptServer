import { Socket } from 'socket.io';

export class TestGateway {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;

    this.handleSocketEvents();
  }

  private handleSocketEvents(): void {
    this.socket.on('testEvent', (data: any) => {
      console.log('Received testEvent with data:', data);
    });
  }

  public sendTestEvent(data: any): void {
    this.socket.emit('testEvent', data);
  }
}
