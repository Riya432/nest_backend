// database.service.ts

import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class DatabaseService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async isConnected(): Promise<boolean> {
    const isConnected = this.connection.readyState;
    return isConnected === 1 || isConnected === 2;
  }
}
