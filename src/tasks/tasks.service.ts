import { Injectable } from '@nestjs/common';
import { TasksRepository } from "./tasks.repository";

@Injectable()
export class TasksService{

    constructor(public tasksRepo : TasksRepository){}

    findAll() {
        return this.tasksRepo.findAll();
    }

    findOne(id: number){
        return this.tasksRepo.findOne(id);
    }

    create(content: string){
        return this.tasksRepo.create(content);
    }
    
}