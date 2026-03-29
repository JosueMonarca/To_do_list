// @vitest-environment jsdom
import { beforeEach, expect, test } from 'vitest';
import { TaskManager } from '../src/components/manageTasks';

beforeEach(() => {
    document.body.innerHTML = '<ul class="lista-tareas"></ul>';
    
    const manager = TaskManager.getInstance();
    manager.deleteAllTasks();
    manager.setTaskMain('lista-tareas');
});

test('ManageTasks initializes with an empty task list', () => {
    const manager = TaskManager.getInstance();
    expect(manager.taskList).toEqual([]);
});

test('ManageTasks can add a task to the task list', () => {
    const manager = TaskManager.getInstance();
    manager.setTask('Test Task');
    expect(manager.taskList.length).toBe(1);
    expect(manager.taskList[0].getNameTask()).toBe('Test Task');
});

test('ManageTasks can toggle task completion status', () => {
    const manager = TaskManager.getInstance();
    manager.setTask('Test Task');
    const task = manager.taskList[0];
    expect(task.getIsCompleted()).toBe(false);
    manager.taskList[0].setIsCompleted(true);
    expect(task.getIsCompleted()).toBe(true);
});

test('ManageTasks can complete a task and its children recursively', () => {
    const manager = TaskManager.getInstance();
    manager.setTask('Parent Task');
    const parentTask = manager.taskList[0];
    manager.setTask('Child Task', parentTask.getId());
    const childTask = manager.taskList[1];
    expect(parentTask.getIsCompleted()).toBe(false);
    expect(childTask.getIsCompleted()).toBe(false);
    manager.completeChildrenRecursively(parentTask.getId());
    expect(parentTask.getIsCompleted()).toBe(true);
    expect(childTask.getIsCompleted()).toBe(true);
});

test('ManageTasks can delete a task and its children', () => {
    const manager = TaskManager.getInstance();
    manager.setTask('Parent Task');
    const parentTask = manager.taskList[0];
    manager.setTask('Child Task', parentTask.getId());
    expect(manager.taskList.length).toBe(2);
    manager.deleteTask(parentTask.getId());
    expect(manager.taskList.length).toBe(0);
});

test('ManageTasks can set a task parent', () => {
    const manager = TaskManager.getInstance();
    manager.setTask('Parent Task');
    const parentTask = manager.taskList[0];
    manager.setTask('Child Task');
    const childTask = manager.taskList[1];
    expect(childTask.getIdFather()).toBe('root');
    manager.setTaskParent(childTask.getId(), parentTask.getId());
    expect(childTask.getIdFather()).toBe(parentTask.getId());
});

test('ManageTasks can get tasks by class name', () => {
    const manager = TaskManager.getInstance();
    manager.setTask('Test Task');
    const task = manager.taskList[0];
    manager.setClassOfTask(task.getId(), 'Test-Task');
    const tasks = manager.getTasksByClassName('Test-Task');
    expect(tasks.length).toBe(1);
    expect(tasks[0].getElement().classList.contains('Test-Task')).toBe(true);
});

test('ManageTasks can get a task by ID', () => {
    const manager = TaskManager.getInstance();
    manager.setTask('Test Task');   
    const task = manager.taskList[0];
    const foundTask = manager.getTaskById(task.getId());
    expect(foundTask).toBe(task);
});

test('ManageTasks can get children by parent ID', () => {
    const manager = TaskManager.getInstance();
    manager.setTask('Parent Task');
    const parentTask = manager.taskList[0];
    manager.setTask('Child Task', parentTask.getId());
    const childTask = manager.taskList[1];
    const children = manager.getChildrenById(parentTask.getId());
    expect(children.length).toBe(1);
    expect(children[0]).toBe(childTask);
});

test('ManageTasks can get the main task element', () => {
    const manager = TaskManager.getInstance();
    const mainElement = manager.getTaskMain();
    expect(mainElement).toBeInstanceOf(HTMLElement);
    expect(mainElement.classList.contains('lista-tareas')).toBe(true);
});

test('ManageTasks completeChildrenRecursively updates all children', () => {
    const manager = TaskManager.getInstance();
    manager.setTask('Parent Task');
    const parentTask = manager.taskList[0];
    manager.setTask('Child Task 1', parentTask.getId());
    manager.setTask('Child Task 2', parentTask.getId());
    const childTask1 = manager.taskList[1];
    const childTask2 = manager.taskList[2];
    expect(parentTask.getIsCompleted()).toBe(false);
    expect(childTask1.getIsCompleted()).toBe(false);
    expect(childTask2.getIsCompleted()).toBe(false);
    manager.completeChildrenRecursively(parentTask.getId());
    expect(parentTask.getIsCompleted()).toBe(true);
    expect(childTask1.getIsCompleted()).toBe(true);
    expect(childTask2.getIsCompleted()).toBe(true);
});
