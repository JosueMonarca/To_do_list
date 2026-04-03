# To Do List

Una aplicación web sencilla para gestionar una lista de tareas pendientes.

## Descripción

Este proyecto permite agregar tareas desde un formulario y mostrarlas en una lista dentro de la interfaz. Está construido con Vite y puede ejecutarse en un navegador moderno.

## Tecnologías usadas

- Vite
- JavaScript (módulos ES)
- Vitest para pruebas
- jsdom para entorno de pruebas DOM

## Estructura del proyecto

- `index.html` - Página principal de la aplicación.
- `src/main.js` - Entrada principal del módulo JavaScript.
- `src/style.css` - Estilos globales.
- `src/controller/taskMain.js` - Controlador principal de tareas.
- `src/model/manageTasks.js` - Lógica para gestionar tareas.
- `src/model/objectTask.js` - Objeto que representa una tarea.
- `src/model/persistence.js` - Manejo de persistencia de datos.
- `src/view/objectTrash.js` - Vista para elementos eliminados.
- `src/view/task.js` - Vista para tareas.
- `src/view/trash.js` - Vista para la papelera.
- `public/` - Archivos estáticos accesibles públicamente.
- `tests/` - Pruebas unitarias del proyecto.

## Instalación

1. Instalar dependencias:

```bash
pnpm install
```

2. Ejecutar el servidor de desarrollo:

```bash
pnpm dev
```

3. Abrir el navegador en la dirección que muestre Vite, normalmente `http://localhost:5173`.

## Scripts disponibles

- `pnpm dev` - Inicia el servidor de desarrollo.
- `pnpm build` - Genera el bundle de producción.
- `pnpm preview` - Previsualiza la build de producción.
- `pnpm test` - Ejecuta las pruebas con Vitest.
- `pnpm coverage` - Ejecuta las pruebas y genera cobertura.

## Uso

1. Abre la aplicación en tu navegador.
2. Ingresa una tarea en el formulario y presiona "Agregar".
3. Las tareas se mostrarán en la lista.
4. Puedes marcar tareas como completadas o eliminarlas.
5. Las tareas eliminadas van a la papelera, donde puedes restaurarlas o eliminarlas permanentemente.

## Pruebas

Para ejecutar las pruebas:

```bash
pnpm test
```

Para ver la cobertura:

```bash
pnpm coverage
```

- Escribe una tarea en el campo "Nueva tarea".
- Presiona "Agregar tarea" para incluirla en la lista.
- Las tareas se muestran en la lista principal dentro de la página.

## Notas

- El proyecto usa `type: "module"` en `package.json` para habilitar módulos ES.
- Para cambiar el diseño, edita `src/style.css`.
