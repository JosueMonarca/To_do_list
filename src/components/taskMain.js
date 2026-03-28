export const managerTaskMain  =  {

    init(managerTask)   {
        this.managerTask = managerTask;
        const elementMain = managerTask.getTaskMain();
        this.setDragAndDrop(elementMain);
    },

    setDragAndDrop(elementMain) {
        elementMain.addEventListener('dragover', this.eventListenerDragover.bind(this));
        elementMain.addEventListener('drop', this.eventListenerDrop.bind(this));    
    },

    eventListenerDragover(e) {
        e.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        const afterElement = e.target.closest('.Task-Element');

        document.querySelectorAll('.hover-subtask').forEach(el => el.classList.remove('hover-subtask'));

        if(afterElement && afterElement != draggingElement && !draggingElement.contains(afterElement)){
            const bounding = afterElement.getBoundingClientRect();
            const fourthOfElement = bounding.top + bounding.height / 4;
            const threeQuartersOfElement = bounding.top + bounding.height * 3 / 4;
            const clientY = e.clientY;

            if(clientY <= fourthOfElement){
                afterElement.before(draggingElement);
            }
            else if(clientY >= threeQuartersOfElement){
                afterElement.after(draggingElement);
            }
            else{
                const subTaskContainer = afterElement.querySelector('.subtask-list');
                if(subTaskContainer){
                    subTaskContainer.classList.add('hover-subtask');
                }
            }
        }
        e.stopPropagation();
    },

    eventListenerDrop(e) {
        e.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        const targetContainer = document.querySelector('.hover-subtask');

        if(draggingElement && targetContainer){
            // AQUÍ usarás tu TaskManager inyectado para actualizar el estado lógico
            // Por ejemplo: this.taskManager.setTaskParent(draggingElement.id, parent.id)
            
            targetContainer.appendChild(draggingElement);
            targetContainer.classList.remove('hover-subtask');
        }
        else if(draggingElement && !targetContainer){
            // Lógica para cuando se suelta en la lista principal
        }
    }
}