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
- `src/components/` - Lógica del manejo de tareas y componentes.
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

- Escribe una tarea en el campo "Nueva tarea".
- Presiona "Agregar tarea" para incluirla en la lista.
- Las tareas se muestran en la lista principal dentro de la página.

## Notas

- El proyecto usa `type: "module"` en `package.json` para habilitar módulos ES.
- Para cambiar el diseño, edita `src/style.css`.
