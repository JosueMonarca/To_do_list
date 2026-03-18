export function managerTaskMain(classOfElement){
    const elementMain = document.querySelector(`.${classOfElement}`);

    elementMain.addEventListener('dragover', (e)=>{
        e.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        const afterElement = e.target.closest('.Task-Element:not(.dragging)');

        document.querySelectorAll('.hover-subtask').forEach(el => el.classList.remove('hover-subtask'));

        if(afterElement && afterElement != draggingElement && !draggingElement.contains(afterElement)){
            const bounding = afterElement.getBoundingClientRect();
            const fourthOfElement = bounding.top + bounding.height / 4;
            const threeQuartersOfElement = bounding.top + bounding.height * 3 / 4;
            const clientY = e.clientY;

            if(clientY < fourthOfElement){
                afterElement.before(draggingElement);
            }
            else if(clientY > threeQuartersOfElement){
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
    })

    elementMain.addEventListener('drop',(e)=>{
        e.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        const targetContainer = document.querySelector('.hover-subtask');

        if(draggingElement && targetContainer){
            targetContainer.appendChild(draggingElement);
            targetContainer.classList.remove('hover-subtask');
        }
    })
}