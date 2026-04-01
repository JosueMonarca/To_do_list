import './style.css'
import { TaskManager }  from './components/manageTasks';
import { managerTaskMain } from './components/taskMain';
import { createTrashElement } from './components/trash';

const taskManager = TaskManager.getInstance();
const form = document.getElementById('task-form');
const input = document.getElementById('input');
taskManager.setTaskMain('task-Main');
const trashButton = createTrashElement();
const trashContainer = document.getElementById('trash-container');
trashContainer.appendChild(trashButton);

managerTaskMain.init(taskManager);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const task = input.value.trim();
    if(task){
        taskManager.setTask(task);
        input.value = '';
    }
});