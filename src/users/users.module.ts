import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users, UsersSchema } from './models/users.model';
import { MongooseModule } from '@nestjs/mongoose';
import { HeaderKeyMaster, HeaderKeyMasterSchema } from './models/header-key-master.model';
import { HeaderAuthMiddleware } from './header-auth.middleware';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}, 
    {name: HeaderKeyMaster.name, schema: HeaderKeyMasterSchema}])]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(HeaderAuthMiddleware)
      .forRoutes(UsersController);
  }
}
