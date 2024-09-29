import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { S3Service } from './s3/s3.service';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule],
  providers: [S3Service],
})
export class AppModule {}
