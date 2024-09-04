import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    listTask(){}

    @Post()
    createTask(){}

    @Get('/:id')
    getTask(){}
}
