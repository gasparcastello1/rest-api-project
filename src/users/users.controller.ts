import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() // /users
    findAll() {
        return []
    }

    @Get(':id') // /users/:id
    findOne(@Param('id') id: String) {
        return { id }
    }

    @Get('interns') // /users/interns
    findAllInterns() {
        return []
    }

    @Post() //Post user
    createUser(@Body() user: {}) {
        return user
    }
}   
