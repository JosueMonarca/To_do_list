export function createTaskElement(task,id,isCompleted = false, onToggle){

    if(typeof onToggle !== 'function'){
        throw new Error('onToggle no es una función');
    }   

    const li = document.createElement('li');
    li.classList.add('Task-Element');
    li.setAttribute('draggable','true');
    li.setAttribute('id',id);
    
    const inputk = document.createElement('input');
    inputk.classList.add('task-checkbox');
    inputk.setAttribute('type', 'checkbox');
    inputk.checked = isCompleted;
    
    const span = document.createElement('span');
    span.textContent = task;
    span.classList.add('task-text');

    const subTaskList = document.createElement('ul');
    subTaskList.classList.add('subtask-list');

    li.appendChild(inputk);
    li.appendChild(span); 
    li.appendChild(subTaskList);
    
    li.addEventListener('dragstart', (e)=>{
        e.stopPropagation(); 
        e.dataTransfer.setData('text/plain', task);
        li.classList.add('dragging');
    });

    li.addEventListener('dragend', (e)=>{
        e.stopPropagation(); 
        li.classList.remove('dragging');
    });

    inputk.addEventListener('change', (e)=>{
        onToggle(inputk.checked); 
    })

    return li;
}