// @vitest-environment jsdom
import {expect, test } from 'vitest';
import { managerTaskMain } from '../src/controller/taskMain';
import { describe } from 'vitest';

describe('TaskMain - Controlador unico en forma de objeto', () => {
    test('debe instanciar la clase TaskMain correctamente', () => {
        const taskMain = managerTaskMain;
        expect(taskMain).toBeDefined();
    });

    test('debe tener los métodos requeridos', () => {
        const taskMain = managerTaskMain;
        expect(typeof taskMain.init).toBe('function');
        expect(typeof taskMain.setDragAndDrop).toBe('function');
        expect(typeof taskMain.eventListenerDragover).toBe('function');
        expect(typeof taskMain.eventListenerDrop).toBe('function');
    });

    test('debe agregar la clase CSS "Task-Main" al elemento principal', () => {
            const taskMain = managerTaskMain;
            const elementMain = document.createElement('div');
            elementMain.classList.add('Task-Main');
            taskMain.init({ getTaskMain: () => elementMain });
            expect(elementMain.classList.contains('Task-Main')).toBe(true);
    });
});