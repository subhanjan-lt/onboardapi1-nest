import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { Users, UsersDocument } from './models/users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private readonly model: Model<UsersDocument>) {}

    async findAll(): Promise<Users[]> {
        return await this.model.find().exec();
    }

    async findOne(name: String): Promise<Users> {
        return await this.model.findOne({name: name}).exec();
    }

    async create(userDto: UserDto): Promise<Users> {
        return await new this.model({
            ...userDto,
        }).save();
    }

    async update(name: String, userDto: UserDto): Promise<Users> {
        return await this.model.findOneAndUpdate({name: name}, userDto).exec();
    }

    async delete(name: String): Promise<Users> {
        return await this.model.findOneAndDelete({name: name}).exec();
    }
}
