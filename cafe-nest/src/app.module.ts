import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './Admin/admin.module';
import { UserModule } from './User/user.module';
import { ProductModule } from './Product/product.module';
import { CategoryModule } from './Category/categroy.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config';
import { OrderModule } from './order/order.module';
import { MongodbModule } from './mongodb.module';
import { DatabaseModule } from './database/database.module';
//import { fileUploadModule } from './File Upload/fileUpload.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { ExtractCookiesMiddleware } from './Admin/cookiesGuard';

@Module({
  imports: [
    //extra code
    PassportModule.register({ defaultStrategy: 'jwt' }),
//

    ConfigModule.forRoot({
     
      envFilePath: [`.env.${process.env}`],
      isGlobal: true,
      load: [config],
    }),
    MongooseModule.forRoot('mongodb+srv://Riya:Riya@mongodbcodewithharry.86453cn.mongodb.net/cafe'),
    AdminModule,

   
    UserModule,
    ProductModule,
    CategoryModule,
    OrderModule,
    AuthModule
    //fileUploadModule,
  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExtractCookiesMiddleware).forRoutes('*');
  }
}
