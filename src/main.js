import './style.css'
import { TaskManager } from './model/manageTasks';
import { managerTaskMain } from './controller/taskMain';
import { ObjectTrash } from './view/objectTrash';
import { PersistenceManager } from './model/persistence';

const taskManager = TaskManager.getInstance();
const form = document.getElementById('task-form');
const input = document.getElementById('input');
taskManager.setTaskMain('task-Main');
const objectTrash = new ObjectTrash(taskManager.deleteTaskSelected.bind(taskManager));
const trashContainer = document.getElementById('trash-container');
trashContainer.appendChild(objectTrash.getElement());

const tareasGuardadas = PersistenceManager.loadTasks();
tareasGuardadas.forEach(tareaData => {
    taskManager.restoreTask(tareaData); 
});

managerTaskMain.init(taskManager);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const task = input.value.trim();
    if(task){
        taskManager.setTask(task);
        input.value = '';
    }
});