export function managerTaskMain(classOfElement){
    const elementMain = document.querySelector(`.${classOfElement}`);

    elementMain.addEventListener('dragover', (e)=>{
        e.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        const afterElement = e.target.closest('.Task-Element:not(.dragging)');

        if(afterElement != draggingElement){
            const bounding = afterElement.getBoundingClientRect();
            const midOfElement = bounding.top + bounding.height / 2;

            if(e.clientY < midOfElement){
                elementMain.insertBefore(draggingElement, afterElement);
            }else{
                elementMain.insertBefore(draggingElement, afterElement.nextSibling);     
            }
        }
        e.stopPropagation();
    })
}