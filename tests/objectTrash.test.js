// @vitest-environment jsdom
import {expect, test } from 'vitest';
import { ObjectTrash } from '../src/view/objectTrash';
import { describe } from 'vitest';

describe('ObjectTrash - Clase y Componente', () => {
    test('debe de lanzar un error si onEliminate no es una función', () => {
        expect(() => new ObjectTrash('no-es-una-función')).toThrow('El parámetro onEliminate debe ser una función');
    });

    test('debe instanciar la clase ObjectTrash correctamente', () => {
        const trash = new ObjectTrash(() => {console.log('Tarea eliminada');});
        expect(trash).toBeDefined();
    });

    test('debe renderizar el componente en el DOM', () => {
        const trash = new ObjectTrash(() => {console.log('Tarea eliminada');});
        const element = trash.getElement();
        expect(element).toBeDefined();
    });

    test('debe tener los métodos requeridos', () => {
        const trash = new ObjectTrash(() => {console.log('Tarea eliminada');});
        expect(typeof trash.getElement).toBe('function');
        expect(typeof trash.eventListenerDragover).toBe('function');
        expect(typeof trash.eventListenerDrop).toBe('function');
        expect(typeof trash.eventListenerDragleave).toBe('function');
    });
});