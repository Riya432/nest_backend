/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { adminController } from './admin.controller';
import { adminService } from './admin.service';
import { AdminSchema } from './admin.schema';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

0
@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('secretKey'),
        signOptions: {
          expiresIn: "3d",
        },
      }),
    }),
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }]),
  ],
  controllers: [adminController],
  providers: [adminService],
  exports:  [adminService]
})
export class AdminModule {}
