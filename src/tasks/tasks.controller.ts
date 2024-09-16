import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {

    @Get()
    listTask(){}

    @Post()
    createTask(@Body() body: CreateTaskDto){
        return body;
    }

    @Get('/:id')
    getTask(@Param('id') id: string){
        return {id: id};
    }

    
}
