import './style.css'
import { TaskManager }  from './components/manageTasks';

const taskManager = TaskManager.getInstance();
const form = document.getElementById('task-form');
const input = document.getElementById('input');
taskManager.setTaskMain('task-Main');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const task = input.value.trim();
    if(task){
        taskManager.setTask(task);
        input.value = '';
    }
})