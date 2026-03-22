import {createTaskElement} from './task.js';

export class TaskManager {
    static #instance;
    constructor(){
        if(TaskManager.#instance){
            return TaskManager.#instance;
        }
        TaskManager.#instance = this;

        this.taskList = [];
        this.taskMain = null;
    }

    static getInstance(){
        if(!TaskManager.#instance){
            TaskManager.#instance = new TaskManager();
        }
        return TaskManager.#instance;
    }

    setTaskMain(classOfElement){
        this.taskMain = document.querySelector(`.${classOfElement}`);
    }

    setTask(task){
        const taskElement = createTaskElement(task);
        this.taskMain.appendChild(taskElement);
        this.taskList.push(taskElement);
    }

    getTasksByClass(nameClass){
        return this.taskList.filter(task => {
            const containsClass = task.classList.contains(nameClass);

            const hasChildrenWithClass = Array.from(task.children)
            .some(child => child.classList.contains(nameClass));

            return containsClass || hasChildrenWithClass;
            
        });
    }

    getTaskById(nameId){
        return this.taskList.find(task => task.id === nameId);
    }

    getChildrenById(idFather){
        return this.taskList.filter(task => task.getAttribute('id-father') === idFather);
    }

    setTaskParent(taskId, parentId){
        const taskChild = this.getTaskById(taskId);
        const taskParent = this.getTaskById(parentId);

        if(taskChild && taskParent){
            taskChild.setAttribute('id-father', parentId);
            const subTaskContainer = taskParent.querySelector('.subtask-list');
            if(subTaskContainer){
                subTaskContainer.appendChild(taskChild);
            }
        }
    }

    deleteTask(taskId){
        const taskToDelete = this.getTaskById(taskId);
        if(taskToDelete){
            const children = this.getChildrenById(taskId);
            children.forEach(child => this.deleteTask(child.id));
            this.taskList = this.taskList.filter(task => task.id !== taskId);
            taskToDelete.remove();
        }
    }

    getTaskMain(){
        return this.taskMain;
    }
}