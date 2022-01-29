import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users, UsersSchema } from './models/users.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}])]
})
export class UsersModule {}
