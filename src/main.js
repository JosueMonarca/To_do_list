import './style.css'
import { TaskManager }  from './components/manageTasks';

let taskManager = new TaskManager();
const form = document.getElementById('task-form');
const input = document.getElementById('input');
const tasksList = document.getElementById('tasks');
taskManager.setManagerTaskMain('task-Main');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const task = input.value.trim();
    if(task){
        taskManager.setTask(task);
        tasksList.appendChild(taskManager.getLastTask());
        input.value = '';
    }
})