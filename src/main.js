import './style.css'
import { TaskManager }  from './components/manageTasks';
import { managerTaskMain } from './components/taskMain';

const taskManager = TaskManager.getInstance();
const form = document.getElementById('task-form');
const input = document.getElementById('input');

taskManager.setTaskMain('task-Main');

managerTaskMain.init(taskManager);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const task = input.value.trim();
    if(task){
        taskManager.setTask(task);
        input.value = '';
    }
});