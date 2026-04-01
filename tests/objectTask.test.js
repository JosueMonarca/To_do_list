// @vitest-environment jsdom
import {expect, test } from 'vitest';
import { ObjectTask } from '../src/model/objectTask';

test('ObjectTask initializes with correct properties', () => {
    const taskData = { nametask: 'Test Task', idFather: 'root', isCompleted: false };
    const objectTask = new ObjectTask(taskData);
    expect(objectTask.getNameTask()).toBe('Test Task');
    expect(objectTask.getIdFather()).toBe('root');
    expect(objectTask.getIsCompleted()).toBe(false);
});

test('ObjectTask creates a task element with the correct structure', () => {
    const taskData = { nametask: 'Test Task', idFather: 'root', isCompleted: false };
    const objectTask = new ObjectTask(taskData);
    const taskElement = objectTask.getElement();
    expect(taskElement.tagName).toBe('LI');
    expect(taskElement.classList.contains('Task-Element')).toBe(true);
    expect(taskElement.getAttribute('draggable')).toBe('true');
    const checkbox = taskElement.querySelector('.task-checkbox');
    expect(checkbox).not.toBeNull();
    expect(checkbox.getAttribute('type')).toBe('checkbox');
    const span = taskElement.querySelector('.task-text');
    expect(span).not.toBeNull();
    expect(span.textContent).toBe('Test Task');
    expect(span.classList.contains('task-text')).toBe(true);
    const subTaskList = taskElement.querySelector('.subtask-list');
    expect(subTaskList).not.toBeNull();
    expect(subTaskList.classList.contains('subtask-list')).toBe(true);
    expect(checkbox.checked).toBe(false);
});

test('ObjectTask actualiza su estado interno cuando el DOM dispara un change', () => {
    const taskData = { nametask: 'Test Task', idFather: 'root', isCompleted: false };
    const objectTask = new ObjectTask(taskData);
    
    expect(objectTask.getIsCompleted()).toBe(false);

    const taskElement = objectTask.getElement();
    const checkbox = taskElement.querySelector('.task-checkbox');
    
    checkbox.checked = true;
    checkbox.dispatchEvent(new Event('change'));

    expect(objectTask.getIsCompleted()).toBe(true);
});