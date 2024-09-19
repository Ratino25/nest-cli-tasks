import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    tasksService: TasksService;

    constructor(){
        this.tasksService = new TasksService();
    }

    @Get()
    listTask(){
        return this.tasksService.findAll();
    }

    @Post()
    createTask(@Body() body: CreateTaskDto){
        return this.tasksService.create(body.content);
    }

    @Get('/:id')
    getTask(@Param('id') id: string){
        return this.tasksService.findOne(parseInt(id));
    }

    
}
