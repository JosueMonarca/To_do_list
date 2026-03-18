import {createTaskElement} from './task.js';
import { managerTaskMain } from './taskMain.js';

export class TaskManager {
    constructor(){
        this.taskList = [];
        this.managerTaskMain = managerTaskMain;
    }
    setTask(task){
        this.taskList.push(createTaskElement(task));
    }
    getLastTask(){
        return this.taskList[this.taskList.length - 1];
    }

    setManagerTaskMain(classOfElement){
        this.managerTaskMain(classOfElement);
    }
}