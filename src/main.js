import './style.css'
import { TaskManager }  from './components/manageTasks';
import { managerTaskMain } from './components/taskMain';
import { createTrashElement } from './components/trash';
import { ObjectTrash } from './components/objectTrash';

const taskManager = TaskManager.getInstance();
const form = document.getElementById('task-form');
const input = document.getElementById('input');
taskManager.setTaskMain('task-Main');
const trashButton = createTrashElement();
const objectTrash = new ObjectTrash(() => {
    console.log('Tarea eliminada');
    // Aquí puedes agregar la lógica para eliminar la tarea correspondiente
});
const trashContainer = document.getElementById('trash-container');
trashContainer.appendChild(objectTrash.getElement());

managerTaskMain.init(taskManager);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const task = input.value.trim();
    if(task){
        taskManager.setTask(task);
        input.value = '';
    }
});