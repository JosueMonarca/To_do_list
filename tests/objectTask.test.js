// @vitest-environment jsdom
import {expect, test } from 'vitest';
import { ObjectTask } from '../src/components/objectTask';

test('ObjectTask initializes with correct properties', () => {
    const taskData = { nametask: 'Test Task', idFather: 'root', isCompleted: false };
    const objectTask = new ObjectTask(taskData);
    expect(objectTask.getNameTask()).toBe('Test Task');
    expect(objectTask.getIdFather()).toBe('root');
    expect(objectTask.getIsCompleted()).toBe(false);
});
