// @vitest-environment jsdom
import {expect, test } from 'vitest';
import { createTaskElement } from '../src/view/task'; 

test('createTaskElement creates a task element with the correct structure', () => {
    const taskName = 'Test Task';
    const taskElement = createTaskElement(taskName, 'test-id', false , () => {}); 
    expect(taskElement.tagName).toBe('LI');
    expect(taskElement.classList.contains('Task-Element')).toBe(true);
    expect(taskElement.getAttribute('draggable')).toBe('true');
    expect(taskElement.getAttribute('id')).toBe('test-id');
    const checkbox = taskElement.querySelector('.task-checkbox');
    expect(checkbox).not.toBeNull();
    expect(checkbox.getAttribute('type')).toBe('checkbox');
    const span = taskElement.querySelector('.task-text');
    expect(span).not.toBeNull();
    expect(span.textContent).toBe(taskName);
    expect(span.classList.contains('task-text')).toBe(true);
    const subTaskList = taskElement.querySelector('.subtask-list');
    expect(subTaskList).not.toBeNull();
    expect(subTaskList.classList.contains('subtask-list')).toBe(true);
    expect(checkbox.checked).toBe(false);
});

test('Debe lanzar un error INMEDIATO si no se le pasa onToggle', () => {
    
    expect(() => {
        
        createTaskElement('test-id', 'Test Task', false); 
        
    }).toThrow('onToggle no es una función'); 
    
});
