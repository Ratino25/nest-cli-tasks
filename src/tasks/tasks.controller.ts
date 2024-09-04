import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    listTask(){}

    @Post()
    createTask(@Body() body: any){
        return body;
    }

    @Get('/:id')
    getTask(@Param('id') id: string){
        return {id: id};
    }
}
