export function createTaskElement(task){
    const lu = document.createElement('ul');
    lu.classList.add('Task-Element');
    lu.setAttribute('draggable','true');
    
    const inputk = document.createElement('input');
    inputk.classList.add('task-checkbox');
    inputk.setAttribute('type', 'checkbox');
    
    const span = document.createElement('span');
    span.textContent = task;
    span.classList.add('task-text');

    lu.appendChild(inputk);
    lu.appendChild(span); 
    
    lu.addEventListener('dragstart', (e)=>{
        e.dataTransfer.setData('text/plain',task);
        lu.classList.add('dragging');
    })

    lu.addEventListener('dragend', (e)=>{
        lu.classList.remove('dragging');
    })

    return lu;
}