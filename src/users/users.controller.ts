import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get() // GET /users
    findAll() {
        return this.usersService.findAll()
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id)
    }

    @Post() //POST /users
    createUser(@Body() user: { name: string; email: string; role: "INTERN" | "ENGINEER" | "ADMIN"; }) {
        return this.usersService.create(user)
    }

    @Patch(':id') //PATCH /users/:id
    updateUser(@Param('id') id: String, @Body() updatedUser: { name: string; email: string; role: "INTERN" | "ENGINEER" | "ADMIN"; }) {
        return this.usersService.update(+id, updatedUser)
    }

    @Delete(':id') //DELETE /users/:id
    deleteUser(@Param('id') id: String) {
        return this.usersService.delete(+id)
    }
}   
