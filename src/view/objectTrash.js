import { createTrashElement } from "./trash";

export class ObjectTrash {
    #element;
    #onEliminate;
    constructor(onEliminate) {
        this.#element = createTrashElement();
        if(typeof onEliminate !== 'function') {
            throw new Error('El parámetro onEliminate debe ser una función');
        }
        this.#onEliminate = onEliminate;

        this.#element.addEventListener('dragover', this.eventListenerDragover.bind(this));
        this.#element.addEventListener('drop', this.eventListenerDrop.bind(this));
        this.#element.addEventListener('dragleave', this.eventListenerDragleave.bind(this));
    }

    eventListenerDragover(e){
        e.preventDefault();
        this.#element.classList.add('drag-over');
    }

    eventListenerDrop(e){
        e.preventDefault();
        this.#element.classList.remove('drag-over');
        if(typeof this.#onEliminate === 'function'){
            this.#onEliminate();
        }
    }

    eventListenerDragleave(e){
        e.preventDefault();
        this.#element.classList.remove('drag-over');
    }

    getElement(){return this.#element;}
}