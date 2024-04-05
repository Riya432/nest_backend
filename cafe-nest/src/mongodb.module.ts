// mongodb.module.ts

import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGO_URi,
       
      }),
    }),
  ],
  exports: [MongooseModule],
})
export class MongodbModule {}
