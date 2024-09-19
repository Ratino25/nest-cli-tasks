import { TasksRepository } from "./tasks.repository";


export class TasksService{
    tasksRepo: TasksRepository

    constructor(){
        this.tasksRepo = new TasksRepository();
    }

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