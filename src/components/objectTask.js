import {createTaskElement} from "./task.js";

export class ObjectTask{
    #nametask;
    #id;
    #idFather;
    #isCompleted;
    #element;

    constructor({nametask, idFather = "root",isCompleted = false}){
        this.#nametask = nametask;
        this.#id = crypto.randomUUID();
        this.#idFather = idFather;
        this.#isCompleted = isCompleted;
        this.#element = this.createElement(this.#nametask, this.#id, this.#isCompleted, this.setIsCompleted.bind(this));
    }

    getNameTask(){return this.#nametask;}

    getId(){return this.#id;}

    getIdFather(){return this.#idFather;}

    getIsCompleted(){return this.#isCompleted;}

    getElement(){return this.#element;}

    setIdFather(idFather){this.#idFather = idFather;}

    setIsCompleted(isCompleted){
        this.#isCompleted = isCompleted;
        const checkbox = this.#element.querySelector('.task-checkbox');
        checkbox.checked = isCompleted;
    }

    setNameTask(nametask){
        this.#nametask = nametask;
        this.#element.querySelector('.task-text').textContent = nametask;
    }

    createElement(taskName,id,isCompleted,onToggle){
        return createTaskElement(taskName,id,isCompleted,onToggle);
    }
}