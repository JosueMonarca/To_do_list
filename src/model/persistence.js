export const PersistenceManager = {
    saveTasks(tasksData) {
        localStorage.setItem('my_todo_list', JSON.stringify(tasksData));
    },
    
    loadTasks() {
        // Leemos la libreta del navegador
        const storedData = localStorage.getItem('my_todo_list');
        
        return storedData ? JSON.parse(storedData) : [];
    }
};