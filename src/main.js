import './style.css'
import { TaskManager } from './model/manageTasks';
import { managerTaskMain } from './controller/taskMain';
import { ObjectTrash } from './view/objectTrash';

const taskManager = TaskManager.getInstance();
const form = document.getElementById('task-form');
const input = document.getElementById('input');
taskManager.setTaskMain('task-Main');
const objectTrash = new ObjectTrash(taskManager.deleteTaskSelected.bind(taskManager));
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