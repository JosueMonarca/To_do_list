import {createTaskElement} from './task.js';

export class TaskManager {
    constructor(){
        this.taskList = [];
    }
    setTask(task){
        this.taskList.push(createTaskElement(task));
    }
    getLastTask(){
        return this.taskList[this.taskList.length - 1];
    }
}