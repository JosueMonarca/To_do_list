import { createTrashElement } from "./trash";

export class ObjectTrash {
    #element;
    #onEliminate;
    constructor(onEliminate) {
        this.#element = createTrashElement();
        this.#onEliminate = onEliminate;

        this.#element.addEventListener('dragover', this.eventListenerDragover.bind(this));
        this.#element.addEventListener('drop', this.eventListenerDrop.bind(this));
    }

    eventListenerDragover(e){
        e.preventDefault();
        console.log('si jalo')
    }

    eventListenerDrop(e){
        e.preventDefault();
        if(typeof this.#onEliminate === 'function'){
            this.#onEliminate();
        }
    }

    getElement(){return this.#element;}
}