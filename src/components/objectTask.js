import {createTaskElement} from "./task.js";

export class ObjectTask{
    #nametask;
    #id;
    #idFather;
    #isCompleted;
    #element;
    #onStatusChange;

    constructor({nametask, idFather = "root", isCompleted = false, onStatusChange=()=>{}}){
        this.#nametask = nametask;
        this.#id = crypto.randomUUID();
        this.#idFather = idFather;
        this.#isCompleted = isCompleted;
        this.#onStatusChange = onStatusChange;
        this.#element = this.createElement(this.#nametask, this.#id, this.#isCompleted, this.setIsCompleted.bind(this));
    }

    getNameTask(){return this.#nametask;}

    getId(){return this.#id;}

    getIdFather(){return this.#idFather;}

    getIsCompleted(){return this.#isCompleted;}

    getElement(){return this.#element;}

    getClassList(){return this.#element.classList;}

    addClass(clasName){this.#element.classList.add(clasName);}

    setIdFather(idFather){this.#idFather = idFather;}

    setIsCompleted(isCompleted, skipNotification = false) {
        this.#isCompleted = isCompleted;
    
        const checkbox = this.#element.querySelector('.task-checkbox');
        if (checkbox) checkbox.checked = isCompleted;
    
        const span = this.#element.querySelector('.task-text');
        if (span) span.classList.toggle('completed', isCompleted);
    
        if (!skipNotification && this.#onStatusChange) {
            this.#onStatusChange(this.#id, isCompleted);
        }
    }

    setNameTask(nametask){
        this.#nametask = nametask;
        this.#element.querySelector('.task-text').textContent = nametask;
    }

    createElement(taskName,id,isCompleted,onToggle){
        return createTaskElement(taskName,id,isCompleted,onToggle);
    }

    getElement(){return this.#element;}
}