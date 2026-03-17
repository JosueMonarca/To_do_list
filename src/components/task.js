export function createTaskElement(task){
    const li = document.createElement('li');
    li.textContent = {task};
    return li;
}