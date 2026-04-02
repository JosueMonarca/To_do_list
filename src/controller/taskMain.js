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
// solo dios y yo sabemos lo que hace esta función, y yo tengo muy mala memoria, 
// así que no me pregunten por qué hice esto, pero funciona y es lo que importa 
    eventListenerDrop(e) {
        e.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        const targetContainer = document.querySelector('.hover-subtask');

        if(draggingElement && targetContainer){
            targetContainer.appendChild(draggingElement);
            targetContainer.classList.remove('hover-subtask');
        }

        if(draggingElement){
            const objectDragging = this.managerTask.getTaskById(draggingElement.id);
            
            if(objectDragging){
                const parentSubtaskList = draggingElement.closest('.subtask-list');
                
                if(parentSubtaskList){
                    const parentTaskElement = parentSubtaskList.closest('.Task-Element');
                    if(parentTaskElement){
                        objectDragging.setIdFather(parentTaskElement.id);
                    }
                } else {
                    objectDragging.setIdFather('root');
                }
            }
        }
    }
}