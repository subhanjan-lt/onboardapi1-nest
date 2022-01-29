import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(':name')
    async find(@Param('name') name: String) {
        return await this.service.findOne(name);
    }

    @Post()
    async create(@Body() userDto: UserDto) {
        return await this.service.create(userDto);
    }

    @Put(':name')
    async update(@Param('name') name: String, @Body() userDto: UserDto) {
        return await this.service.update(name, userDto);
    }

    @Delete(':name')
    async delete(@Param('name') name: String) {
        return await this.service.delete(name);
    }
}
