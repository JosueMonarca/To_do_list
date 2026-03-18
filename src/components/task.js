export function createTaskElement(task){
    const li = document.createElement('li');
    li.classList.add('Task-Element');
    li.setAttribute('draggable','true');
    
    const inputk = document.createElement('input');
    inputk.classList.add('task-checkbox');
    inputk.setAttribute('type', 'checkbox');
    
    const span = document.createElement('span');
    span.textContent = task;
    span.classList.add('task-text');

    const subTaskList = document.createElement('ul');
    subTaskList.classList.add('subtask-list');

    li.appendChild(inputk);
    li.appendChild(span); 
    li.appendChild(subTaskList);
    
    li.addEventListener('dragstart', (e)=>{
        e.dataTransfer.setData('text/plain',task);
        li.classList.add('dragging');
    })

    li.addEventListener('dragend', (e)=>{
        li.classList.remove('dragging');
    })

    return li;
}