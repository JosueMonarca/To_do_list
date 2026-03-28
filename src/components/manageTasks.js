import {ObjectTask} from './objectTask.js';

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

    setTask(task, idFather = "root"){
        const objectTask = new ObjectTask({
            nametask: task,
            idFather: idFather,
            onStatusChange: (taskId, isChecked) => {
                // Solo propagamos la cascada si se marcó como completada (true)
                if (isChecked) {
                    this.completeChildrenRecursively(taskId);
                }
            }});
        this.taskMain.appendChild(objectTask.getElement());
        this.taskList.push(objectTask);
    }

    setClassOfTask(taskId, className){
        const task = this.getTaskById(taskId);
        if(task){
            task.getElement().classList.add(className);
        }
    }


    completeChildrenRecursively(taskId) {
        const children = this.getChildrenById(taskId);
        
        children.forEach(child => {
            // Solo lo actualizamos si no estaba completado ya
            if (!child.getIsCompleted()) {
                child.setIsCompleted(true); // Esto actualiza sus datos y su HTML automáticamente
                
                // ¡La magia de la recursividad! Llama a la misma función para los hijos de este hijo
                this.completeChildrenRecursively(child.getId()); 
            }
        });
    }

    getTasksByClassName(nameClass){
        return this.taskList.filter(task => {
            const containsClass = task.getElement().classList.contains(nameClass);

            const hasChildrenWithClass = Array.from(task.getElement().children)
            .some(child => child.classList.contains(nameClass));

            return containsClass || hasChildrenWithClass;
            
        });
    }

    getElementByClass(nameClass){
        return this.taskList.find(task => task.getElement().classList.contains(nameClass));
    }

    getTaskById(nameId){
        return this.taskList.find(task => task.getId() === nameId);
    }

    getChildrenById(idFather){
        return this.taskList.filter(task => task.getIdFather() === idFather);
    }

    setTaskParent(taskId, parentId){
        const taskChild = this.getTaskById(taskId);
        const taskParent = this.getTaskById(parentId);

        if(taskChild && taskParent){
            taskChild.setIdFather(parentId);
            const subTaskContainer = taskParent.getElement().querySelector('.subtask-list');
            if(subTaskContainer){
                subTaskContainer.appendChild(taskChild.getElement());
            }
        }
    }

    deleteTask(taskId){
        const taskToDelete = this.getTaskById(taskId);
        if(taskToDelete){
            const children = this.getChildrenById(taskId);
            children.forEach(child => this.deleteTask(child.getId()));
            this.taskList = this.taskList.filter(task => task.getId() !== taskId);
            taskToDelete.getElement().remove();
        }
    }

    getTaskMain(){
        return this.taskMain;
    }

    deleteAllTasks(){
        this.taskList.forEach(task => task.getElement().remove());
        this.taskList = [];
    }

}